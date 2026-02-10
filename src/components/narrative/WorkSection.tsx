import { useState } from "react";
import WorkCard from "./WorkCard";
import { works } from "@/data/works";

const categories = ["All", "Games", "Quest Design", "Worldbuilding", "Game Jams"];

const WorkSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks = activeCategory === "All" 
    ? works 
    : works.filter(work => {
        const categories = Array.isArray(work.category) ? work.category : [work.category];
        return categories.includes(activeCategory);
      });

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
