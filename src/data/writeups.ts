export interface Writeup {
  title: string;
  platform: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Insane";
  description: string;
  tags: string[];
  link?: string;
  isExternal?: boolean;
  featured?: boolean;
}

export const writeups: Writeup[] = [];

// Writeups coming soon - currently hacking away!
