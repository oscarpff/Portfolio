import { useState } from "react";
import { Link } from "react-router-dom";
import { Feather, Shield } from "lucide-react";

const SplitLanding = () => {
  const [hoveredSide, setHoveredSide] = useState<"narrative" | "cyber" | null>(null);

  return (
    <div className="h-screen w-full overflow-hidden relative flex">
      {/* Narrative Design Side */}
      <Link
        to="/narrative"
        onClick={() => window.scrollTo(0, 0)}
        className="relative flex-1 flex items-center justify-center cursor-pointer group overflow-hidden"
        onMouseEnter={() => setHoveredSide("narrative")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-background to-ink-light" />
        
        {/* Decorative gold glow */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-gold-glow/5 blur-2xl" />
        
        {/* Content */}
        <div className={`relative z-10 text-center px-8 transition-all duration-300 ${
          hoveredSide === "cyber" ? "opacity-40 scale-95" : hoveredSide === "narrative" ? "scale-105" : "opacity-100"
        }`}>
          <div className={`mb-6 inline-flex p-4 rounded-full border border-gold/30 bg-gold/5 transition-all duration-300 ${
            hoveredSide === "narrative" ? "scale-110 border-gold/60 bg-gold/10 shadow-lg shadow-gold/20" : ""
          }`}>
            <Feather className="w-12 h-12 text-gold" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            <span className="text-gradient-gold">Game & Narrative</span>
            <br />
            <span className="text-foreground/90">Design</span>
          </h2>
          
          <p className={`font-body text-muted-foreground max-w-xs mx-auto transition-all duration-300 ${
            hoveredSide === "narrative" ? "opacity-100" : "opacity-70"
          }`}>
            Games, quest design, world-building, and stories that bring ideas to life.
          </p>
          
          <div className={`mt-8 font-body text-sm text-gold tracking-widest uppercase transition-all duration-300 ${
            hoveredSide === "narrative" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Enter Portfolio →
          </div>
        </div>
        
        {/* Diagonal edge */}
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-background/50 to-background pointer-events-none" 
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 100% 0)" }} 
        />
      </Link>

      {/* Diagonal Divider */}
      <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
        <div 
          className="w-1 h-full bg-gradient-to-b from-gold/0 via-foreground/20 to-cyber/0"
          style={{ transform: "rotate(10deg) scaleY(1.2)" }}
        />
      </div>

      {/* Central Neutral Zone */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-32 z-25 cursor-default"
        onMouseEnter={() => setHoveredSide(null)}
      />

      {/* Cybersecurity Side */}
      <Link
        to="/cybersecurity"
        onClick={() => window.scrollTo(0, 0)}
        className="relative flex-1 flex items-center justify-center cursor-pointer group overflow-hidden"
        onMouseEnter={() => setHoveredSide("cyber")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-cyber-dark via-background to-ink" />
        
        {/* Decorative cyber glow */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-cyber/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-cyber-glow/5 blur-2xl" />
        
        {/* Scanline effect */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--cyber) / 0.03) 2px, hsl(var(--cyber) / 0.03) 4px)"
          }}
        />
        
        {/* Content */}
        <div className={`relative z-10 text-center px-8 transition-all duration-300 ${
          hoveredSide === "narrative" ? "opacity-40 scale-95" : hoveredSide === "cyber" ? "scale-105" : "opacity-100"
        }`}>
          <div className={`mb-6 inline-flex p-4 rounded-full border border-cyber/30 bg-cyber/5 transition-all duration-300 ${
            hoveredSide === "cyber" ? "scale-110 border-cyber/60 bg-cyber/10 shadow-lg shadow-cyber/20" : ""
          }`}>
            <Shield className="w-12 h-12 text-cyber" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            <span className="text-gradient-cyber">Cybersecurity</span>
            <br />
            <span className="text-foreground/90">Portfolio</span>
          </h2>
          
          <p className={`font-body text-muted-foreground max-w-xs mx-auto transition-all duration-300 ${
            hoveredSide === "cyber" ? "opacity-100" : "opacity-70"
          }`}>
            GRC, security project management, CTF challenges and research projects.
          </p>
          
          <div className={`mt-8 font-body text-sm text-cyber tracking-widest uppercase transition-all duration-300 ${
            hoveredSide === "cyber" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Enter Portfolio →
          </div>
        </div>
        
        {/* Diagonal edge */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-l from-transparent via-background/50 to-background pointer-events-none"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%, 0 0)" }}
        />
      </Link>

      {/* Center name badge */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30">
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 whitespace-nowrap">
          Óscar Pérez Fernández
        </h1>
      </div>
    </div>
  );
};

export default SplitLanding;
