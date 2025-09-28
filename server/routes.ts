import type { Express, Request } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContentSectionSchema, 
  insertRoomSchema, 
  insertServiceSchema, 
  insertPhotoSchema, 
  insertReviewSchema, 
  insertSettingSchema,
  insertUserSchema 
} from "@shared/schema";
import { ZodError } from "zod";
import bcrypt from "bcrypt";

// Helper function for consistent error handling
function handleError(error: unknown, operation: string, res: any) {
  if (error instanceof ZodError) {
    console.error(`Validation error ${operation}:`, error);
    res.status(400).json({ error: `Invalid data for ${operation}`, details: error.errors });
  } else {
    console.error(`Error ${operation}:`, error);
    res.status(500).json({ error: `Failed to ${operation}` });
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Middleware to check admin authentication for protected routes
  const requireAdmin = (req: Request, res: any, next: any) => {
    if (!req.session.userId || req.session.role !== 'admin') {
      return res.status(403).json({ error: "Admin access required" });
    }
    next();
  };
  
  // Authentication routes
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
      }
      
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
      
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
      
      // Store user session (simplified - in production use proper session management)
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.role = user.role;
      
      res.json({ 
        user: { 
          id: user.id, 
          username: user.username, 
          role: user.role 
        } 
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Login failed" });
    }
  });
  
  app.post("/api/auth/logout", async (req, res) => {
    try {
      req.session.destroy((err: any) => {
        if (err) {
          console.error("Error destroying session:", err);
          return res.status(500).json({ error: "Logout failed" });
        }
        res.json({ message: "Logged out successfully" });
      });
    } catch (error) {
      console.error("Error during logout:", error);
      res.status(500).json({ error: "Logout failed" });
    }
  });
  
  app.get("/api/auth/me", async (req, res) => {
    try {
      if (!req.session.userId) {
        return res.status(401).json({ error: "Not authenticated" });
      }
      
      const user = await storage.getUser(req.session.userId);
      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }
      
      res.json({ 
        user: { 
          id: user.id, 
          username: user.username, 
          role: user.role 
        } 
      });
    } catch (error) {
      console.error("Error getting current user:", error);
      res.status(500).json({ error: "Failed to get user info" });
    }
  });
  
  // Admin-only user registration endpoint
  app.post("/api/auth/register", requireAdmin, async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Check if username already exists
      const existingUser = await storage.getUserByUsername(userData.username);
      if (existingUser) {
        return res.status(409).json({ error: "Username already exists" });
      }
      
      // Hash the password before storing
      const hashedPassword = await bcrypt.hash(userData.password, 12);
      const userDataWithHashedPassword = {
        ...userData,
        password: hashedPassword
      };
      
      const user = await storage.createUser(userDataWithHashedPassword);
      res.status(201).json({ 
        user: { 
          id: user.id, 
          username: user.username, 
          role: user.role 
        } 
      });
    } catch (error) {
      handleError(error, "registering user", res);
    }
  });
  
  // Content Sections API
  app.get("/api/content-sections", async (req, res) => {
    try {
      const sections = await storage.getAllContentSections();
      res.json(sections);
    } catch (error) {
      console.error("Error fetching content sections:", error);
      res.status(500).json({ error: "Failed to fetch content sections" });
    }
  });

  app.get("/api/content-sections/:id", async (req, res) => {
    try {
      const section = await storage.getContentSection(req.params.id);
      if (!section) {
        return res.status(404).json({ error: "Content section not found" });
      }
      res.json(section);
    } catch (error) {
      console.error("Error fetching content section:", error);
      res.status(500).json({ error: "Failed to fetch content section" });
    }
  });

  app.get("/api/content-sections/by-key/:key", async (req, res) => {
    try {
      const section = await storage.getContentSectionByKey(req.params.key);
      if (!section) {
        return res.status(404).json({ error: "Content section not found" });
      }
      res.json(section);
    } catch (error) {
      console.error("Error fetching content section:", error);
      res.status(500).json({ error: "Failed to fetch content section" });
    }
  });

  app.post("/api/content-sections", requireAdmin, async (req, res) => {
    try {
      const sectionData = insertContentSectionSchema.parse(req.body);
      const section = await storage.createContentSection(sectionData);
      res.status(201).json(section);
    } catch (error) {
      handleError(error, "creating content section", res);
    }
  });

  app.put("/api/content-sections/:id", requireAdmin, async (req, res) => {
    try {
      const updates = insertContentSectionSchema.partial().parse(req.body);
      const section = await storage.updateContentSection(req.params.id, updates);
      if (!section) {
        return res.status(404).json({ error: "Content section not found" });
      }
      res.json(section);
    } catch (error) {
      handleError(error, "updating content section", res);
    }
  });

  app.delete("/api/content-sections/:id", requireAdmin, async (req, res) => {
    try {
      const deleted = await storage.deleteContentSection(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Content section not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting content section:", error);
      res.status(500).json({ error: "Failed to delete content section" });
    }
  });

  // Rooms API
  app.get("/api/rooms", async (req, res) => {
    try {
      const activeOnly = req.query.active === "true";
      const rooms = activeOnly ? await storage.getActiveRooms() : await storage.getAllRooms();
      res.json(rooms);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      res.status(500).json({ error: "Failed to fetch rooms" });
    }
  });

  app.get("/api/rooms/:id", async (req, res) => {
    try {
      const room = await storage.getRoom(req.params.id);
      if (!room) {
        return res.status(404).json({ error: "Room not found" });
      }
      res.json(room);
    } catch (error) {
      console.error("Error fetching room:", error);
      res.status(500).json({ error: "Failed to fetch room" });
    }
  });

  app.post("/api/rooms", requireAdmin, async (req, res) => {
    try {
      const roomData = insertRoomSchema.parse(req.body);
      const room = await storage.createRoom(roomData);
      res.status(201).json(room);
    } catch (error) {
      handleError(error, "creating room", res);
    }
  });

  app.put("/api/rooms/:id", requireAdmin, async (req, res) => {
    try {
      const updates = insertRoomSchema.partial().parse(req.body);
      const room = await storage.updateRoom(req.params.id, updates);
      if (!room) {
        return res.status(404).json({ error: "Room not found" });
      }
      res.json(room);
    } catch (error) {
      handleError(error, "updating room", res);
    }
  });

  app.delete("/api/rooms/:id", requireAdmin, async (req, res) => {
    try {
      const deleted = await storage.deleteRoom(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Room not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting room:", error);
      res.status(500).json({ error: "Failed to delete room" });
    }
  });

  // Services API
  app.get("/api/services", async (req, res) => {
    try {
      const activeOnly = req.query.active === "true";
      const category = req.query.category as string;
      
      let services;
      if (category) {
        services = await storage.getServicesByCategory(category);
      } else if (activeOnly) {
        services = await storage.getActiveServices();
      } else {
        services = await storage.getAllServices();
      }
      
      res.json(services);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  app.get("/api/services/:id", async (req, res) => {
    try {
      const service = await storage.getService(req.params.id);
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      console.error("Error fetching service:", error);
      res.status(500).json({ error: "Failed to fetch service" });
    }
  });

  app.post("/api/services", requireAdmin, async (req, res) => {
    try {
      const serviceData = insertServiceSchema.parse(req.body);
      const service = await storage.createService(serviceData);
      res.status(201).json(service);
    } catch (error) {
      handleError(error, "creating service", res);
    }
  });

  app.put("/api/services/:id", requireAdmin, async (req, res) => {
    try {
      const updates = insertServiceSchema.partial().parse(req.body);
      const service = await storage.updateService(req.params.id, updates);
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      handleError(error, "updating service", res);
    }
  });

  app.delete("/api/services/:id", requireAdmin, async (req, res) => {
    try {
      const deleted = await storage.deleteService(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting service:", error);
      res.status(500).json({ error: "Failed to delete service" });
    }
  });

  // Photos API
  app.get("/api/photos", async (req, res) => {
    try {
      const category = req.query.category as string;
      const photos = category 
        ? await storage.getPhotosByCategory(category)
        : await storage.getAllPhotos();
      res.json(photos);
    } catch (error) {
      console.error("Error fetching photos:", error);
      res.status(500).json({ error: "Failed to fetch photos" });
    }
  });

  app.get("/api/photos/:id", async (req, res) => {
    try {
      const photo = await storage.getPhoto(req.params.id);
      if (!photo) {
        return res.status(404).json({ error: "Photo not found" });
      }
      res.json(photo);
    } catch (error) {
      console.error("Error fetching photo:", error);
      res.status(500).json({ error: "Failed to fetch photo" });
    }
  });

  app.post("/api/photos", requireAdmin, async (req, res) => {
    try {
      const photoData = insertPhotoSchema.parse(req.body);
      const photo = await storage.createPhoto(photoData);
      res.status(201).json(photo);
    } catch (error) {
      handleError(error, "creating photo", res);
    }
  });

  app.put("/api/photos/:id", requireAdmin, async (req, res) => {
    try {
      const updates = insertPhotoSchema.partial().parse(req.body);
      const photo = await storage.updatePhoto(req.params.id, updates);
      if (!photo) {
        return res.status(404).json({ error: "Photo not found" });
      }
      res.json(photo);
    } catch (error) {
      handleError(error, "updating photo", res);
    }
  });

  app.delete("/api/photos/:id", requireAdmin, async (req, res) => {
    try {
      const deleted = await storage.deletePhoto(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Photo not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting photo:", error);
      res.status(500).json({ error: "Failed to delete photo" });
    }
  });

  // Reviews API
  app.get("/api/reviews", async (req, res) => {
    try {
      const activeOnly = req.query.active === "true";
      const reviews = activeOnly 
        ? await storage.getActiveReviews() 
        : await storage.getAllReviews();
      res.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });

  app.get("/api/reviews/:id", async (req, res) => {
    try {
      const review = await storage.getReview(req.params.id);
      if (!review) {
        return res.status(404).json({ error: "Review not found" });
      }
      res.json(review);
    } catch (error) {
      console.error("Error fetching review:", error);
      res.status(500).json({ error: "Failed to fetch review" });
    }
  });

  app.post("/api/reviews", requireAdmin, async (req, res) => {
    try {
      const reviewData = insertReviewSchema.parse(req.body);
      const review = await storage.createReview(reviewData);
      res.status(201).json(review);
    } catch (error) {
      handleError(error, "creating review", res);
    }
  });

  app.put("/api/reviews/:id", requireAdmin, async (req, res) => {
    try {
      const updates = insertReviewSchema.partial().parse(req.body);
      const review = await storage.updateReview(req.params.id, updates);
      if (!review) {
        return res.status(404).json({ error: "Review not found" });
      }
      res.json(review);
    } catch (error) {
      handleError(error, "updating review", res);
    }
  });

  app.delete("/api/reviews/:id", requireAdmin, async (req, res) => {
    try {
      const deleted = await storage.deleteReview(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Review not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting review:", error);
      res.status(500).json({ error: "Failed to delete review" });
    }
  });

  // Settings API
  app.get("/api/settings", async (req, res) => {
    try {
      const settings = await storage.getAllSettings();
      res.json(settings);
    } catch (error) {
      console.error("Error fetching settings:", error);
      res.status(500).json({ error: "Failed to fetch settings" });
    }
  });

  app.get("/api/settings/:key", async (req, res) => {
    try {
      const setting = await storage.getSetting(req.params.key);
      if (!setting) {
        return res.status(404).json({ error: "Setting not found" });
      }
      res.json(setting);
    } catch (error) {
      console.error("Error fetching setting:", error);
      res.status(500).json({ error: "Failed to fetch setting" });
    }
  });

  app.post("/api/settings", requireAdmin, async (req, res) => {
    try {
      const settingData = insertSettingSchema.parse(req.body);
      const setting = await storage.createSetting(settingData);
      res.status(201).json(setting);
    } catch (error) {
      handleError(error, "creating setting", res);
    }
  });

  app.put("/api/settings/:key", requireAdmin, async (req, res) => {
    try {
      const { value } = req.body;
      if (typeof value !== "string") {
        return res.status(400).json({ error: "Setting value must be a string" });
      }
      const setting = await storage.updateSetting(req.params.key, value);
      if (!setting) {
        return res.status(404).json({ error: "Setting not found" });
      }
      res.json(setting);
    } catch (error) {
      console.error("Error updating setting:", error);
      res.status(500).json({ error: "Failed to update setting" });
    }
  });

  app.delete("/api/settings/:key", requireAdmin, async (req, res) => {
    try {
      const deleted = await storage.deleteSetting(req.params.key);
      if (!deleted) {
        return res.status(404).json({ error: "Setting not found" });
      }
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting setting:", error);
      res.status(500).json({ error: "Failed to delete setting" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
