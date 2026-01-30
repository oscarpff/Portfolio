// Travnik Worldbuilding Lore Data

// ==================== TYPES ====================

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
  color: "gold" | "red" | "emerald" | "cyan";
}

export interface Faction {
  id: string;
  name: string;
  shortName: string;
  color: string;
  icon: string;
  tagline: string;
  description: string;
  organization: string;
  knowledge: string;
  objectives: string;
  members: string[];
}

export interface Character {
  id: string;
  name: string;
  faction: "ESAS" | "INGENIEROS" | "PROSÉLITOS" | "NEUTRAL";
  role: string;
  species: string;
  scientificName: string;
  gender: string;
  description: string;
  personality: string;
  objectives: string;
  abilities: {
    active: string;
    passive: string;
  };
  imageUrl: string;
  skinImages?: string[];
  color: string;
}

export interface Material {
  id: string;
  name: string;
  type: "biomolecule" | "mineral";
  origin: string;
  obtention: string;
  properties: string;
  functionality: string;
  impact: string;
  ethics: string;
  exploration: string;
}

export interface Enemy {
  id: string;
  name: string;
  stage: "early" | "advanced";
  description: string;
  characteristics: string[];
  behaviors: string;
  imageUrl: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  relatedTerms?: string[];
}
export interface Event {
  id: string;
  name: string;
  type: "incursion" | "seasonal" | "limited";
  description: string;
  details: string;
  rewards: string;
  difficulty: "normal" | "hard" | "legendary";
}
// ==================== TIMELINE ====================

export const timelineEvents: TimelineEvent[] = [
  {
    id: "nuclear-explosion",
    title: "NUCLEAR EXPLOSION",
    date: "Year 0",
    description:
      "Inter-World War over the last resources. General Davis sends the Deadly Hand of the Indian Ocean (five soldiers) with hydrogen bombs. The Finger responsible for Europe's Sector rebels and warns civilians, saving thousands of lives.",
    icon: "💥",
    color: "red",
  },
  {
    id: "the-fall",
    title: "THE FALL",
    date: "Year 0-5",
    description:
      "Massive destruction. Radiation mutates humans into Hoomans (primitive) and animals into super-intelligent animals. The pathogen seeps into water reserves. Survivors take shelter underground.",
    icon: "☢️",
    color: "red",
  },
  {
    id: "new-dawn",
    title: "NEW DAWN",
    date: "Year 5-20",
    description:
      "Super-intelligent animals awaken. Discover underground human shelters. First bases are established. The Viability Filter selects ESAS elite at the ISS. Resources begin to dwindle.",
    icon: "🌅",
    color: "gold",
  },
  {
    id: "wild-awakening",
    title: "WILD AWAKENING",
    date: "Year 20+",
    description:
      "ESAS descends to Travnik. Discovers cryogenized humans. Engineers conduct experiments with Element 444 to reverse mutations. Proselytes build underground bases. Three factions enter conflict.",
    icon: "🐆",
    color: "emerald",
  },
];

// ==================== FACTIONS ====================

export const factions: Faction[] = [
  {
    id: "esas",
    name: "ESAS - Elite Space Animal Squad",
    shortName: "ESAS",
    color: "#000000",
    icon: "🚀",
    tagline: "Military discipline and order from space",
    description:
      "Group of elite super-animals sent from the ISS. Trained in military arts and high-tech weaponry. Nearly apathetic, without emotions to distract.",
    organization:
      "Hierarchical and military. Led by Quasar. Anti-radiation beacons, advanced equipment.",
    knowledge:
      "Know about the Inter-World War. Have access to ISS records. Know about Hoomans and Element 444.",
    objectives:
      "Extract Element 444 and Compound-T. Experiment to create a cure. Escape Travnik.",
    members: ["Quasar", "Bugve"],
  },
  {
    id: "ingenieros",
    name: "ENGINEERS",
    shortName: "Engineers",
    color: "#4B8BBE",
    icon: "⚙️",
    tagline: "Innovation and hope to save humanity",
    description:
      "Super-animal apprentices of human engineers. Rescued scientists during the Wild Awakening. Pioneers in Compound-T extraction.",
    organization:
      "Collaborative. Command center in Travnik. Laboratories for experimentation. Compound-T refinement.",
    knowledge:
      "Understand advanced technology. Discovered Element 444. Access to human documents about war.",
    objectives:
      "Save cryogenized humans. Reverse Rebirth Syndrome. Repair ship to escape.",
    members: ["Palaptica", "Blitz"],
  },
  {
    id: "proslitos",
    name: "PROSELYTES",
    shortName: "Proselytes",
    color: "#228B22",
    icon: "⛪",
    tagline: "Faith in divine ascension and purification",
    description:
      "Super-animals influenced by Bogomil sect. Believe in good god (Michael) and evil god. Await purifying meteor.",
    organization:
      "Religious. Supreme Priest leads. Central temple. Underground bases with work plots.",
    knowledge:
      "Unaware of true radiation. Have legacy of sectarians: agriculture, collection, cannibalism in scarcity.",
    objectives:
      "Prepare Ascension. Collect Compound-T. Avoid unnecessary sacrifice. Expand faith.",
    members: ["Oct-Vi-O"],
  },
];

