import { useState } from "react";
import WorkCard from "./WorkCard";

const categories = ["All", "Games", "Quest Design", "Worldbuilding", "Characters"];

const works = [
  {
    title: "Slaughterhouse",
    category: "Games",
    description: "A survival horror game built in Unreal Engine 5. Lead narrative design, AI systems, combat mechanics, and movement programming. Published on Itch.io.",
    excerpt: "The slaughterhouse has become a breeding ground for unspeakable mutations. Twisted creatures, born of the facility's dark past, now roam the halls. What starts as a twisted quest for approval soon turns into a desperate fight for survival...",
    link: "/narrative/slaughterhouse",
    tags: ["Unreal Engine 5", "Published", "Team Project"],
  },
  {
    title: "Side Quest System - FOQUES",
    category: "Quest Design",
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
    excerpt: "In the aftermath of nuclear devastation, super-intelligent animals rise from the ashes while humanity devolves into monstrous Hoomans. Three factions clash for control of the last habitable city on Earth...",
    link: "/narrative/travnik-worldbuilding",
  },
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
  {
    title: "Whispers in the Archive",
    category: "Quest Design",
    description: "An investigation-focused quest involving environmental storytelling and cryptic puzzles hidden in ancient texts.",
    excerpt: "The librarian's final note read: 'They do not sleep. They wait. And in waiting, they remember everything we've tried to forget.'",
  },
  {
    title: "The Void Between Names",
    category: "Lore",
    description: "Mythology system exploring the metaphysics of magic, death, and the nature of consciousness in-universe.",
    excerpt: "To speak a true name is to hold power. But what of those who have forgotten their own? In the spaces between syllables, something else begins to listen...",
  },
  {
    title: "Elder Merchant Kassim",
    category: "Characters",
    description: "A recurring NPC designed to evolve based on player reputation, with dynamic dialogue systems and hidden quests.",
    excerpt: "His smile never quite reached his eyes—but then again, a man who's outlived three empires learns to keep some things to himself. 'Information,' he'd say, 'is the only currency that appreciates with age.'",
  },
];

const WorkSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks = activeCategory === "All" 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <section id="work" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold">
              All <span className="text-gradient-gold">Works</span>
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Filter by category to explore more.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-full font-body text-xs transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gold text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-gold/20 hover:text-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work, index) => (
            <WorkCard key={work.title} {...work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
