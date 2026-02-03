import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WriteupCard from "./WriteupCard";
import { writeups, featuredWriteupIds } from "@/data/writeups";

const featuredWriteups = featuredWriteupIds.map(id => writeups[id]);

const FeaturedWriteups = () => {
  const scrollToWriteups = () => {
    document.getElementById("writeups")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="container mx-auto px-6">
        {/* Compact intro */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyber/30 bg-cyber/5 mb-4">
              <Shield className="w-4 h-4 text-cyber" />
              <span className="font-mono text-xs text-cyber">Security Analyst</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
              Featured <span className="text-gradient-cyber">Work</span>
            </h1>
            <p className="text-muted-foreground max-w-lg">
              Recent CTF writeups and security research. Documenting techniques and methodologies.
            </p>
          </div>
          <Button variant="cyberOutline" size="sm" onClick={scrollToWriteups}>
            View all writeups
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Featured cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWriteups.map((writeup, index) => (
            <WriteupCard key={writeup.title} {...writeup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWriteups;
