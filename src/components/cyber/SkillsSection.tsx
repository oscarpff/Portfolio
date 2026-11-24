import { Shield, Network, Code, Database, ClipboardCheck, FolderKanban } from "lucide-react";

const skillCategories = [
  {
    title: "GRC & Compliance",
    icon: Shield,
    skills: ["ENS", "GDPR", "ISO/IEC 27001", "Risk Assessment"],
  },
  {
    title: "Audit & Assurance",
    icon: ClipboardCheck,
    skills: ["ISMS Audits", "Controls Review", "Evidence Management"],
  },
  {
    title: "Project Management / PMO",
    icon: FolderKanban,
    skills: ["Project Tracking", "Reporting", "Escalations", "Jira", "Confluence"],
  },
  {
    title: "Asset Management",
    icon: Database,
    skills: ["CMDB", "Inventory", "Change Control"],
  },
  {
    title: "Scripting & Data",
    icon: Code,
    skills: ["Python", "SQL"],
  },
  {
    title: "Systems & Networks",
    icon: Network,
    skills: ["Linux", "Windows", "Wireshark"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-cyber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Technical Skills
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
            Skills & <span className="text-gradient-cyber">Tools</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group card-cyber border-gradient-cyber rounded-lg p-6 transition-all duration-300 hover:glow-cyber"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyber/10 border border-cyber/20 group-hover:bg-cyber/20 transition-colors">
                  <category.icon className="w-5 h-5 text-cyber" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/50 rounded-lg text-sm font-body text-secondary-foreground hover:bg-cyber/10 hover:text-cyber transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
