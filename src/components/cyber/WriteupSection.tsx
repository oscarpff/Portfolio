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
    <section id="writeups" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-cyber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Writeups
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
            CTF <span className="text-gradient-cyber">Writeups</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Detailed documentation of challenges solved, techniques used, and lessons learned.
          </p>
        </div>

        {/* Platform filters */}
        {writeups.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mb-12">
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
        )}
        {filteredWriteups.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWriteups.map((writeup, index) => (
              <WriteupCard key={writeup.title} {...writeup} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-cyber/20 bg-ink/40 p-6 text-center">
            <p className="text-cyber font-mono text-sm tracking-[0.3em] uppercase">
              Hacking right now
            </p>
            <p className="text-muted-foreground mt-2">
              No writeups published yet. More to come soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WriteupSection;