// ==================== CHARACTERS ====================

export const characters: Character[] = [
  {
    id: "quasar",
    name: "Quasar",
    faction: "ESAS",
    role: "Assassin / Infiltrator",
    species: "Mandrill",
    scientificName: "Mandrillus sphinx",
    gender: "Male",
    description:
      "Marked as the best of his class. Quasar leads ESAS operations on Earth. Tormented by Viability Filter traumas. Excellent with knives and light weapons for silent infiltration.",
    personality:
      "Solitary, tormented, distant. Loses childhood emotions in training. Yet deeply cares for teammates with sincere details.",
    objectives:
      "Complete mission. Collect resources. Return to space. Protect squad.",
    abilities: {
      active:
        "Yesterday's Memories (Active) → +X% attack speed and extra damage",
      passive: "Resilience (Passive) → +X% life steal in melee combat",
    },
    imageUrl: "/projects/characters/QUASAR ESPACIAL.png",
    skinImages: ["/projects/characters/QUASAR ESPACIAL.png"],
    color: "#000000",
  },
  {
    id: "bugve",
    name: "Bugve",
    faction: "ESAS",
    role: "Tank / Pyrotechnic",
    species: "Beetle",
    scientificName: "Oryctes nasicornis",
    gender: "Male",
    description:
      "Not the biggest, smartest, or strongest. But the most persevering. Capable of withstanding extreme hits. Specializes in explosives with Compound-T. Eccentric and hyperactive, but deeply insecure.",
    personality:
      "Hyperactive, eccentric, insecure. Seems like a mad scientist. Fears failing the team and being expelled.",
    objectives:
      "Create better explosives. Maximize Compound-T use. Contribute to mission.",
    abilities: {
      active:
        "Final Hour (Active) → Launches massive explosive over designated location",
      passive:
        "Hardness (Passive) → Gains X armor points, resists control when outnumbered",
    },
    imageUrl: "/projects/characters/BOMBER RHYNO.png",
    skinImages: ["/projects/characters/BOMBER RHYNO.png"],
    color: "#000000",
  },
  {
    id: "palaptica",
    name: "Palaptica",
    faction: "INGENIEROS",
    role: "Scout / Support",
    species: "Falcon",
    scientificName: "Falco tinnunculus",
    gender: "Female",
    description:
      "Descendant of a family raised by engineers. Ship pilot. Loses flight ability but sharpens senses extremely. Specialist in aerodynamics and Compound-T.",
    personality:
      "Calm, composed, stable. Ensures stability among teammates. Dedicated to her work.",
    objectives:
      "Repair ship. Research Compound-T. Create improved weapons and gadgets.",
    abilities: {
      active:
        "Active Scouting (Active) → Reveals enemy locations in X seconds",
      passive:
        "Advanced Knowledge → Requires fewer materials to craft objects",
    },
    imageUrl: "/projects/characters/PALAPTICA PILOTO.jpg",
    skinImages: ["/projects/characters/PALAPTICA PILOTO.jpg"],
    color: "#4B8BBE",
  },
  {
    id: "blitz",
    name: "Blitz",
    faction: "INGENIEROS",
    role: "Scout",
    species: "Antelope (Impala)",
    scientificName: "Aepyceros melampus",
    gender: "Male",
    description:
      "Young herd member in radioactive wastelands. Fast but inexperienced. Intercepted infiltrating Engineers base. Becomes brilliant apprentice. Seeks to reunite his herd.",
    personality:
      "Energetic, hyperactive, restless. Struggles to follow orders but very intelligent and self-sufficient.",
    objectives:
      "Find herd. Collect resources. Learn more.",
    abilities: {
      active:
        "Diligent Student (Active) → Harnesses air to charge at speed, lifting enemies",
      passive: "+X% damage dealt / +X% damage received",
    },
    imageUrl: "/projects/characters/ARMY BLITZ.jpg",
    skinImages: ["/projects/characters/ARMY BLITZ.jpg"],
    color: "#4B8BBE",
  },
  {
    id: "octavio",
    name: "Oct-Vi-O",
    faction: "PROSÉLITOS",
    role: "Sniper",
    species: "Octopus",
    scientificName: "Octopus Vulgaris",
    gender: "Male",
    description:
      "Since childhood stood out for camouflaging. Insatiable curiosity about the outside world. Assassinated the previous Supreme Priest, takes the throne. Pragmatic leader of Proselytes.",
    personality:
      "Curious, pragmatic, decisive. Hides his compassion under calculated leadership.",
    objectives:
      "Avoid unnecessary sacrifice. Hunt other animals. Improve agriculture.",
    abilities: {
      active: "Playtime (Active) → Camouflages with surroundings",
      passive: "+X% damage using sniper rifle",
    },
    imageUrl: "/projects/characters/OCT-VI-O SACERDOTE.png",
    skinImages: ["/projects/characters/OCT-VI-O SACERDOTE.png"],
    color: "#228B22",
  },
];

