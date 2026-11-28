import { Button } from "@/components/ui/button";
import { Briefcase, ChevronDown, Shield, ShieldCheck } from "lucide-react";

const highlights = [
  "Isdefe · Technical Office of the COCS (AGE)",
  "ISO/IEC 27001 · ENS · GDPR",
  "Master's Degree in Cybersecurity",
];

const CyberHero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-background to-ink opacity-90" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-cyber/5 blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-cyber/3 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 text-center">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber/30 bg-cyber/5">
            <Shield className="w-4 h-4 text-cyber" />
            <span className="font-mono text-sm text-cyber">GRC &amp; Cybersecurity Consultant</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-tight">
            Óscar Pérez Fernández
          </h1>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            Securing Organizations <span className="text-gradient-cyber">Through Governance &amp; Control</span>
          </h2>

          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Governance, risk &amp; compliance and security project management for the public sector,
            backed by a solid technical foundation.
          </p>

          <ul className="flex flex-wrap justify-center gap-2 mb-6 max-w-3xl mx-auto">
            {highlights.map((item) => (
              <li
                key={item}
                className="px-3 py-1.5 rounded-lg bg-secondary/50 text-sm font-body text-secondary-foreground"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mb-12 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-terminal/30 bg-terminal/10">
            <ShieldCheck className="w-4 h-4 text-terminal flex-shrink-0" />
            <span className="text-sm font-body text-muted-foreground">
              <span className="text-terminal font-semibold">Active Security Clearance (HPS):</span>{" "}
              National · NATO · EU · ESA
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cyber" size="xl" onClick={() => scrollTo("cv")}>
              <Briefcase className="mr-2" size={20} />
              View Experience
            </Button>
            <Button variant="cyberOutline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollTo("skills")}
            aria-label="Scroll to competencies"
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
