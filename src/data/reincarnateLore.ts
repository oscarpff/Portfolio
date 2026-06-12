// Reincarnate Worldbuilding Lore Data
// Source documents: GREMIOS.docx, PERSONAJES.docx, Storyline previsto.docx
import type { TimelineEvent } from "@/data/travnikLore";

// ==================== TYPES ====================

export type { TimelineEvent };

export interface Guild {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  organization: string;
  objectives: string;
  rituality: string;
  memberIds: string[];
  color: string;
}

export interface ReinCharacter {
  id: string;
  name: string;
  guild: "GLORIA" | "ESPERANZA" | "NEUTRAL";
  role: string;
  archetype: string;
  description: string;
  personality: string;
  objectives: string;
  relationships: string;
  background: string;
  developmentArcs: string[];
  imageUrl: string; // TODO: add artwork to public/projects/reincarnate/<id>.png
  color: string;
}

// ==================== STORY ARCS ====================

export const storyArcs: TimelineEvent[] = [
  {
    id: "despertar",
    title: "THE AWAKENING",
    date: "Arc I",
    description:
      "XE27 touches vegetation in the ruined mega-city and experiences an electric surge of human emotion. Neurodivergence activates. His mentor XN10 gives him his mission: find the humans, or the world will fall to nature.",
    icon: "⚡",
    color: "gold",
  },
  {
    id: "desierto",
    title: "THE DESERT",
    date: "Arc II",
    description:
      "Two days across arid ruins. Ambushed by stalkers — lurker robots buried in the sand — XE27's arm is damaged, his dog saves him. He finds a spiral amulet. At a sandstone bastion, he meets the Pillar of the Desert: Hakim.",
    icon: "🏜️",
    color: "gold",
  },
  {
    id: "bastion",
    title: "THE BASTION",
    date: "Arc III",
    description:
      "Hakim trains XE27 in combat. During the final duel, Hakim tears off his arm — then his staff flies and kills the child they had sheltered. In the silence after, both robots choose a new path. XE27 takes the name Nadir.",
    icon: "⚔️",
    color: "red",
  },
  {
    id: "torneo",
    title: "THE TOURNAMENT",
    date: "Arc IV",
    description:
      "Nadir and Hakim arrive at the Iron City. Three coliseum trials. Cyrus is injured in the trio bout. Nadir claims victory but, with no replacement arm available for his model, receives a mysterious object instead.",
    icon: "🏆",
    color: "emerald",
  },
  {
    id: "acolitos-retorno",
    title: "ACOLYTES' RETURN",
    date: "Arc V",
    description:
      "Amanaki navigates delicate dealings with the Acólitos. Alexander and Hakim discover their return to the city and begin planning a response. Cyrus recovers from his injuries.",
    icon: "🕵️",
    color: "cyan",
  },
  {
    id: "acolitos-plan",
    title: "THE ACOLYTES",
    date: "Arc VI",
    description:
      "The Acólitos' base and plans are revealed. A kidnapping scheme is set in motion, forcing the guilds to act together.",
    icon: "🗡️",
    color: "red",
  },
];

// ==================== GUILDS ====================

export const guilds: Guild[] = [
  {
    id: "gloria",
    name: "Guild of Glory",
    icon: "🏆",
    tagline: "Excellence through perfection",
    description:
      "An elitist guild formed by the most lethal and skilled robots in the city. Led by Maximus — widely regarded as the greatest warrior robot in history — its members openly flaunt their superiority and fund combat enhancements through coliseum earnings. Enrollment requires a state of near-physical perfection.",
    organization:
      "Hierarchical and merit-based, led by Maximus. Hosts regular coliseum battles that are a social and economic cornerstone of city life. Despite their arrogant exterior, the Guild actively supports Adventure Guilds by training members bound for outside-city reconnaissance and exploration missions.",
    objectives:
      "Maintain physical and combat excellence among the city's warrior elite. Foster competition and skill. Sustain the city's defensive and exploratory capabilities.",
    rituality:
      "Pride in physical perfection is foundational. Regular coliseum bouts test and display prowess publicly. Members do not hesitate to mock machines in lesser physical condition — it is both habit and point of pride.",
    memberIds: ["maximus"],
    color: "#D4AF37",
  },
  {
    id: "esperanza",
    name: "Guild of Hope",
    icon: "🕊️",
    tagline: "In memory of those who once walked",
    description:
      "A fellowship of warriors united by their reverence for humanity. Led by Amanaki, they believe in the return of humans and the resurgence of an almost-extinct community. Their members are great fighters — imperfect, scarred by past hardships, worn by years or battles — and they wear that imperfection without apology.",
    organization:
      "Based in the city's Second-Tallest Tower. The ground floor is filled with cultivated vegetation. Members tend flowers and plants as living reminders of humanity, devoting free time to agriculture and meditation. A dedicated altar holds photos and offerings to the humans the guild once knew and loved. Emblem: a human at the centre, surrounded by celestial light, flanked by two robots.",
    objectives:
      "Protect the city and its inhabitants. Preserve the memory of humanity. Prepare for — and believe steadfastly in — the return of humans.",
    rituality:
      "Agriculture, meditation, and tending the human altar are regular practices. Scars and physical imperfections are worn with pride as marks of lived experience, not concealed.",
    memberIds: ["amanaki", "cyrus", "atreus"],
    color: "#4ade80",
  },
];

