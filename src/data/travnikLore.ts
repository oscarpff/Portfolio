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
  rituality: string;
  technology: string;
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
  background: string;
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

export interface Location {
  id: string;
  name: string;
  type: "wasteland" | "urban" | "swamp" | "cave" | "oasis" | "frozen";
  icon: string;
  description: string;
  environment: string;
  threats: string;
  resources: string;
  loreElements: string;
  strategicValue: string;
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

export interface LoreSection {
  id: string;
  title: string;
  icon: string;
  summary: string;
  fullContent: string;
  category: "war" | "factions" | "resources" | "world";
}
// ==================== TIMELINE ====================

export const timelineEvents: TimelineEvent[] = [
  {
    id: "guerra-inter-mundial",
    title: "INTER-WORLD WAR",
    date: "2035",
    description:
      "Sectors fight for last resources using a pathogen causing Rebirth Syndrome.",
    icon: "⚔️",
    color: "gold",
  },
  {
    id: "la-caida",
    title: "THE FALL",
    date: "2040",
    description:
      "Oceania launches nuclear bombs. The Europe Finger rebels, warning civilians and saving thousands.",
    icon: "💥",
    color: "red",
  },
  {
    id: "nuevo-albor",
    title: "NEW DAWN",
    date: "2041 - 2042",
    description:
      "Humans mutate into primitive Hoomans. Massive destruction devastates the planet. Survivors undergo cryogenization hoping for salvation. Pathogen infiltrates water reserves.",
    icon: "☢️",
    color: "red",
  },
  {
    id: "despertar-salvaje",
    title: "WILD AWAKENING",
    date: "2400 - 2415",
    description:
      "Radiation-affected pathogen grants animals intelligence and advanced cognitive abilities. Animals discover shelters with cryogenized humans and learn from their technology.",
    icon: "🧬",
    color: "emerald",
  },
  {
    id: "el-exodo",
    title: "THE EXODUS",
    date: "2416",
    description:
      "After training, animals journey to ISS with infected humans to establish orbital base.",
    icon: "🚀",
    color: "cyan",
  },
  {
    id: "operacion-retorno",
    title: "OPERATION RETURN",
    date: "2444",
    description:
      "Resource scarcity forces return to Earth. ESAS descends to Travnik. Factions clash.",
    icon: "🌍",
    color: "gold",
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
    rituality:
      "Strict military protocols. Training drills. Equipment maintenance cycles. No emotional attachments.",
    technology:
      "Advanced weapons. Anti-radiation beacons. ISS technology. Real-time communications with orbit.",
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
    rituality:
      "Scientific method and experimentation. Peer review processes. Lab safety protocols. Knowledge sharing ceremonies.",
    technology:
      "Compound-T extraction technology. Element 444 analysis tools. Laboratory equipment. Cryogenic systems.",
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
    rituality:
      "Daily prayers and ceremonies. Sacred pilgrimages. Ritual sacrifices during scarcity. Ascension festivals.",
    technology:
      "Basic agricultural tools. Traditional collection methods. Spiritual artifacts. Limited understanding of radiation protection.",
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
    imageUrl: "/projects/characters/Mandril.png",
    skinImages: ["/projects/characters/Mandril.png"],
    color: "#000000",
    background:
      "Blood, tears, and screams. Reminiscences of a tormented past marked in Quasar's memory haunt his sleep every night, gripping his knives tightly in a vain attempt to rest. Marked as the best of his promotion, Quasar leads ESAS operations on Earth, directing his members and sending information to the ISS. Though he worries about his comrades' well-being, he would not hesitate for a second to eliminate them if they endangered the mission's success. The only thing that matters now is returning to space—they need him there. Though excellent with almost any weapon, Quasar enjoys working with his knives, light and silent weapons for eliminating Hoomans without alerting the rest, an ideal option for conserving ammunition, scarce on the blue planet. Quasar possesses great agility, allowing him to infiltrate enemy ranks unseen and quickly eliminate his targets, opening a path for his squad to advance into Hooman burrows and collect Element 444, as well as into enemy bases to plunder other valuable resources like Compound-T.",
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
    imageUrl: "/projects/characters/Escarabajo.png",
    skinImages: ["/projects/characters/Escarabajo.png"],
    color: "#000000",
    background:
      "Not the biggest, nor the smartest, nor the strongest. But perhaps the most persevering. When life hung by a thread, Bugve was the first to push himself and repeat trial simulations, determined to climb the rankings and be selected to join ESAS. Capable of withstanding blows and extreme situations, Bugve managed to surpass difficult trials like skirmishes among aspirants or radiation simulations, taking shelter under his shell until the test ended while his comrades collapsed unconscious. Once selected, Bugve decided to specialize in explosives, capable of surviving accidents that would kill any other squad member. His passion for discovering new explosives and improving them using Compound-T makes him seem like a mad scientist, with irrational expressions and attitudes. However, beneath that eccentric and hyperactive mask hides a shy and insecure creature, fearful of failing his team and being expelled from ESAS.",
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
    imageUrl: "/projects/characters/Ave.png",
    skinImages: ["/projects/characters/Ave.png"],
    color: "#4B8BBE",
    background:
      "Descendant of a family of falcons sheltered by the engineers at the underground base, Palaptica is the pilot of the ship that carries the Engineers from the base to Travnik. During the evolution of animals, Palaptica lost her ability to fly but sharpened her senses to an extreme level, capable of visualizing distant targets with ease or hearing the slightest sound that alerts Hoomans or other creatures. During her training with the engineers, she specialized in designing and maintaining aeronautical structures, becoming responsible for investigating ship improvements and repairing it when it crashes on Travnik. As she usually works in the base, she has no great weapons training, so she uses a simple pistol and various custom gadgets that ensure her survival against Hoomans and possibility of escape against other enemies. She is a pioneer in working with Compound-T, investigating its properties and conducting tests to create new materials resistant to radiation.",
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
    imageUrl: "/projects/characters/Antilope.png",
    skinImages: ["/projects/characters/Antilope.png"],
    color: "#4B8BBE",
    background:
      "Blitz is a young antelope from the radioactive wastelands surrounding the city of Travnik. It is unknown how his family survived the radiation and mutated to resist it. During the Wild Awakening, Blitz and his herd discover Travnik's command center while the Engineers are in the midst of reform and construction work to build a safe base to work and operate from. Seeking food and resources, Blitz's group infiltrates the base to steal valuable supplies, but after triggering an alarm they are forced to flee, pursued by the Engineers. Swift but inexperienced, Blitz becomes trapped in the facility, surrounded by Engineers who, instead of finishing him, propose that he join them. Blitz accepts and becomes a brilliant apprentice, standing out among the rest of the students, and earning a place in the Engineers' exploration squad, where he hopes to find his herd and convince them to join the Engineers to settle and live a better life. Blitz specializes in aerodynamics, studying better ways to leverage his innate high speed.",
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
    imageUrl: "/projects/characters/Pulpo.png",
    skinImages: ["/projects/characters/Pulpo.png"],
    color: "#228B22",
    background:
      "From an early age, Oct-Vi-O always stood out for his ability to hide around the house, camouflaging himself with the surroundings and scaring his siblings to laugh at them. When his parents worked in the field, he roamed the perimeter of the base, asking guards posted at the entrances what the outside world was like. The guards usually ignored him, but that made Oct-Vi-O's curiosity grow increasingly. During a period of resource scarcity, the Supreme Priest decided to sacrifice a family to save resources, convincing the faithful by saying they were chosen for premature Ascension. Oct-Vi-O's family was selected. His parents and siblings went to the Temple, eager to receive the Ascension, but Oct-Vi-O wanted to know the outside world, so when the guards were about to light the pyre, he shot the Supreme Priest in cold blood with a sniper rifle he had stolen from the armory. As everyone present stood in shock, Oct-Vi-O walked slowly toward the Supreme Priest's corpse, took his scepter, and sat on the throne, while his family and temple members knelt in respect.",
  },
  {
    id: "lysander",
    name: "Lysander",
    faction: "PROSÉLITOS",
    role: "Priest / Botanist",
    species: "Mantis",
    scientificName: "Mantis religiosa",
    gender: "Female",
    description:
      "High priestess of agriculture. Devoted to sacred cultivation of resources. Mystical connection to Compound-T. Keeper of temple gardens.",
    personality:
      "Serene, devoted, philosophical. Speaks in measured tones about ascension and sacrifice. Deeply spiritual but pragmatic about survival.",
    objectives:
      "Cultivate sacred gardens. Harvest Element 444. Achieve ascension. Lead faithful to paradise.",
    abilities: {
      active:
        "Garden's Blessing (Active) → Regenerates health in marked area, also heals allies",
      passive:
        "Faith (Passive) → Gains X% resistance to control effects and mutations",
    },
    imageUrl: "/projects/characters/mantis.png",
    skinImages: ["/projects/characters/mantis.png"],
    color: "#228B22",
    background:
      "Lysander has served the Proselytes since the base's founding, tending to the underground gardens where Element 444 is cultivated in sacred ritual. She was not born into the faith but converted after discovering that the gardens' growth seemed to accelerate under her touch, which the elders interpreted as divine blessing. As the primary cultivator of resources, Lysander maintains the delicate balance between harvesting materials for survival and preserving the sacred groves. She is Oct-Vi-O's most trusted advisor, offering spiritual guidance while managing the base's agricultural operations. Despite her devotion to ascension theology, Lysander harbors secret doubts about the sacrificial practices, believing that the faithful should ascend through spiritual evolution rather than ceremonial fire. Her relationship with the new Supreme Priest is one of respectful obedience mixed with subtle resistance, as she quietly steers temple policy toward sustainable resource management.",
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
  {
    id: "filtro-viabilidad",
    term: "Viability Filter",
    definition:
      "Brutal ESAS training process. Candidates undergo extreme physical and psychological tests, including combat simulations and radiation exposure. High mortality rate.",
    relatedTerms: ["ESAS", "ISS"],
  },
  {
    id: "despertar-salvaje",
    term: "Wild Awakening",
    definition:
      "Historical period (2400-2415) when radiation-affected pathogen granted animals advanced intelligence and cognitive abilities. Animals discovered human shelters and technology.",
    relatedTerms: ["Element 444", "Rebirth Syndrome"],
  },
  {
    id: "iss",
    term: "ISS (International Space Station)",
    definition:
      "Orbital base where animals established refuge after the Exodus. Houses most advanced technology and serves as ESAS command center. Resource scarcity forced return to Earth.",
    relatedTerms: ["ESAS", "Operation Return"],
  },
  {
    id: "compuesto-t",
    term: "Compound-T",
    definition:
      "Radioactive mineral formed by Element 444 mixed with atmospheric gases. Ten times harder and denser than conventional materials. Used for advanced weapons and radiation-resistant structures.",
    relatedTerms: ["Element 444", "Conclaves"],
  },
  {
    id: "elemento-444",
    term: "Element 444",
    definition:
      "Biomolecule extracted from neural tissue of hibernating humans. Catalyst for beneficial mutations and resistance to environmental toxins. Essential for genetic engineering.",
    relatedTerms: ["Hoomans", "Hibernation State", "Compound-T"],
  },
  {
    id: "operacion-retorno",
    term: "Operation Return",
    definition:
      "Year 2444 mission when ESAS descended from ISS to Travnik due to resource scarcity in orbit. Marked beginning of faction conflicts on Earth.",
    relatedTerms: ["ESAS", "ISS", "Travnik"],
  },
  {
    id: "travnik",
    term: "Travnik",
    definition:
      "City in Europe Sector that serves as command center after the Fall. Strategic location where three factions (ESAS, Engineers, Proselytes) clash for resources.",
    relatedTerms: ["Operation Return", "Engineers", "ESAS", "Proselytes"],
  },
  {
    id: "cinco-dedos",
    term: "Five Fingers of Death",
    definition:
      "Elite group of soldiers from Oceania Sector, also called Deadly Hand of Indian Ocean. Each carried a hydrogen bomb in suicide mission. The Europe Finger rebelled, saving thousands.",
    relatedTerms: ["The Fall", "General Davis"],
  },
  {
    id: "guerra-inter-mundial",
    term: "Inter-World War",
    definition:
      "Global conflict (2035) between Earth sectors fighting for last resources. Used Rebirth Syndrome as main weapon. Ended with nuclear bombs from General Davis.",
    relatedTerms: ["Rebirth Syndrome", "The Fall", "Five Fingers of Death"],
  },
  {
    id: "invierno-nuclear",
    term: "Nuclear Winter",
    definition:
      "Years following the Fall (2040-2400) when nuclear devastation made surface uninhabitable. Survivors forced underground. Pathogen infiltrated water reserves.",
    relatedTerms: ["The Fall", "Rebirth Syndrome", "Wild Awakening"],
  },
  {
    id: "criogenizacion",
    term: "Cryogenization",
    definition:
      "Emergency process used on humans during New Dawn. Survivors placed in cryogenic sleep hoping for future salvation. Pathogen infiltrated these systems.",
    relatedTerms: ["New Dawn", "Engineers", "Hibernation State"],
  },
];

// ==================== LOCATIONS ====================

export const locations: Location[] = [
  {
    id: "wasteland-moors",
    name: "The Moors",
    type: "wasteland",
    icon: "🏜️",
    description:
      "Vast desolate wastelands stretching across former fertile lands. Harsh winds carry radioactive dust across barren terrain.",
    environment:
      "Extreme temperature variations. Limited vegetation. Scarce water sources. High radiation in certain zones.",
    threats:
      "Hooman patrols. Radiation storms. Resource scarcity. Extreme exposure.",
    resources:
      "Scattered military equipment. Abandoned supply caches. Compound-T veins in exposed rock formations.",
    loreElements:
      "Pre-Fall warning signs. Abandoned military outposts. Communication towers with emergency broadcasts still looping.",
    strategicValue:
      "Open terrain ideal for long-range reconnaissance. Few hiding spots force tactical movement. ESAS patrol routes.",
  },
  {
    id: "oasis-sanctuaries",
    name: "Oasis Sanctuaries",
    type: "oasis",
    icon: "🌴",
    description:
      "Rare pockets of life around underground water springs. These areas attract both survivors and predators.",
    environment:
      "Vegetation clusters. Clean water sources. Moderate temperatures. Natural shelter from elements.",
    threats:
      "Contested territory. Faction conflicts. Hooman ambushes near water. Wildlife competition.",
    resources:
      "Fresh water. Medicinal plants. Food sources. Safe camping locations.",
    loreElements:
      "Engineer research camps. Proselyte shrines. Pre-Fall rest stops and tourist locations.",
    strategicValue:
      "Critical resource points. Natural meeting grounds. Faction negotiation zones. High-value control points.",
  },
  {
    id: "frozen-zones",
    name: "Frozen Wastes",
    type: "frozen",
    icon: "❄️",
    description:
      "Ice-covered regions where nuclear winter's effects never fully receded. Temperatures remain below freezing year-round.",
    environment:
      "Permanent ice and snow. Blizzards. Limited visibility. Treacherous terrain.",
    threats:
      "Hypothermia. Ice collapses. Limited mobility. Frozen Hooman hibernation sites.",
    resources:
      "Preserved pre-Fall supplies. Cryogenic facility remnants. Isolated research stations.",
    loreElements:
      "Intact frozen structures. Preserved vehicles. Emergency shelters with supplies. Scientists' final recordings.",
    strategicValue:
      "Natural storage for sensitive materials. Slow Hooman activity. Hidden ESAS supply caches.",
  },
  {
    id: "cave-networks",
    name: "Underground Networks",
    type: "cave",
    icon: "⛰️",
    description:
      "Extensive cave systems formed by natural erosion and wartime excavations. Many lead to pre-Fall bunkers.",
    environment:
      "Total darkness in deep sections. Natural labyrinths. Underground rivers. Stable temperatures.",
    threats:
      "Hooman conclaves. Cave-ins. Navigation difficulties. Ambush-prone corridors.",
    resources:
      "Element 444 from hibernation cocoons. Compound-T veins. Shelter from surface dangers.",
    loreElements:
      "Proselyte temples. Pre-Fall survival bunkers. Military storage facilities. Ancient human murals and messages.",
    strategicValue:
      "Proselyte strongholds. Direct access to Element 444. Safe from aerial threats. Strategic underground passages.",
  },
  {
    id: "urban-ruins",
    name: "City Ruins",
    type: "urban",
    icon: "🏚️",
    description:
      "Collapsed cities with crumbling skyscrapers and overturned vehicles. Once-thriving urban centers now serve as deadly mazes.",
    environment:
      "Multi-level structures. Urban debris. Unstable buildings. Enclosed spaces mixed with open plazas.",
    threats:
      "Building collapses. Hooman nests in structures. Trapped corridors. Vertical dangers.",
    resources:
      "Abundant loot in buildings. Military equipment. Civilian supplies. Technology components.",
    loreElements:
      "Store fronts frozen in time. Personal belongings. Propaganda posters. Emergency evacuation signs. Final messages spray-painted on walls.",
    strategicValue:
      "Rich scavenging grounds. Excellent for traps and ambushes. Vertical combat advantages. Engineers establish workshops here.",
  },
  {
    id: "swamp-junkyards",
    name: "Toxic Marshes",
    type: "swamp",
    icon: "☢️",
    description:
      "Contaminated wetlands where industrial waste merged with floodwaters. Hooman breeding grounds proliferate in the murky depths.",
    environment:
      "Toxic water. Dense fog. Decomposing vegetation. Unstable ground. Limited visibility.",
    threats:
      "Hooman nests everywhere. Disease. Poisoned water. Quicksand-like mud. Frequent ambushes.",
    resources:
      "Salvageable scrap. Compound-T deposits in debris. Element 444 from abundant cocoons.",
    loreElements:
      "Submerged vehicles with personal effects. Industrial waste sites with company logos. Warning signs about contamination. Makeshift refugee camps.",
    strategicValue:
      "High-risk, high-reward for Element 444 harvesting. Natural defensive terrain for Proselytes. Engineers avoid due to equipment corrosion.",
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

// ==================== LORE SECTIONS ====================

export const loreSections: LoreSection[] = [
  {
    id: "the-fall-detailed",
    title: "The Fall: The End of an Era",
    icon: "💥",
    category: "war",
    summary:
      "The Inter-World War seemed to be the least destructive in human history, using biochemical weapons that temporarily incapacitated soldiers. However, General Davis's final decision changed everything...",
    fullContent: `## The Fall: The End of an Era

The Inter-World War over the planet's last resources seemed to be the least destructive in human history.

The main weapon of the sectors was a biochemical agent capable of incapacitating soldiers by degenerating their physical and cognitive abilities temporarily (Rebirth Syndrome), which was a great advantage when conquering territories easily and effectively, capturing numerous prisoners of war who served as test subjects for new experimental weapons.

When the Oceania Sector succumbed, in a final attempt to end their enemies, General Davis ordered the detonation of the largest hydrogen bomb in history, with a charge of more than 200 megatons.

Trusting in his most loyal group of soldiers, called the Deadly Hand of the Indian Ocean or the Five Fingers of Death, he delivered a bomb to each one, sending them on a suicide mission to end the other sectors and finish the war.

However, the Finger responsible for detonating the bomb in the Europe Sector rebelled against his general and warned the enemy leaders by radio to help his people take shelter before impact, thus avoiding the total extinction of the human race.

Earth is divided into factions or sectors, corresponding to the current continents. It is never said that the Oceania Sector ends up disappearing, since the bombs fall on the other sectors, nor is it taken for granted that all humans from the rest of the sectors die.

This represents an advantage for expanding the game's story with new locations, characters, stories, and objectives (Game Expansions).

### Immediate Consequences

The explosion of the bomb in enemy territories caused massive destruction, affecting millions of structures and destroying most of the Earth's surface resources.

Much of humanity died with the impact of the warheads.

The groups of survivors who survived the explosion were forced to take refuge underground, with access to limited resources and without the possibility of going to the surface during the first years of nuclear winter.

The impact of the bombs caused failures in the stability of underground laboratories that stored the weapon responsible for Rebirth Syndrome, which caused the pathogen to seep into the water reserves of the different Sectors, modifying its molecular structure depending on the climatic and environmental properties to which it was exposed → Unknown consequences for living beings exposed to the new strain.

This justifies the appearance of Hoomans and super-animals known ONLY in the Travnik area, which leaves OPEN the option for the emergence of new characters, since survival conditions (or not) may have been different in other sectors and regions of Earth.

Thanks to the Finger's betrayal, the Europe Sector was able to preserve the greatest number of civilians, although forced to subsist in hiding during the nuclear winter in the years following the war.

After losing communication with the rest of the sectors, a command center was established in the city of Travnik.

The Balkans region managed to survive the wave of massive destruction, thanks to mountain ranges such as the Dinaric Alps, the Carpathians, and the Balkans. Additionally, the large number of caves and underground systems offered natural shelter for civilians who managed to evacuate their cities.`,
  },
  {
    id: "new-dawn-humans",
    title: "The New Dawn: Humanity's Last Hope",
    icon: "❄️",
    category: "world",
    summary:
      "Humans without access to advanced technologies who became infected began 'devolving,' succumbing to radiation's aftereffects, becoming ill and covered by a cocoon...",
    fullContent: `## The New Dawn: Humanity's Last Hope

Humans without access to advanced technologies or resources (military or scientific) who became infected were "devolving," succumbing to radiation's aftereffects, becoming ill and covered by a cocoon formed of skin and viscera (Hibernation State) until they became Hoomans.

The rest of the population, protected behind the walls of different shelters, also ended up infected.

As a last survival measure, the shelter population was cryogenized, leaving different documents (for possible survivors) explaining the current situation on the Planet, and that there was no cure to reverse the transformation into Hoomans.

### The Cryogenization Decision

When scientists realized that the pathogen was unstoppable and had infiltrated even the most secure shelters through water and air supplies, they made the difficult decision to cryogenize the population.

This process was documented in detail, with instructions left for any super-intelligent beings that might emerge in the future. The hope was that future generations would possess the knowledge and technology to reverse the effects of Rebirth Syndrome.

The cryogenic chambers were designed to last centuries, powered by geothermal energy and protected by multiple security layers. Each chamber contained not only sleeping humans but also databases with humanity's entire accumulated knowledge, hoping that this information would be useful for whoever discovered them.`,
  },
  {
    id: "wild-awakening-animals",
    title: "The Wild Awakening: A New Intelligence",
    icon: "🧬",
    category: "world",
    summary:
      "Animals, in contrast, mutated into a new species of super-animals, adapting to the new climate and gaining consciousness and advanced cognitive abilities...",
    fullContent: `## The Wild Awakening: A New Intelligence

Animals, in contrast, mutated into a new species of super-animals, adapting to the new climate (to a certain extent but able to resist in low radiation areas → Temporary beacons) and gaining consciousness and advanced cognitive abilities, which facilitated their learning and adaptation to human cultures before they completely disappeared.

### The Mutation Process

The same pathogen that destroyed humanity had a completely different effect on animals. While humans degenerated into primitive Hoomans, animals experienced an evolutionary leap unprecedented in natural history.

The mutation process was gradual but profound:

**Physical Changes:**
- Increased brain size and complexity
- Development of more dexterous appendages capable of tool manipulation
- Enhanced sensory abilities adapted to the radioactive environment
- Natural resistance to low to moderate levels of radiation

**Cognitive Evolution:**
- Development of abstract reasoning and problem-solving
- Capacity for language and complex communication
- Understanding of cause and effect
- Ability to learn from human artifacts and documents

### Discovery of Human Shelters

When super-animals began exploring the post-apocalyptic world, they discovered the entrances to human shelters. Initially cautious, they eventually entered and found:

- Cryogenic chambers with sleeping humans
- Databases and libraries with human knowledge
- Advanced technology and equipment
- Documents explaining what had happened

This discovery became a turning point. The super-animals realized they were the inheritors of a lost civilization and felt a responsibility to learn, preserve, and potentially save what remained of humanity.

### Learning from Humanity

The most intelligent and curious super-animals dedicated themselves to studying everything humans had left behind:

- They learned to read and write in human languages
- They studied science, engineering, medicine, and warfare
- They understood the causes of the war and the fall
- They learned to operate human technology and adapt it for their use

This knowledge would become the foundation for the different factions that would eventually emerge, each with its own interpretation of what they had learned and what should be done with it.`,
  },
  {
    id: "elemento-444-detailed",
    title: "Element 444: The Key to Evolution",
    icon: "🧬",
    category: "resources",
    summary:
      "This biomolecule developed as a response to exposure to a mutagenic pathogen resulting from atmospheric radiation. Scientists believe it forms as an adaptive defense mechanism...",
    fullContent: `## Element 444: The Key to Evolution

This biomolecule developed as a response to exposure to a mutagenic pathogen resulting from atmospheric radiation. Scientists believe it forms as an adaptive defense mechanism to allow survival in hostile environments and facilitate rapid genetic adaptation to new threats.

### Origin and Discovery

When several infected humans accompanied super-animals into space to help them structure the ISS, after mutating and transforming into Hoomans, a battle devastated the space station where super-animals realized that Earth's hope rested with them.

After the battle, some animals decided to analyze the Hooman bodies, discovering an unknown substance crystallized in the brains of the infected.

### Extraction Process

When a subject becomes infected, they enter a hibernation state for a certain time before awakening as a Hooman. During the hibernation process, Element 444 modifies the subject's DNA, originating the physical and mental mutations visible in Hoomans.

To extract Element 444 in its ideal state, it requires harvesting neural tissue from the hibernating subject, since during transformation this molecule crystallizes, losing utility the closer it gets to Eclosion (End of hibernation → The human is now a Hooman).

This process is complicated due to the large number of Hoomans that guard the caves and places where the young are found.

### Molecular Properties

Element 444 has the remarkable ability to interact with specific sequences of human DNA, facilitating precise and controlled genetic modifications. It acts as a molecular catalyst that can induce beneficial mutations, such as resistance to environmental toxins or metabolic adaptations to survive in extreme conditions.

However, in an uncontrolled state and affected by the toxic environment present in the world after nuclear winter, mutations become malignant, originating the Hooman transformation.

### Functionality and Applications

Used in laboratories and advanced research centers, Element 444 allows manipulation and direction of the genetic evolution of living organisms. This capability is essential for genetic engineering aimed at adapting life forms for exploration and colonization of extraterrestrial environments.

**Current Applications:**
- Creation of anti-radiation beacons that temporarily disperse radiation
- Genetic experimentation to reverse Rebirth Syndrome
- Development of adaptive mutations for space survival
- Enhancement of super-animal cognitive and physical abilities

### Impact on Post-Apocalyptic Society

The discovery of Element 444 was a turning point in the fight against Hoomans. Thanks to its adaptive properties, beacons were created that dispersed radiation temporarily, allowing super-animals to carry out reconnaissance, rescue, and resource collection missions.

Additionally, it facilitated significant advances in genetic medicine and biotechnology, offering new hopes for survival and progress in a changing and dangerous world.

### Ethics and Control

Despite its potential benefits, the use of Element 444 raises ethical dilemmas about genetic manipulation and scientists' responsibility for possible unintended consequences.

Debates about its regulation and responsible application are central themes in post-apocalyptic society → Fear of a new malignant mutation that finishes exterminating (intelligent) life on Earth.

### Space Exploration and Adaptation

In the context of space colonization, Element 444 becomes an indispensable tool for adapting terrestrial life to alien conditions, facilitating the survival and growth of the ISS.`,
  },
  {
    id: "compuesto-t-detailed",
    title: "Compound-T: The Radioactive Mineral",
    icon: "⚙️",
    category: "resources",
    summary:
      "During nuclear winter, atmospheric radiation altered the chemical composition of surviving living beings, but also affected the crystalline structure of certain minerals...",
    fullContent: `## Compound-T: The Radioactive Mineral

During nuclear winter, atmospheric radiation altered the chemical composition of surviving living beings, but also affected the crystalline structure of certain minerals, modifying their appearance and properties, conferring different uses in the new era present on Earth.

### Origin and Discovery

Common materials such as coal or iron presented visual alterations, and their physical properties had been enhanced. The color was more striking and showy, easy to identify. Their hardness had multiplied, making extraction difficult but notably improving derived products obtained from their treatment.

Its origin is not known exactly, but it is believed that Compound-T is a mixture of Element 444 and radioactive gases present in the atmosphere that affects the composition of different minerals.

### Extraction Process

To extract minerals affected by Compound-T, it is necessary to isolate the vein to be mined, depriving it of contact with the atmosphere and with other adjacent materials, to avoid contamination. This task is arduous and exhausting, since Hoomans seem to have an attraction to these materials and usually guard these lodes forming large groups known as Conclaves.

This peculiarity of ex-humans hinders the extraction process by endangering super-animals, whose time is limited to that granted by anti-radiation beacons.

### Molecular Properties

Minerals affected by Compound-T present the same physical properties as conventional minerals (Color, hardness, streak, tenacity...) but multiplied by 10, which makes these minerals substitutes for conventional materials used by humans before the Fall.

### Functionality and Applications

Conventional materials do not meet the necessary conditions to keep Element 444 isolated, so laboratory equipment used for experimentation with the new biomolecule needs to be updated using new materials discovered during nuclear winter.

**Current Uses:**
- Advanced laboratory equipment capable of containing Element 444
- Enhanced weapons and ammunition with greater penetration and lighter weight
- Rechargeable anti-radiation beacons without container deterioration
- Reinforced structures for ISS expansion resistant to radiation and space threats

### Impact on Post-Apocalyptic Society

The possibility of creating new weapons and tools from Compound-T facilitated resource acquisition and super-animal security. Weapon ammunition had more penetration and was lighter, gadgets like anti-radiation beacons could be recharged without the container deteriorating, saving production costs.

Additionally, new structures created to expand and reinforce the ISS were more resistant thanks to combining minerals with Compound-T and Element 444, protecting space residents from radiation and possible space threats.

### Ethics and Control

The use of Compound-T represents a great advance in technology and infrastructure. Until now, the consequences these materials may have are unknown, since although they are suspected to be radioactive, tests and analyses carried out during their discovery do not confirm any known danger to super-animal health.

However, there are growing concerns about long-term effects and whether prolonged exposure might cause unforeseen mutations or health issues.

### Space Exploration and Adaptation

As mentioned in previous sections, the use of Compound-T allows constructions to evolve notably faster, advancing the opportunity to expand the ISS to continue growing as a society, attracting more survivors and distancing them from Earth's hell.`,
  },
  {
    id: "esas-detailed",
    title: "ESAS: Elite from the Stars",
    icon: "🚀",
    category: "factions",
    summary:
      "Life in space may seem wonderful, but for ISS neonates, the first years of their existence represent a fight for survival through the Viability Filter...",
    fullContent: `## ESAS: Elite Space Animal Squad

Life in space may seem wonderful, but for ISS neonates, the first years of their existence represent a fight for survival.

### The Viability Filter

When resources began to run out, ISS leaders decided to create a group of elite super-animals to send them to Earth in search of supplies and Element 444. The squad's entrance tests were simple: rations were limited and aspirants had to fight for them in a series of individual tests that sought to exploit the different abilities of each super-animal.

**The Selection Process:**

After each test, animals received a score that positioned them in a general ranking. At the end of each week, during the three months of training, aspirants in the last positions were expelled into space.

At the end of the training period, the best classified were recognized as the new Elite Squadron, who were taught to work as a team for operations on Earth, but always preserving their personal survival instinct.

This brutal process, known as the Viability Filter, traumatized many participants but created warriors without equal, capable of making difficult decisions and surviving in the most extreme conditions.

### Organization: Discipline and Military Order

Instructed in military art, ESAS possesses advanced knowledge in the use of weapons and high-tech equipment, such as anti-radiation beacons. Their training allows them to analyze the battlefield situation, enabling them to plan their operations to avoid the greatest number of problems.

The attitude of its components is almost apathetic, without showing many emotions, since these sensations were a mortal distraction during the selection process.

### Knowledge of What Happened

- Thanks to sharing time with humans, ESAS has information about the War's events and the origin of their evolution into super-animals
- With scientists' help, ESAS members can analyze and carry out experiments to learn more about Element 444: uses, effects, alterations...
- Many cultures, traditions, and knowledge from Earth are stored in records within the ISS, protecting the planet's past

### Objectives

After the War, the scarcity of resources present in the ISS and those brought to space from the command center are not enough to generate a self-sufficient society, so after some time in space (Exodus - Return Operation) animals must descend to get more Element 444.

**Primary Mission:**
- Extract Element 444 and Compound-T from Earth
- Experiment to create a cure for Rebirth Syndrome
- Collect resources to make the ISS self-sufficient
- Eventually escape Travnik and establish permanent space civilization

### Technology and Equipment

ESAS unknowingly about Compound-T's existence, which helps terrestrial factions stand up to "space invaders," using weapons and equipment improved with the radioactive mineral.

However, ESAS possesses superior technology from the ISS:
- Advanced weapons with precision targeting systems
- Anti-radiation beacons using Element 444
- Real-time communications with orbital station
- Powered exoskeletons for enhanced strength
- Medical nanobots for rapid healing

Extraction missions are organized by ESAS, since they possess the necessary technology (using Element 444) to create low radiation zones temporarily (beacons).`,
  },
  {
    id: "ingenieros-detailed",
    title: "Engineers: Hope for Humanity",
    icon: "⚙️",
    category: "factions",
    summary:
      "When animals sensed danger in the air, they sought refuge nearby. Those who found an underground air base discovered a group of engineers sent by the Bosnian government...",
    fullContent: `## Engineers: Apprentices of Human Knowledge

When animals sensed danger in the air, they sought refuge nearby. Those who found an underground air base discovered a group of engineers, sent by the Bosnian government to prepare a ship and escape to a habitable place.

### Organization: Apprentices of Engineers

During the New Dawn, engineers cryogenize animals with them. When super-animals are born during the "Wild Awakening," they discover the shelters and rescue the human engineers upon seeing that they have also saved other animals.

The super-animals learn from the engineers and obtain the ability to design and create useful tools and objects for survival.

Following their human masters' instructions, they design an escape plan to a habitable place, repairing an airplane to leave the city.

### The Crash in Travnik

When they manage to escape in the airplane, radiation makes flight difficult and they crash in Travnik, near the command center, where they discover more cryogenized humans and documents with additional information.

There they establish their base, where they produce weapons and refine Compound-T, in addition to using laboratories to experiment with Element 444.

**The Discovery:**

During the Wild Awakening, nature also grew and evolved, recovering the terrain that humans had taken from it during hundreds of years, covering the shelters where survivors had hidden.

When the Engineers crashed in Travnik and began preparing the terrain to build their settlements, nature was forced to retreat again, revealing the entrances to human installations.

Part of the engineers discovered Travnik's command center, finding several cryogenized survivors along with documents and information explaining studies briefly performed on the first infected humans.

Thanks to their previous training at the underground air base, the Engineers were able to understand the situation, and in gratitude to their mentors for having saved other animals during the Fall, they decided to find a way to reverse the effects of Rebirth Syndrome in humans.

### Knowledge of What Happened

- They are aware of the Inter-World War but don't know that the planet's situation is similar in the rest of the Sectors → So they continue trying to repair the airplane to flee Bosnian territory
- They know about Hoomans' existence, and before the human engineers transform they cryogenize them with hope of saving them in the future
- They are pioneers in Compound-T extraction, since thanks to their knowledge they identify the compound as something new and unknown

### Objectives

To save humans and flee the country, the Engineers analyze and experiment with Hoomans, discovering Element 444, with which they try to create a tool to reverse mutation and save their masters.

**Primary Goals:**
- Reverse Rebirth Syndrome and save cryogenized humans
- Collect Compound-T and Element 444 to reinforce the airplane
- Continue experiments to understand the pathogen
- Repair the ship to escape to a habitable zone (not knowing everywhere is equally affected)

### Technology and Innovation

For this they used laboratories to develop technology capable of working with Element 444 and refining Compound-T collected during reconnaissance missions of areas surrounding Travnik.

**Technological Achievements:**
- Compound-T refinement and purification processes
- Element 444 containment and analysis equipment
- Enhanced weapons and tools using refined minerals
- Improved cryogenic systems
- Advanced medical research facilities

It must be taken into account that different sectors don't know their rivals' fate, that is, nobody knows that bombs have been launched in all sectors except Oceania, so hopes of fleeing to a habitable territory still live in survivors' minds (since they also don't expect to die mutating into Hoomans).`,
  },
  {
    id: "proslitos-detailed",
    title: "Proselytes: Faith in the Ascension",
    icon: "⛪",
    category: "factions",
    summary:
      "A group of animals rescued by a Bogomil sect comprised of different churches in the city of Sarajevo during the bomb launch...",
    fullContent: `## Proselytes: Awaiting Divine Ascension

A group of animals rescued by a Bogomil sect comprised of different churches in the city of Sarajevo during the bomb launch. Influenced by sectarians' beliefs, animals "grow up" believing in the existence of divine duality, with the evil part being the cause of the world's end.

### Organization: Religious Influences

**The Bogomil Influence:**

The Bogomils believe in two deities: a good god (spiritual world) and an evil god (material world). In Travnik, the good god is Michael (the savior Finger who warned Europe).

Firm conviction that the Finger who warned the Europe Sector is the reincarnation of the benevolent divinity who, according to legend, will purge Earth with the fall of a gigantic meteorite 410 years after the first apocalypse, to end survivors' suffering and grant them divine ascension.

They arrive in the city of Travnik through underground tunnels, in which they establish different bases.

### The Underground Society

Proselytes' underground bases house hundreds of faithful adherents who work preparing the Ascension, the fall of an enormous meteorite that will purge Earth of Hoomans and grant surviving devotees a warm welcome into Michael's arms, the good God in whom cult members firmly believe.

To ensure all members' Ascension, monks forbade animals from going outside the shelters, relying on their beliefs of Michael's arrival.

**Base Structure:**

Space is usually divided into individual plots where members live and work at different tasks, such as agriculture, sculpture, weapon and tool creation, etc.

The Supreme Priest of each base resides in a central plot, protected by guards. When not seated on his throne, attending parishioners or dictating sentences, the priest's function is none other than to praise the deity Michael, represented in a bust of the savior Finger carved by human monks during the First Dawn, and maintained by Proselytes until today.

Once a day, "inferior" followers (neither priest nor guards) queue to access the Temple of the Finger and pray a prayer in favor of Michael, receiving his blessing and motivating them to continue working.

### Knowledge of What Happened

- Unaware of radiation's true reason, they attribute it to the evil god
- Sectarians' legacy encompasses different aspects, from internal hierarchy to a cannibalistic society, forced to feed on its own members when resources are scarce
- Before perishing, the sect's human members taught them basic skills in agriculture and material collection, which they use to build bases through Travnik's underground, expanding their sect
- During the Exodus time, Proselytes learn to manufacture basic weapons and useful equipment for their tasks, and discover Compound-T, which they use to reinforce structures, although they don't have sufficient knowledge or technology to refine it and implement it in their weapons

### Objectives

During nuclear winter, Proselytes have managed to create an almost self-sufficient base, needing small amounts of Compound-T that they go out to mine at dusk, when Hoomans are lethargic and Engineers rest at the command center, which they took upon arriving in the city, and where the incomplete ship to escape to space is located.

**Primary Goals:**
- Prepare for the Ascension (the prophesied meteor in 410 years)
- Collect Compound-T for base construction and expansion
- Avoid unnecessary sacrifice of members
- Spread their faith and recruit new believers
- Protect the Temple of the Finger

### Technology and Resources

Proselytes use less sophisticated gadgets than engineers or ESAS members, but equally effective and of natural origin:
- Radioactive fungi for area denial
- Toxic vegetation for traps
- Traditional agricultural tools
- Basic mining equipment
- Spiritual artifacts and blessed weapons

Despite their seemingly primitive approach, their intimate knowledge of the underground systems and natural resources makes them formidable opponents in their territory.

### Rituality and Culture

- Daily prayers and ceremonies honoring Michael
- Sacred pilgrimages to the Temple of the Finger
- Ritual sacrifices during times of extreme scarcity (cannibalism as last resort)
- Ascension festivals celebrating their faith
- Blessing ceremonies for newborns and warriors
- Death rites preparing souls for eventual Ascension`,
  },
];

