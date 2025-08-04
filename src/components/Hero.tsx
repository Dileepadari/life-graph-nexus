import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-card-border backdrop-blur-glass">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm text-foreground-muted">Available for collaboration</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                My Life
              </span>
              <br />
              <span className="text-foreground">System</span>
            </h1>
            
            <p className="text-xl text-foreground-muted max-w-lg leading-relaxed">
              A unified personal and professional management platform that integrates all aspects of your life into a visually organized, dynamic system.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="group">
              Explore Modules
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              <Calendar className="mr-2" />
              Book Meeting
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mail />
            </Button>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 scale-105" />
            
            {/* Image Container */}
            <div className="relative bg-card/80 backdrop-blur-glass border border-card-border rounded-2xl p-8 shadow-glow">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-auto rounded-xl shadow-accent"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-glass border border-card-border rounded-lg p-3 shadow-soft">
                <div className="text-sm font-medium text-foreground">12 Active Projects</div>
                <div className="text-xs text-foreground-muted">In Progress</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-glass border border-card-border rounded-lg p-3 shadow-soft">
                <div className="text-sm font-medium text-foreground">5+ Years Experience</div>
                <div className="text-xs text-foreground-muted">Building Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-foreground-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground-muted rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;