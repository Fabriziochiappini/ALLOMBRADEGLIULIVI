import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Home, 
  Settings, 
  Image, 
  FileText, 
  Star,
  LogOut,
  Bed,
  Wifi,
  Users
} from "lucide-react";
import { useLocation } from "wouter";
import type { 
  Room, 
  Service, 
  Photo, 
  Review
} from "@shared/schema";

// Define types for content management
type ContentBlock = {
  id: string;
  title: string;
  type: string;
  page: string;
  content: string;
};

type VillaSetting = {
  id: string;
  key: string;
  value: string;
};

export default function AdminDashboard() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  // Check authentication
  const { data: authCheck, isLoading: authLoading } = useQuery({
    queryKey: ['/api/auth/check'],
    retry: false
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/auth/logout', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Logout failed');
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Logged out",
        description: "You have been successfully logged out"
      });
      setLocation('/admin/login');
    }
  });

  // Data queries
  const { data: contentBlocks = [] } = useQuery<ContentBlock[]>({
    queryKey: ['/api/content'],
    enabled: !!authCheck
  });

  const { data: rooms = [] } = useQuery<Room[]>({
    queryKey: ['/api/rooms'],
    enabled: !!authCheck
  });

  const { data: services = [] } = useQuery<Service[]>({
    queryKey: ['/api/services'],
    enabled: !!authCheck
  });

  const { data: photos = [] } = useQuery<Photo[]>({
    queryKey: ['/api/photos'],
    enabled: !!authCheck
  });

  const { data: reviews = [] } = useQuery<Review[]>({
    queryKey: ['/api/reviews'],
    enabled: !!authCheck
  });

  const { data: settings = [] } = useQuery<VillaSetting[]>({
    queryKey: ['/api/settings'],
    enabled: !!authCheck
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  // Show loading spinner during auth check
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!authCheck) {
    setLocation('/admin/login');
    return null;
  }

  const statsCards = [
    {
      title: "Content Blocks",
      count: contentBlocks.length,
      icon: FileText,
      description: "Page content sections"
    },
    {
      title: "Rooms",
      count: rooms.length,
      icon: Bed,
      description: "Available rooms"
    },
    {
      title: "Services",
      count: services.length,
      icon: Wifi,
      description: "Villa amenities"
    },
    {
      title: "Photos",
      count: photos.length,
      icon: Image,
      description: "Gallery images"
    },
    {
      title: "Reviews",
      count: reviews.length,
      icon: Star,
      description: "Guest reviews"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Home className="h-6 w-6 text-primary" />
              <div>
                <h1 className="text-lg font-semibold" data-testid="text-dashboard-title">
                  Villa all'Ombra degli Ulivi, Latiano - Admin
                </h1>
                <p className="text-sm text-muted-foreground">
                  Content Management Dashboard
                </p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              onClick={handleLogout}
              data-testid="button-logout"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview" data-testid="tab-overview">Overview</TabsTrigger>
            <TabsTrigger value="content" data-testid="tab-content">Content</TabsTrigger>
            <TabsTrigger value="rooms" data-testid="tab-rooms">Rooms</TabsTrigger>
            <TabsTrigger value="services" data-testid="tab-services">Services</TabsTrigger>
            <TabsTrigger value="photos" data-testid="tab-photos">Photos</TabsTrigger>
            <TabsTrigger value="reviews" data-testid="tab-reviews">Reviews</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {statsCards.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.title} className="hover-elevate">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {stat.title}
                      </CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold" data-testid={`stat-${stat.title.toLowerCase().replace(' ', '-')}`}>
                        {stat.count}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {/* Recent Content */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Content</CardTitle>
                  <CardDescription>
                    Latest content blocks and updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {contentBlocks.slice(0, 5).map((block) => (
                      <div key={block.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{block.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {block.type} • {block.page}
                          </p>
                        </div>
                        <Badge variant="secondary">{block.type}</Badge>
                      </div>
                    ))}
                    {contentBlocks.length === 0 && (
                      <p className="text-muted-foreground text-sm">No content blocks yet</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Villa Information</CardTitle>
                  <CardDescription>
                    Key villa details and settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Maximum Guests</span>
                      <Badge>8 guests</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Total Rooms</span>
                      <Badge>{rooms.length} rooms</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Available Services</span>
                      <Badge>{services.length} services</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Photo Gallery</span>
                      <Badge>{photos.length} photos</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Content Management Tab */}
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>
                  Manage page content blocks and descriptions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Content management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rooms Tab */}
          <TabsContent value="rooms">
            <Card>
              <CardHeader>
                <CardTitle>Room Management</CardTitle>
                <CardDescription>
                  Manage villa rooms and accommodations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Room management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Service Management</CardTitle>
                <CardDescription>
                  Manage villa services and amenities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Service management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos">
            <Card>
              <CardHeader>
                <CardTitle>Photo Gallery Management</CardTitle>
                <CardDescription>
                  Manage villa photos and image gallery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Photo management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Review Management</CardTitle>
                <CardDescription>
                  Manage guest reviews and testimonials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Review management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}