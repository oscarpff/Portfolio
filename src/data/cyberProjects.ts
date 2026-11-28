import { Flag } from "lucide-react";
import { getAssetUrl } from "@/lib/asset-utils";

export interface CyberProject {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  demo?: string;
  /** Hands-on technical work, shown in the "Technical Lab" section instead of "Projects". */
  lab?: boolean;
  icon: typeof Flag | string;
}

export const cyberProjects: CyberProject[] = [
  {
    title: "SecureWatch",
    icon: getAssetUrl("/projects/icon.svg"),
    description:
      "Incident and escalation tracking dashboard with real-time metrics, filtering and status follow-up, designed to give a security office clear oversight of every open case.",
    technologies: ["Incident Management", "Reporting", "React", "TypeScript"],
    link: "/cybersecurity/securewatch",
    demo: "https://oscarpff.github.io/incident-watcher",
  },
  {
    title: "Ward404 — CTF",
    icon: Flag,
    description:
      "Narrative CTF I designed, simulating a hospital investigation using OSINT, SOCMINT & CTI to reconstruct the evidence chain of Project ANIMA.",
    technologies: ["OSINT", "SOCMINT", "CTI"],
    link: "/cybersecurity/ward404-ctf",
    github: "https://github.com/oscarpff/Ward404-CTF",
    demo: "https://oscarpff.github.io/Ward404-CTF/",
    lab: true,
  },
];
