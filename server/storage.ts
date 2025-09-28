import { 
  type User, type InsertUser,
  type ContentSection, type InsertContentSection,
  type Room, type InsertRoom,
  type Service, type InsertService,
  type Photo, type InsertPhoto,
  type Review, type InsertReview,
  type Setting, type InsertSetting
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Content Sections
  getAllContentSections(): Promise<ContentSection[]>;
  getContentSectionByKey(key: string): Promise<ContentSection | undefined>;
  createContentSection(section: InsertContentSection): Promise<ContentSection>;
  updateContentSection(id: string, section: Partial<InsertContentSection>): Promise<ContentSection | undefined>;
  deleteContentSection(id: string): Promise<boolean>;

  // Rooms
  getAllRooms(): Promise<Room[]>;
  getActiveRooms(): Promise<Room[]>;
  getRoom(id: string): Promise<Room | undefined>;
  createRoom(room: InsertRoom): Promise<Room>;
  updateRoom(id: string, room: Partial<InsertRoom>): Promise<Room | undefined>;
  deleteRoom(id: string): Promise<boolean>;

  // Services
  getAllServices(): Promise<Service[]>;
  getActiveServices(): Promise<Service[]>;
  getServicesByCategory(category: string): Promise<Service[]>;
  getService(id: string): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  updateService(id: string, service: Partial<InsertService>): Promise<Service | undefined>;
  deleteService(id: string): Promise<boolean>;

  // Photos
  getAllPhotos(): Promise<Photo[]>;
  getPhotosByCategory(category: string): Promise<Photo[]>;
  getPhoto(id: string): Promise<Photo | undefined>;
  createPhoto(photo: InsertPhoto): Promise<Photo>;
  updatePhoto(id: string, photo: Partial<InsertPhoto>): Promise<Photo | undefined>;
  deletePhoto(id: string): Promise<boolean>;

  // Reviews
  getAllReviews(): Promise<Review[]>;
  getActiveReviews(): Promise<Review[]>;
  getReview(id: string): Promise<Review | undefined>;
  createReview(review: InsertReview): Promise<Review>;
  updateReview(id: string, review: Partial<InsertReview>): Promise<Review | undefined>;
  deleteReview(id: string): Promise<boolean>;

  // Settings
  getAllSettings(): Promise<Setting[]>;
  getSetting(key: string): Promise<Setting | undefined>;
  createSetting(setting: InsertSetting): Promise<Setting>;
  updateSetting(key: string, value: string): Promise<Setting | undefined>;
  deleteSetting(key: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contentSections: Map<string, ContentSection>;
  private rooms: Map<string, Room>;
  private services: Map<string, Service>;
  private photos: Map<string, Photo>;
  private reviews: Map<string, Review>;
  private settings: Map<string, Setting>;

  constructor() {
    this.users = new Map();
    this.contentSections = new Map();
    this.rooms = new Map();
    this.services = new Map();
    this.photos = new Map();
    this.reviews = new Map();
    this.settings = new Map();
  }

  // Users
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id, 
      role: insertUser.role || "admin",
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  // Content Sections
  async getAllContentSections(): Promise<ContentSection[]> {
    return Array.from(this.contentSections.values()).sort((a, b) => a.key.localeCompare(b.key));
  }

  async getContentSectionByKey(key: string): Promise<ContentSection | undefined> {
    return Array.from(this.contentSections.values()).find(section => section.key === key);
  }

  async createContentSection(insertSection: InsertContentSection): Promise<ContentSection> {
    const id = randomUUID();
    const section: ContentSection = {
      ...insertSection,
      id,
      isActive: insertSection.isActive ?? true,
      updatedAt: new Date()
    };
    this.contentSections.set(id, section);
    return section;
  }

  async updateContentSection(id: string, updates: Partial<InsertContentSection>): Promise<ContentSection | undefined> {
    const section = this.contentSections.get(id);
    if (!section) return undefined;
    
    const updated: ContentSection = {
      ...section,
      ...updates,
      updatedAt: new Date()
    };
    this.contentSections.set(id, updated);
    return updated;
  }

  async deleteContentSection(id: string): Promise<boolean> {
    return this.contentSections.delete(id);
  }

  // Rooms
  async getAllRooms(): Promise<Room[]> {
    return Array.from(this.rooms.values()).sort((a, b) => a.order - b.order);
  }

  async getActiveRooms(): Promise<Room[]> {
    return Array.from(this.rooms.values())
      .filter(room => room.isActive)
      .sort((a, b) => a.order - b.order);
  }

  async getRoom(id: string): Promise<Room | undefined> {
    return this.rooms.get(id);
  }

  async createRoom(insertRoom: InsertRoom): Promise<Room> {
    const id = randomUUID();
    const room: Room = { 
      ...insertRoom, 
      id,
      isActive: insertRoom.isActive ?? true,
      amenities: insertRoom.amenities ?? [],
      gallery: insertRoom.gallery ?? [],
      order: insertRoom.order ?? 0,
      mainImage: insertRoom.mainImage ?? null
    };
    this.rooms.set(id, room);
    return room;
  }

  async updateRoom(id: string, updates: Partial<InsertRoom>): Promise<Room | undefined> {
    const room = this.rooms.get(id);
    if (!room) return undefined;
    
    const updated: Room = { ...room, ...updates };
    this.rooms.set(id, updated);
    return updated;
  }

  async deleteRoom(id: string): Promise<boolean> {
    return this.rooms.delete(id);
  }

  // Services
  async getAllServices(): Promise<Service[]> {
    return Array.from(this.services.values()).sort((a, b) => a.order - b.order);
  }

  async getActiveServices(): Promise<Service[]> {
    return Array.from(this.services.values())
      .filter(service => service.isActive)
      .sort((a, b) => a.order - b.order);
  }

  async getServicesByCategory(category: string): Promise<Service[]> {
    return Array.from(this.services.values())
      .filter(service => service.category === category && service.isActive)
      .sort((a, b) => a.order - b.order);
  }

  async getService(id: string): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = randomUUID();
    const service: Service = { 
      ...insertService, 
      id,
      isActive: insertService.isActive ?? true,
      order: insertService.order ?? 0
    };
    this.services.set(id, service);
    return service;
  }

  async updateService(id: string, updates: Partial<InsertService>): Promise<Service | undefined> {
    const service = this.services.get(id);
    if (!service) return undefined;
    
    const updated: Service = { ...service, ...updates };
    this.services.set(id, updated);
    return updated;
  }

  async deleteService(id: string): Promise<boolean> {
    return this.services.delete(id);
  }

  // Photos
  async getAllPhotos(): Promise<Photo[]> {
    return Array.from(this.photos.values()).sort((a, b) => a.order - b.order);
  }

  async getPhotosByCategory(category: string): Promise<Photo[]> {
    return Array.from(this.photos.values())
      .filter(photo => photo.category === category)
      .sort((a, b) => a.order - b.order);
  }

  async getPhoto(id: string): Promise<Photo | undefined> {
    return this.photos.get(id);
  }

  async createPhoto(insertPhoto: InsertPhoto): Promise<Photo> {
    const id = randomUUID();
    const photo: Photo = { 
      ...insertPhoto, 
      id,
      title: insertPhoto.title ?? null,
      description: insertPhoto.description ?? null,
      order: insertPhoto.order ?? 0,
      uploadedAt: new Date()
    };
    this.photos.set(id, photo);
    return photo;
  }

  async updatePhoto(id: string, updates: Partial<InsertPhoto>): Promise<Photo | undefined> {
    const photo = this.photos.get(id);
    if (!photo) return undefined;
    
    const updated: Photo = { ...photo, ...updates };
    this.photos.set(id, updated);
    return updated;
  }

  async deletePhoto(id: string): Promise<boolean> {
    return this.photos.delete(id);
  }

  // Reviews
  async getAllReviews(): Promise<Review[]> {
    return Array.from(this.reviews.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async getActiveReviews(): Promise<Review[]> {
    return Array.from(this.reviews.values())
      .filter(review => review.isActive)
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }

  async getReview(id: string): Promise<Review | undefined> {
    return this.reviews.get(id);
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const id = randomUUID();
    const review: Review = { 
      ...insertReview, 
      id,
      isActive: insertReview.isActive ?? true,
      isVerified: insertReview.isVerified ?? false,
      location: insertReview.location ?? null,
      stayDate: insertReview.stayDate ?? null,
      createdAt: new Date()
    };
    this.reviews.set(id, review);
    return review;
  }

  async updateReview(id: string, updates: Partial<InsertReview>): Promise<Review | undefined> {
    const review = this.reviews.get(id);
    if (!review) return undefined;
    
    const updated: Review = { ...review, ...updates };
    this.reviews.set(id, updated);
    return updated;
  }

  async deleteReview(id: string): Promise<boolean> {
    return this.reviews.delete(id);
  }

  // Settings
  async getAllSettings(): Promise<Setting[]> {
    return Array.from(this.settings.values()).sort((a, b) => a.key.localeCompare(b.key));
  }

  async getSetting(key: string): Promise<Setting | undefined> {
    return Array.from(this.settings.values()).find(setting => setting.key === key);
  }

  async createSetting(insertSetting: InsertSetting): Promise<Setting> {
    const id = randomUUID();
    const setting: Setting = { 
      ...insertSetting, 
      id,
      description: insertSetting.description ?? null,
      updatedAt: new Date()
    };
    this.settings.set(id, setting);
    return setting;
  }

  async updateSetting(key: string, value: string): Promise<Setting | undefined> {
    const existing = Array.from(this.settings.values()).find(s => s.key === key);
    if (!existing) return undefined;
    
    const updated: Setting = {
      ...existing,
      value,
      updatedAt: new Date()
    };
    this.settings.set(existing.id, updated);
    return updated;
  }

  async deleteSetting(key: string): Promise<boolean> {
    const existing = Array.from(this.settings.values()).find(s => s.key === key);
    if (!existing) return false;
    return this.settings.delete(existing.id);
  }
}

export const storage = new MemStorage();
