import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Terminal } from "lucide-react";

const CyberHero = () => {
  const scrollToWriteups = () => {
    document.getElementById("writeups")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-background to-ink opacity-90" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--cyber) / 0.05) 2px, hsl(var(--cyber) / 0.05) 4px)"
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-cyber/5 blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-cyber/3 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Terminal-style decorations */}
      <div className="absolute top-32 right-10 text-cyber/20 font-mono text-xs hidden lg:block">
        <div>$ analyzing_threats...</div>
        <div>$ securing_network...</div>
        <div>$ status: <span className="text-terminal">PROTECTED</span></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber/30 bg-cyber/5">
            <Shield className="w-4 h-4 text-cyber" />
            <span className="font-mono text-sm text-cyber">Cybersecurity Consultant · GRC &amp; PMO</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-tight">
            Óscar Pérez Fernández
          </h1>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            Defending Systems <span className="text-gradient-cyber">With Precision</span>  
          </h2>
          
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Governance, risk &amp; compliance, security project management
            and hands-on technical research.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cyber" size="xl" onClick={scrollToWriteups}>
              <Terminal className="mr-2" size={20} />
              View My Work
            </Button>
            <Button variant="cyberOutline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={scrollToWriteups}
            className="mt-12 text-muted-foreground hover:text-cyber transition-colors duration-300 animate-bounce-slow"
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

export default CyberHero;
