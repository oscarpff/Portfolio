import { Flag, ShieldAlert } from "lucide-react";

export interface CyberProject {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  icon: typeof Flag | string;
}

export const cyberProjects: CyberProject[] = [
    {
    title: "SecureWatch — Incident Response Manager",
    icon: "/projects/icon.svg",
    description:
      "Professional incident management system with real-time metrics, filtering, and comprehensive tracking for security incidents",
    technologies: ["React", "TypeScript", "Incident Response", "Security Operations"],
    link: "/cybersecurity/securewatch",
    demo: "https://oscarpff.github.io/incident-watcher",
    featured: true,
  },
  {
    title: "Ward404 — Hospital Saint Anima CTF",
    icon: Flag,
    description:
      "Narrative CTF simulating a hospital investigation using OSINT, SOCMINT, CTI and pentesting to reconstruct the evidence chain of Project ANIMA.",
    technologies: ["OSINT", "SOCMINT", "CTI", "Pentest"],
    link: "/cybersecurity/ward404-ctf",
    github: "https://github.com/oscarpff/Ward404-CTF",
    demo: "https://oscarpff.github.io/Ward404-CTF/",
    featured: true,
  },
];
