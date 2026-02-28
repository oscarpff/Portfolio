export interface Work {
  title: string;
  category: string | string[];
  description: string;
  excerpt?: string;
  link?: string;
  isExternal?: boolean;
  logo?: string;
  logoAlt?: string;
  tags?: string[];
  thumbnail?: string;
}

import { getAssetUrl } from "@/lib/asset-utils";

export const works: Work[] = [
  {
    title: "Slaughterhouse",
    category: "Games",
    description: "A survival horror game built in Unreal Engine 5. Lead narrative design, AI systems, combat mechanics, and movement programming. Published on Itch.io.",
    link: "/narrative/slaughterhouse",
    logo: getAssetUrl("/projects/slaughterhouse/SH_Logo.png"),
    logoAlt: "Slaughterhouse Logo",
  },
  {
    title: "FOQUES",
    category: "Quest Design",
    description: "A complete side quest system featuring 12 interconnected quests with branching narratives, moral choices, and consequence-based storytelling.",
    link: "/narrative/foques-quest-system",
    logo: getAssetUrl("/TVM_Logo_Text.PNG"),
    logoAlt: "TTV Media Studio",
  },
  {
    title: "Travnik",
    category: "Worldbuilding",
    description: "Worldbuilding documentation for a post-apocalyptic PvP/PvE shooter. Three conflicting factions, fight to survive in a devastated and involved Earth",
    link: "/narrative/travnik-worldbuilding",
  },
  {
    title: "The Day After",
    category: ["Games", "Game Jams"],
    description: "A cozy game developed for ZamJam 2025. Clean up a messy house before your parents get home and uncover dark secrets guided by a mysterious magical bubble.",
    link: "/narrative/the-day-after",
    logo: getAssetUrl("/projects/thedayafter/Logo.png"),
    logoAlt: "The Day After Logo",
  },
];

// IDs of works to feature (0-indexed)
export const featuredWorkIds = [0, 1, 2];
