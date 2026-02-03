import { Feather, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WorkCard from "./WorkCard";

const featuredWorks = [
  {
    title: "Slaughterhouse",
    category: "Published Game",
    description: "A survival horror game built in Unreal Engine 5. Lead narrative design, AI systems, combat mechanics, and movement programming.",
    excerpt: "The slaughterhouse has become a breeding ground for unspeakable mutations. Twisted creatures, born of the facility's dark past, now roam the halls. What starts as a twisted quest soon turns into a desperate fight for survival...",
    link: "/narrative/slaughterhouse",
    tags: ["Unreal Engine 5", "Published", "Team Project"],
  },
  {
    title: "Quest Design - FOQUES (TVM)",
    category: "Quest Design & System Design",
    description: "A complete side quest system for FOQUES featuring 12 interconnected quests with branching narratives, moral choices, and consequence-based storytelling.",
    excerpt: "The snow crunches under Kari's paws. Before her lies a wounded lynx—her natural predator—trapped and desperate. The enemy of my enemy is my friend. But can she trust him? Every choice ripples through time, shaping allies, enemies, and the very landscape itself...",
    link: "/narrative/foques-quest-system",
    logo: "/TVM_Logo_Text.PNG",
    logoAlt: "TTV Media Studio",
  },
  {
    title: "Travnik - Worldbuilding",
    category: "Worldbuilding",
    description: "Complete worldbuilding documentation for a post-apocalyptic PvP/PvE shooter. Features three conflicting factions, radioactive mutation systems, and a rich lore spanning from nuclear war to space colonization.",
    excerpt: "In the aftermath of nuclear devastation, super-intelligent animals rise from the ashes while humanity devolves into monstrous Hoomans. Three factions clash for control...",
    link: "/narrative/travnik-worldbuilding",
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
