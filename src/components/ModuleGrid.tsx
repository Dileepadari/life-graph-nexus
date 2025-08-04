import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Calendar, 
  Users, 
  FolderKanban, 
  DollarSign, 
  Clock, 
  BookOpen, 
  BarChart3,
  ArrowUpRight
} from "lucide-react";

const modules = [
  {
    title: "Map Dashboard",
    description: "Interactive visual overview of your life system",
    icon: MapPin,
    color: "from-primary to-primary-glow",
    features: ["Project nodes", "Relationship mapping", "Timeline filters"]
  },
  {
    title: "Scheduler",
    description: "Smart appointment booking and calendar management",
    icon: Calendar,
    color: "from-accent to-accent-glow",
    features: ["Auto-scheduling", "Public booking", "Calendar sync"]
  },
  {
    title: "People & Relations",
    description: "Track relationships and collaboration history",
    icon: Users,
    color: "from-success to-success",
    features: ["Contact management", "Meeting notes", "Trust metrics"]
  },
  {
    title: "Project Manager",
    description: "Manage life projects with visual progress tracking",
    icon: FolderKanban,
    color: "from-warning to-warning",
    features: ["Kanban boards", "Timeline view", "Collaboration"]
  },
  {
    title: "Finance Tracker",
    description: "Personal finance management and goal tracking",
    icon: DollarSign,
    color: "from-destructive to-destructive",
    features: ["Expense tracking", "Investment monitor", "Budget planning"]
  },
  {
    title: "Day Planner",
    description: "Smart daily scheduling with task suggestions",
    icon: Clock,
    color: "from-primary to-accent",
    features: ["Time blocking", "Task automation", "Weekly templates"]
  },
  {
    title: "Knowledge Base",
    description: "Organized notes and research with smart search",
    icon: BookOpen,
    color: "from-accent to-primary",
    features: ["Markdown support", "Tag organization", "Version history"]
  },
  {
    title: "Analytics",
    description: "Insights and reports across all life modules",
    icon: BarChart3,
    color: "from-success to-accent",
    features: ["Progress tracking", "Time analysis", "Custom reports"]
  }
];

const ModuleGrid = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Life Modules
            </span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Comprehensive tools to manage every aspect of your personal and professional life in one integrated system.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <div
                key={module.title}
                className="group relative bg-card/80 backdrop-blur-glass border border-card-border rounded-xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon with gradient background */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 shadow-soft`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {module.title}
                </h3>
                
                <p className="text-foreground-muted mb-4 text-sm leading-relaxed">
                  {module.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {module.features.map((feature) => (
                    <li key={feature} className="text-xs text-foreground-muted flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary"
                >
                  Open Module
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                
                {/* Subtle glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModuleGrid;