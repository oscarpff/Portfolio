export interface Work {
  title: string;
  category: string;
  description: string;
  excerpt?: string;
  link?: string;
  isExternal?: boolean;
  logo?: string;
  logoAlt?: string;
  tags?: string[];
}

export const works: Work[] = [
  {
    title: "Slaughterhouse",
    category: "Games",
    description: "A survival horror game built in Unreal Engine 5. Lead narrative design, AI systems, combat mechanics, and movement programming. Published on Itch.io.",
    link: "/narrative/slaughterhouse",
    logo: "/projects/slaughterhouse/SH_Logo.png",
    logoAlt: "Slaughterhouse Game Logo",
    tags: ["Published", "Unreal Engine 5", "Team Project"],
  },
  {
    title: "FOQUES",
    category: "Quest Design",
    description: "A complete side quest system featuring 12 interconnected quests with branching narratives, moral choices, and consequence-based storytelling.",
    link: "/narrative/foques-quest-system",
    logo: "/TVM_Logo_Text.PNG",
    logoAlt: "TTV Media Studio",
    tags: ["Obsidian", "Draw.io", "Branching Narrative"],
  },
  {
    title: "Travnik",
    category: "Worldbuilding",
    description: "Worldbuilding documentation for a post-apocalyptic PvP/PvE shooter. Three conflicting factions, fight to survive in a devastated and involved Earth",
    link: "/narrative/travnik-worldbuilding",
    tags: ["Obsidian", "Worldbuilding"],
  },
];

// IDs of works to feature (0-indexed)
export const featuredWorkIds = [0, 1,];
