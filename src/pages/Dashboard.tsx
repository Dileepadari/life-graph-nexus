import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Users, 
  FolderOpen, 
  DollarSign, 
  BookOpen, 
  Clock,
  BarChart3,
  LogOut
} from 'lucide-react';

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const modules = [
    {
      id: 'projects',
      title: 'Projects',
      description: 'Manage your life and work projects',
      icon: FolderOpen,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'people',
      title: 'People',
      description: 'Track relationships and connections',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'scheduler',
      title: 'Scheduler',
      description: 'Meetings and appointments',
      icon: Calendar,
      color: 'from-purple-500 to-violet-600',
    },
    {
      id: 'finance',
      title: 'Finance',
      description: 'Track income, expenses, and investments',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-600',
    },
    {
      id: 'knowledge',
      title: 'Knowledge Base',
      description: 'Notes, research, and documentation',
      icon: BookOpen,
      color: 'from-indigo-500 to-blue-600',
    },
    {
      id: 'planner',
      title: 'Day Planner',
      description: 'Daily schedules and time management',
      icon: Clock,
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'Insights and progress tracking',
      icon: BarChart3,
      color: 'from-teal-500 to-cyan-600',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">My Life System</h1>
            <p className="text-muted-foreground">Welcome back, {user.email}</p>
          </div>
          <Button variant="outline" onClick={signOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="map">Life Map</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">People Connected</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">48</div>
                  <p className="text-xs text-muted-foreground">+3 new this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">This Month Expenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹32,450</div>
                  <p className="text-xs text-muted-foreground">-8% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Knowledge Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">127</div>
                  <p className="text-xs text-muted-foreground">+15 this week</p>
                </CardContent>
              </Card>
            </div>

            {/* Module Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module) => {
                const Icon = module.icon;
                return (
                  <Card key={module.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle>{module.title}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full" asChild>
                        <a href={module.id === 'projects' ? '/projects' : '#'}>
                          Open Module
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="map">
            <Card>
              <CardHeader>
                <CardTitle>Life Map</CardTitle>
                <CardDescription>
                  Interactive visualization of your projects, relationships, and activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive life map coming soon...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;