// ==================== MATERIALS ====================

export const materials: Material[] = [
  {
    id: "elemento-444",
    name: "Element 444",
    type: "biomolecule",
    origin:
      "Forms as defense mechanism to mutagenic pathogen exposure. Facilitates survival in hostile environments.",
    obtention:
      "Extracted from neural tissue of hibernating subjects. Requires collection during transformation, before Eclosion.",
    properties:
      "Ability to interact with human DNA. Catalyst for beneficial mutations. Resilience to environmental toxins.",
    functionality:
      "Used in laboratories to manipulate genetic evolution. Essential for genetic engineering in space exploration.",
    impact:
      "Revolutionized fight against Hoomans. Enabled anti-radiation beacons. Advances in genetic medicine.",
    ethics:
      "Raises dilemmas about genetic manipulation. Fear of malignant mutation ending intelligent life.",
    exploration:
      "Indispensable tool for adaptation in space colonization.",
  },
  {
    id: "compuesto-t",
    name: "Compound-T",
    type: "mineral",
    origin:
      "Mixture of Element 444 and radioactive gases. Affects composition of common minerals like coal and iron.",
    obtention:
      "Extract isolated veins from atmosphere. Grueling and exhausting task. Hoomans guard these deposits in Conclaves.",
    properties:
      "Same physical properties as conventional minerals, but multiplied by 10. Greater hardness, density, toughness.",
    functionality:
      "Ideal substitute for conventional materials. Keeps Element 444 isolated. Improved laboratory equipment.",
    impact:
      "Enables new weapons and tools. More penetrating and lighter ammunition. Rechargeable beacons without deterioration.",
    ethics:
      "Long-term consequences unknown. Suspiciously radioactive but tests don't confirm immediate danger.",
    exploration:
      "Accelerates evolution of constructions. Expands ISS with radiation-resistant materials.",
  },
];

// ==================== ENEMIES ====================

