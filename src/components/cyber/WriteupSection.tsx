import { useState } from "react";
import WriteupCard from "./WriteupCard";
import { writeups } from "@/data/writeups";

const platforms = ["All", "HackTheBox", "TryHackMe", "Other"];

const WriteupSection = () => {
  const [activePlatform, setActivePlatform] = useState("All");

  const filteredWriteups = activePlatform === "All" 
    ? writeups 
    : writeups.filter(w => w.platform === activePlatform);

  return (
    <section id="writeups" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold">
              All <span className="text-gradient-cyber">Writeups</span>
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Filter by platform to explore more.
            </p>
          </div>
          {/* Platform filters */}
          <div className="flex flex-wrap gap-2">
            {platforms.map((platform) => (
              <button
                key={platform}
                onClick={() => setActivePlatform(platform)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all duration-300 ${
                  activePlatform === platform
                    ? "bg-cyber text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-cyber/20 hover:text-cyber"
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWriteups.map((writeup, index) => (
            <WriteupCard key={writeup.title} {...writeup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WriteupSection;
