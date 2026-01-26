import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "In Progress",
    status: "upcoming" as const,
    description: "Industry-standard certification covering security fundamentals, threats, and risk management.",
  },
  {
    name: "Google Cybersecurity Certificate",
    issuer: "Google / Coursera",
    date: "2024",
    status: "completed" as const,
    description: "Professional certificate covering security operations, incident response, and security tools.",
  },
  {
    name: "TryHackMe Learning Paths",
    issuer: "TryHackMe",
    date: "Ongoing",
    status: "ongoing" as const,
    description: "Completed SOC Level 1, Cyber Defense, and Pre-Security paths with hands-on labs.",
  },
  {
    name: "HackTheBox Academy",
    issuer: "Hack The Box",
    date: "Ongoing",
    status: "ongoing" as const,
    description: "Advanced penetration testing modules and skill development through practical challenges.",
  },
];

const statusColors = {
  completed: "bg-terminal/20 text-terminal border-terminal/30",
  ongoing: "bg-cyber/20 text-cyber border-cyber/30",
  upcoming: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-ink/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-cyber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Credentials
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
            Certifications & <span className="text-gradient-cyber">Training</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="group card-cyber border-gradient-cyber rounded-lg p-6 transition-all duration-300 hover:glow-cyber flex flex-col md:flex-row md:items-center gap-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 rounded-lg bg-cyber/10 border border-cyber/20 self-start">
                <Award className="w-6 h-6 text-cyber" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-cyber transition-colors">
                    {cert.name}
                  </h3>
                  <span className={`px-2 py-0.5 rounded text-xs font-mono border ${statusColors[cert.status]}`}>
                    {cert.status === "completed" ? "Completed" : cert.status === "ongoing" ? "In Progress" : "Upcoming"}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{cert.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="font-mono">{cert.issuer}</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                </div>
              </div>
              
              <button className="text-cyber opacity-0 group-hover:opacity-100 transition-opacity self-start md:self-center">
                <ExternalLink size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
