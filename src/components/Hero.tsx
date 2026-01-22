import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-ink opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-gold/3 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-tight">
            Óscar Pérez Fernández
          </h1>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            Crafting Worlds <span className="text-gradient-gold">Through Words</span>  
          </h2>
          
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Quest design, world-building, and character narratives that bring 
            interactive stories to life. Every word matters, every choice echoes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" onClick={scrollToWork}>
              Explore My Work
            </Button>
            <Button variant="goldOutline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={scrollToWork}
            className="mt-12 text-muted-foreground hover:text-gold transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
