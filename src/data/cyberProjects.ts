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

import { getAssetUrl } from "@/lib/asset-utils";

export const cyberProjects: CyberProject[] = [
    {
    title: "SecureWatch",
    icon: getAssetUrl("/projects/icon.svg"),
    description:
      "Professional incident management system with real-time metrics, filtering, and comprehensive tracking for security incidents",
    technologies: ["React", "TypeScript", "Incident Response"],
    link: "/cybersecurity/securewatch",
    demo: "https://oscarpff.github.io/incident-watcher",
    featured: true,
  },
  {
    title: "Ward404 — CTF",
    icon: Flag,
    description:
      "Narrative CTF simulating a hospital investigation using OSINT, SOCMINT, & CTI to reconstruct the evidence chain of Project ANIMA.",
    technologies: ["OSINT", "SOCMINT", "CTI"],
    link: "/cybersecurity/ward404-ctf",
    github: "https://github.com/oscarpff/Ward404-CTF",
    demo: "https://oscarpff.github.io/Ward404-CTF/",
    featured: true,
  },
];
