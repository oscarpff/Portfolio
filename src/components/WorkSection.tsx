import { useState } from "react";
import WorkCard from "./WorkCard";

const categories = ["All", "Quest Design", "Lore", "Characters"];

const works = [
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
    <section id="work" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
            Selected <span className="text-gradient-gold">Works</span>
          </h2>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gold text-background"
                  : "bg-secondary text-secondary-foreground hover:bg-gold/20 hover:text-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Work cards grid */}
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
