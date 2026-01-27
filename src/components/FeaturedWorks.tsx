import { Feather, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WorkCard from "./WorkCard";

const featuredWorks = [
  {
    title: "The Hollow Crown",
    category: "Quest Design",
    description: "A branching questline exploring themes of power and sacrifice, featuring 12 unique endings based on player moral choices.",
    excerpt: "The throne room fell silent as the last echo of steel faded. Before you lies the crown—but at what cost? The kingdom awaits your decision, yet every path forward is paved with the memories of those who fell...",
  },
  {
    title: "Chronicles of the Shattered Realm",
    category: "Lore",
    description: "Deep world-building documentation for a post-apocalyptic fantasy setting, including 200+ years of fictional history.",
    excerpt: "In the Third Age of Silence, when the gods turned their backs and the stars grew cold, humanity learned to forge hope from the ashes of celestial betrayal...",
  },
  {
    title: "Commander Seraphine Vex",
    category: "Characters",
    description: "A complex antagonist with a 40-page character bible, including backstory, motivations, and relationship dynamics.",
    excerpt: "She never raised her voice. That was what made her terrifying—the calm certainty in her eyes as she ordered the destruction of everything you loved, as if it were merely... arithmetic.",
  },
];

const FeaturedWorks = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="container mx-auto px-6">
        {/* Compact intro */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-4">
              <Feather className="w-4 h-4 text-gold" />
              <span className="font-body text-xs text-gold tracking-wider uppercase">Narrative Designer</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
              Featured <span className="text-gradient-gold">Work</span>
            </h1>
            <p className="text-muted-foreground max-w-lg">
              Selected pieces from my narrative design portfolio. Quests, lore, and characters.
            </p>
          </div>
          <Button variant="outline" size="sm" className="border-gold/30 text-gold hover:bg-gold/10" onClick={scrollToWork}>
            View all work
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Featured cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWorks.map((work, index) => (
            <WorkCard key={work.title} {...work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
