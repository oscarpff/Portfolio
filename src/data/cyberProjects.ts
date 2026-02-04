import { Flag } from "lucide-react";

export interface CyberProject {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  icon: typeof Flag;
}

export const cyberProjects: CyberProject[] = [
  {
    title: "Ward404 — Hospital Saint Anima CTF",
    icon: Flag,
    description:
      "Narrative CTF simulating a hospital investigation. OSINT, SOCMINT, CTI",
    technologies: ["OSINT", "SOCMINT", "CTI", "Pentest"],
    link: "/cybersecurity/ward404-ctf",
    github: "https://github.com/oscarpff/Ward404-CTF",
    demo: "https://oscarpff.github.io/Ward404-CTF/",
    featured: true,
  },
];