export const enemies: Enemy[] = [
  {
    id: "hooman-early",
    name: "Hooman (Early Stage)",
    stage: "early",
    description:
      "Human in early mutation phase. Skeletal and thin body. Has lost mass as disease generates tumors.",
    characteristics: [
      "Skeletal and thin",
      "Potential additional limbs",
      "Long pointed tongue",
      "Agile but weak",
    ],
    behaviors:
      "Primitive, guided by instincts. Attacks in groups. Seeks shelter in caves.",
    imageUrl: "/projects/characters/Hooman.png",
  },
  {
    id: "hooman-advanced",
    name: "Hooman (Advanced Stage)",
    stage: "advanced",
    description:
      "Human in advanced mutation stage. Extensive tumors cover body. Severe deformations but greater strength.",
    characteristics: [
      "Extensive tumor growth",
      "Irregular and rough skin texture",
      "Varied coloration (dark, greenish, purple)",
      "Masses that may suppurate",
    ],
    behaviors:
      "More aggressive. Minimal intelligence. Extremely dangerous in groups. Protects hibernation cocoons.",
    imageUrl: "/projects/characters/Hooman2.png",
  },
  {
    id: "alzado-bailarina",
    name: "The Risen - Dancer",
    stage: "advanced",
    description:
      "A superior Hooman that accepted the pathogen in symbiosis. Great size and superior intelligence. Incursion boss.",
    characteristics: [
      "Superior intelligence",
      "Prodigious size",
      "Agile and fluid movements",
      "Unique combat abilities",
      "Coordinated attacks",
    ],
    behaviors:
      "Extremely dangerous incursion boss. Leads conclaves. Requires coordinated group to defeat. Reward: Abundant Compound-T and Element 444.",
    imageUrl: "/projects/characters/Hooman Bailarina.jpg",
  },
  {
    id: "alzado-sectario",
    name: "The Risen - Sectarian",
    stage: "advanced",
    description:
      "A corrupt superior Hooman. Prodigious size with ritual deformations. Incursion boss.",
    characteristics: [
      "Extremely resistant",
      "Devastating melee attack",
      "Ability to summon reinforcements",
      "Biological armor",
      "Slow regeneration",
    ],
    behaviors:
      "Defensive incursion boss. Protects conclave core. Constantly summons reinforcements. Reward: Abundant Compound-T and Element 444.",
    imageUrl: "/projects/characters/Hooman sectario.jpg",
  },
];

// ==================== GLOSSARY ====================

export const glossary: GlossaryTerm[] = [
  {
    id: "sindrome-renacer",
    term: "Rebirth Syndrome",
    definition:
      "Biochemical agent used in Inter-World War. Physically and cognitively incapacitates. Reversible effect but lasts long enough to capture prisoners.",
    relatedTerms: ["Hoomans", "Deadly Hand of Indian Ocean"],
  },
  {
    id: "hoomans",
    term: "Hoomans",
    definition:
      "Previously human. Primitive humanoid monsters resulting from infection. Lose consciousness and cognitive abilities. Ravage the planet and hunt survivors.",
    relatedTerms: ["Conclaves", "Hibernation State", "Rebirth Syndrome"],
  },
  {
    id: "conclaves",
    term: "Conclaves",
    definition:
      "Groupings of Hoomans. The most developed protect cocoons of hibernating humans. Reside in caves, attracted by Compound-T veins.",
    relatedTerms: ["Hoomans", "Hibernation State"],
  },
  {
    id: "estado-hibernacion",
    term: "Hibernation State",
    definition:
      "Phase of involution of infected humans. Metamorphosis where they lose cognitive abilities and cells mutate. Chrysalis evolves into young Hooman.",
    relatedTerms: ["Hoomans", "Element 444"],
  },
  {
    id: "los-alzados",
    term: "The Risen",
    definition:
      "Superior Hoomans that accept pathogen in symbiosis. Great size, superior intelligence, unique abilities. Very dangerous enemies.",
    relatedTerms: ["Hoomans"],
  },
  {
    id: "bogomilos",
    term: "Bogomils",
    definition:
      "Belief in two deities: good god (spiritual world) and evil god (material world). On Travnik, good god is Michael (the savior Finger).",
    relatedTerms: ["Proselytes"],
  },
];

// ==================== EVENTS ====================

export const events: Event[] = [
  {
    id: "incursion-system",
    name: "Incursions: Battle Against The Risen",
    type: "incursion",
    description:
      "PvE system where groups of super-animals descend into Hooman burrows to face The Risen.",
    details:
      "Teams must infiltrate conclaves, destroy hibernation cocoons, and face the final boss: a superior Hooman. Each Risen possesses a unique set of attacks and movements. Requirement: coordinated group, strategy, and efficient resource usage.",
    rewards:
      "Special rewards (camouflages, skins, gunbuddies, banners). Abundant Compound-T. Element 444 from all annihilated Hoomans. Clan experience.",
    difficulty: "hard",
  },
];