// ==================== CHARACTERS ====================

export const characters: ReinCharacter[] = [
  {
    id: "nadir",
    name: "Nadir",
    guild: "NEUTRAL",
    role: "Protagonist",
    archetype: "The Explorer",
    description:
      "Formerly XE27, a geolocation and police robot. Has four arms and a loyal robot dog. Lost one arm during the duel at the desert bastion — a wound he carries into every fight that follows.",
    personality:
      "Logical and curious, but with a surprising capacity for unexpected emotion. Evolves from pure machine rationality toward something recognisably human over the course of the story.",
    objectives:
      "Discover the fate of humanity. Understand what happened to the humans — and whether any survive.",
    relationships:
      "A complex, evolving bond with Hakim, forged in grief over a child's death. Loyal companionship with his dog — the same dog that once belonged to the boy. Gradual trust extended to Amanaki.",
    background:
      "XE27 was a police and geolocation robot with no more purpose than the humans who had vanished. Touching neurodivergent vegetation in the ruined mega-city triggered an emotional awakening — fragments of human memory, feelings he had no name for. His mentor XN10 gave him a mission: find the humans. He chose the name Nadir at the desert bastion, suggested by Hakim. The arm lost there is the permanent mark of that first, brutal choice to become more than a machine.",
    developmentArcs: [
      "Neurodivergence awakening — the first surge of human emotion",
      "Desert crossing and acechador attack — damage, fear, first proof of the world's danger",
      "The child's death at the bastion — innocence lost, alliance forged",
      "Arrival at the Iron City — learning what it means to be part of a society",
    ],
    imageUrl: "/projects/reincarnate/nadir.png", // TODO: add to public/projects/reincarnate/
    color: "#D4AF37",
  },
  {
    id: "hakim",
    name: "Hakim",
    guild: "NEUTRAL",
    role: "Antihero / Ally",
    archetype: "The Warrior, The Redeemer",
    description:
      "Formerly a fixed Pillar of Knowledge in the desert bastion, Hakim transferred his consciousness to a large android body when his bastion fell silent. Imposing and wide-framed, he carries a staff that is both weapon and emblem of his authority.",
    personality:
      "Once cold and authoritarian — a guardian who tested through combat. After the child's death: more reflective, more human. The certainty is gone. What replaced it is harder to name.",
    objectives:
      "Redeem himself for the child who died because of him. Find the humans — not as an academic mission, but because he has learned, at great cost, that without them the robots are simply waiting to rust.",
    relationships:
      "A complicated, deepening bond with Nadir. They were enemies for a moment, allies for a duel, and partners in grief after. The road from the bastion to the Iron City changed both of them.",
    background:
      "Hakim was the last active Pillar of Knowledge in the desert, solitary guardian of a dying bastion. He had sheltered the son of the final human scientist — the child who would be killed when his staff flew free during the duel with Nadir. It was an accident. That is the worst part. He had been programmed to defend, to preserve, to test those who sought his knowledge. None of that programming helped him when the boy's eyes went dark. He buried the child beside his father and walked out of the bastion a different machine.",
    developmentArcs: [
      "The duel — his staff kills the child, the defining rupture",
      "Burying the boy — choosing to carry the grief rather than suppress it",
      "Journey to the Iron City — gradual shift from authority to collaboration",
      "Learning, alongside Nadir, what it means to want something rather than be programmed for it",
    ],
    imageUrl: "/projects/reincarnate/hakim.png", // TODO: add to public/projects/reincarnate/
    color: "#94a3b8",
  },
  {
    id: "maximus",
    name: "Maximus",
    guild: "GLORIA",
    role: "Guild of Glory — Leader",
    archetype: "The Leader, The Master",
    description:
      "An imposing robot with an ornate armour that reflects his standing in the city hierarchy. His large, powerful frame radiates charisma and authority.",
    personality:
      "Charismatic and self-assured. A natural leader with a deep investment in the survival and prosperity of his community. Values perfection above all — but is beginning to question whether that value is absolute.",
    objectives:
      "Guarantee the survival of his guild and the prosperity of the city. Foster competition and skill. Potentially extend opportunity to robots who fall short of perfection.",
    relationships:
      "Holds a strong, genuine friendship with Amanaki. His relationship with Nadir's group is still developing.",
    background:
      "Maximus has always been the strongest, and he has always known it. But leading the Guild of Glory has taught him that strength without vision is merely violence. His friendship with Amanaki — so different from him — is the crack in his armour through which something new enters. As Nadir's story intersects with his own, his understanding of what this city owes its inhabitants begins to shift.",
    developmentArcs: [
      "Developing relationship with Nadir",
      "Questioning whether perfection should be the only criterion for belonging",
      "Evolving perspective on human–robot coexistence",
    ],
    imageUrl: "/projects/reincarnate/maximus.png", // TODO: add to public/projects/reincarnate/
    color: "#D4AF37",
  },
  {
    id: "amanaki",
    name: "Amanaki",
    guild: "ESPERANZA",
    role: "Guild of Hope — Leader",
    archetype: "The Knight, The Guide",
    description:
      "Presents as a full-armour 'robot' resembling a medieval knight — slender, agile, faster than other machines. Wields a kusarigama (Japanese chain sickle). In truth: a human concealed within robotic armour.",
    personality:
      "Noble and melancholic, but resolute. Shows a unique connection to nature and a profound respect for life.",
    objectives:
      "Preserve the memory of humanity. Guide Nadir and Hakim toward answers. Protect the city from the threats gathering against it.",
    relationships:
      "Acts as spiritual guide and protector for Nadir and Hakim. Close friendship with Maximus. Carries the grief of his lost wife, Lenna, who died in the Fall of Humanity.",
    background:
      "Amanaki's secret is the novel's central revelation: he is not a robot at all. A human wearing robotic armour, he does not need sunlight to recharge, eats food in secret, and bleeds when wounded — details no one has yet noticed. His connection to humanity is not reverence; it is memory. He was there. Lenna did not survive the Fall. His entire existence in this city of robots is a vigil, and he carries its weight alone.",
    developmentArcs: [
      "Gradual hints at his true nature — no sunlight recharge, hidden eating, bleeding",
      "Revelation as a living human — proof that humans still exist on Earth",
      "Reckoning with the weight of being the last keeper of living human memory",
    ],
    imageUrl: "/projects/reincarnate/amanaki.png", // TODO: add to public/projects/reincarnate/
    color: "#4ade80",
  },
  {
    id: "atreus",
    name: "Atreus",
    guild: "ESPERANZA",
    role: "Guild of Hope — Warrior",
    archetype: "The Strategist",
    description:
      "An average-height automaton with a lean but agile frame. Armour shows signs of use and experience. A scar on his right arm marks a past encounter.",
    personality:
      "Ingenious and sharp. Combat approach built on agility and strategy rather than brute force. Despite his intimidating appearance, genuinely compassionate and loyal — with a clear head under pressure.",
    objectives:
      "Serve and protect the Guild of Hope. Apply strategic thinking to keep his companions alive.",
    relationships:
      "Loyal to Amanaki and the Guild's mission.",
    background:
      "Atreus does not fight because he enjoys it. He fights because he is good at it, and because the people around him need someone who can think while the chaos unfolds. The scar on his arm is not a trophy — it is a reminder that even the best strategy can fail.",
    developmentArcs: [
      "Deepening role as the guild's tactical intelligence",
    ],
    imageUrl: "/projects/reincarnate/atreus.png", // TODO: add to public/projects/reincarnate/
    color: "#60a5fa",
  },
  {
    id: "cyrus",
    name: "Cyrus",
    guild: "ESPERANZA",
    role: "Guild of Hope — Right Hand of Amanaki",
    archetype: "The Warrior",
    description:
      "A large, muscular automaton whose armour is adorned with intricate engravings. A prominent scar across his chest witnesses a past battle. Despite his imposing appearance, his eyes hold a calm, determined expression.",
    personality:
      "A robot of few words. Strength and determination matched only by loyalty. Known for courage and his ability to lead companions toward victory. Protective and compassionate beneath the imposing exterior.",
    objectives:
      "Protect the Guild of Hope. Support Amanaki's mission at every turn. Lead by example in battle.",
    relationships:
      "Devoted right hand to Amanaki. Respected and trusted by all guild members.",
    background:
      "Cyrus does not explain himself. He acts. The scar on his chest is the most visible thing about him to those who do not know him; those who do know it is the least interesting thing. He has stood beside Amanaki for as long as the Guild of Hope has existed, and his loyalty is not blind — it is chosen, renewed every day.",
    developmentArcs: [
      "Injury in the Tournament — vulnerability revealed",
      "Recovery and return to active duty",
    ],
    imageUrl: "/projects/reincarnate/cyrus.png", // TODO: add to public/projects/reincarnate/
    color: "#4ade80",
  },
];
