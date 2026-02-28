import { getAssetUrl } from "@/lib/asset-utils";

export interface Writeup {
  title: string;
  platform: string;
  difficulty: "Very Easy" | "Easy" | "Medium" | "Hard" | "Insane";
  description: string;
  tags: string[];
  link?: string;
  isExternal?: boolean;
  featured?: boolean;
  machineIcon?: string;
}

export const writeups: Writeup[] = [
  {
    title: "Brutus",
    platform: "HackTheBox",
    difficulty: "Very Easy",
    description:
      "Forensic investigation of SSH authentication logs to reconstruct a brute force compromise, attacker persistence, and MITRE ATT&CK mapping.",
    tags: [
      "Forensics",
      "Linux Logs",
      "Brute Force",
      "SSH",
    ],
    link: "/cybersecurity/sherlock-brutus",
    featured: true,
    machineIcon: getAssetUrl("/writeups/brutus/brutus_icon.png"),
  },
];

