import { BookOpen, Feather, Users, Sparkles } from "lucide-react";

const skills = [
  { icon: BookOpen, label: "Quest Design", description: "Branching narratives & player agency" },
  { icon: Feather, label: "World Building", description: "Lore, history & mythology" },
  { icon: Users, label: "Character Writing", description: "Compelling personalities & arcs" },
  { icon: Sparkles, label: "Dialogue Systems", description: "Dynamic & reactive conversations" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-ink-light/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text */}
          <div className="animate-fade-up">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Stories That <span className="text-gradient-gold">Matter</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                I'm a game & narrative designer passionate about creating interactive stories 
                that resonate with players long after they've put down the controller. 
                My work focuses on creating immersive narratives and making the players part of them.
              </p>
              <p>
                With experience in quest design, world-building, and character development, 
                I craft narratives that reward exploration and respect player intelligence. 
                Every choice should feel impactful; every revelation, earned.
              </p>
              <p>
                I believe the best game narratives don't just tell stories; they invite 
                players to become co-authors of experiences they'll remember forever.
              </p>
            </div>
          </div>

          {/* Right column - Skills */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={skill.label}
                className="card-elevated border-gradient-gold rounded-lg p-6 group hover:glow-gold transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <skill.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-xl font-semibold mb-2">{skill.label}</h3>
                <p className="text-muted-foreground text-sm font-body">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
