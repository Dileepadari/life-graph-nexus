import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ModuleGrid from "@/components/ModuleGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="modules">
          <ModuleGrid />
        </div>
      </main>
    </div>
  );
};

export default Index;
