import { useState } from "react";
import WriteupCard from "./WriteupCard";

const platforms = ["All", "HackTheBox", "TryHackMe", "Other"];

const writeups = [
  {
    title: "Blue",
    platform: "HackTheBox",
    difficulty: "Easy" as const,
    description: "Windows machine exploiting MS17-010 EternalBlue vulnerability. Learned SMB enumeration, Metasploit exploitation, and privilege escalation techniques.",
    tags: ["Windows", "SMB", "EternalBlue", "Metasploit"],
  },
  {
    title: "Mr Robot",
    platform: "TryHackMe",
    difficulty: "Medium" as const,
    description: "Based on the TV show. WordPress enumeration, brute-forcing login, reverse shell exploitation, and SUID privilege escalation.",
    tags: ["WordPress", "Linux", "SUID", "Web Exploitation"],
  },
  {
    title: "Active Directory Lab",
    platform: "HackTheBox",
    difficulty: "Hard" as const,
    description: "Complete AD domain compromise including Kerberoasting, AS-REP roasting, and DCSync attacks for full domain admin access.",
    tags: ["Active Directory", "Kerberos", "Windows", "Lateral Movement"],
  },
  {
    title: "Pickle Rick",
    platform: "TryHackMe",
    difficulty: "Easy" as const,
    description: "Web application security challenge focusing on command injection and directory traversal to find hidden ingredients.",
    tags: ["Web App", "Command Injection", "Linux", "Enumeration"],
  },
  {
    title: "Ophiuchi",
    platform: "HackTheBox",
    difficulty: "Medium" as const,
    description: "YAML deserialization attack on a Java web application, leading to code execution and container escape.",
    tags: ["Java", "Deserialization", "YAML", "Container"],
  },
  {
    title: "Buffer Overflow Prep",
    platform: "TryHackMe",
    difficulty: "Hard" as const,
    description: "Comprehensive buffer overflow practice covering stack-based overflows, bad character detection, and shellcode generation.",
    tags: ["Buffer Overflow", "Assembly", "Python", "Exploitation"],
  },
];

const WriteupSection = () => {
  const [activePlatform, setActivePlatform] = useState("All");

  const filteredWriteups = activePlatform === "All" 
    ? writeups 
    : writeups.filter(w => w.platform === activePlatform);

  return (
    <section id="writeups" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-cyber font-mono text-sm tracking-[0.3em] uppercase mb-4">
            CTF Writeups
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
            Machine <span className="text-gradient-cyber">Writeups</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Documenting my journey through various CTF platforms, learning new techniques and methodologies.
          </p>
        </div>

        {/* Platform filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {platforms.map((platform) => (
            <button
              key={platform}
              onClick={() => setActivePlatform(platform)}
              className={`px-5 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                activePlatform === platform
                  ? "bg-cyber text-background"
                  : "bg-secondary text-secondary-foreground hover:bg-cyber/20 hover:text-cyber"
              }`}
            >
              {platform}
            </button>
          ))}
        </div>

        {/* Writeup cards grid */}
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
