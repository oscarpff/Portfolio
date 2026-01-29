// Character profiles for FOQUES Quest System
// Extracted from OPF_Documentation.md

export interface QuestCharacter {
  name: string;
  role: string;
  species: string;
  gender: string;
  appearance: string;
  personality: string;
  currentState: string;
  narrativeRole: string;
  imageUrl: string; // Placeholder - user will need to add actual images
}

// Quest 1 Characters
export const raaz: QuestCharacter = {
  name: "Raaz",
  role: "Antagonist-turned-reluctant-ally",
  species: "Red Lynx (Lynx rufus)",
  gender: "Male",
  appearance: "Sleek build with red-orange fur marked by darker spots. His golden eyes carry intensity and pride. A deep scar crosses his left cheek—a reminder of past battles. His movements are calculated, his claws sharp. Blood stains his leg from the trap.",
  personality: "Proud and sarcastic, Raaz rarely shows weakness. He is a natural predator who values strength and survival above sentimentality. Despite his ruthlessness, he harbors an unexpected capacity for pragmatism and loyalty—if earned. His pride often clashes with his instinct for self-preservation.",
  currentState: "Trapped in an old iron trap in an abandoned village. His leg is badly injured, and the Stain's creatures are closing in. He is desperate but refuses to beg—his tone remains commanding even in vulnerability.",
  narrativeRole: "Raaz represents the theme of 'the enemy of my enemy is my friend.' If Kari saves him, he becomes a guide and occasional protector, though his methods remain morally gray. If abandoned, he returns in Quest 2 as a corrupted hallucination, embodying Kari's guilt and the consequences of inaction.",
  imageUrl: "/projects/characters/raaz.jpg" // Placeholder path
};

export const kenji: QuestCharacter = {
  name: "Kenji",
  role: "Vulnerable human survivor",
  species: "Human",
  gender: "Male",
  appearance: "Young man (20-25 years old) with pale skin and dark hair matted against his forehead. One arm is scraped and bleeding. He wears worn winter clothing and carries a metal pendant shaped like a curved fang—the same symbol associated with Raaz. His face shows exhaustion and soot from the fire.",
  personality: "Kenji is empathetic, determined, and deeply connected to the natural world despite being human. He has a bond with Raaz that transcends the typical predator-prey dynamic. Though physically weak, his emotional strength and loyalty shine through in moments of crisis.",
  currentState: "Collapsed and unconscious in a stone house near a dying fireplace. He is injured from falling debris and weakened by exposure. A photograph nearby shows him as a child with a young Raaz, revealing their shared history.",
  narrativeRole: "Kenji acts as a mirror of Raaz's humanity, breaking Kari's binary view of predator = threat. His presence softens Raaz's image and creates a layered moral dilemma. If saved, he reunites with Raaz and can provide shortcuts in Quest 2. If abandoned, he appears as a hallucination, representing Kari's guilt.",
  imageUrl: "/projects/characters/kenji.jpg" // Placeholder path
};

// Quest 2 Characters
export const tala: QuestCharacter = {
  name: "Tala",
  role: "Pragmatic opportunist",
  species: "Black Raven (Corvus corax)",
  gender: "Female",
  appearance: "Sleek black feathers that shine under filtered light. Her eyes are sharp and intelligent, constantly scanning for threats and opportunities. She moves with quick, nervous energy, her beak clicking when agitated. Her nest is precariously built in a crevice on a high ledge.",
  personality: "Tala is sarcastic, quick-witted, and deeply pragmatic. She speaks rapidly in a high-pitched tone, often laced with dark humor. While self-interested, she understands the value of alliances and isn't above bargaining for mutual benefit. Motherhood has made her more desperate but no less calculating.",
  currentState: "Perched on a ledge in the gorge, desperately trying to protect her nest with two eggs that sway dangerously close to the edge. The spores and wind threaten to destroy her future offspring. She needs help but frames it as a transactional opportunity.",
  narrativeRole: "Tala represents short-term action and intelligence-based survival. If Kari helps her, she provides aerial reconnaissance and guides Kari through the safest paths in the gorge. Her sharp eyes can spot dangers hidden by the spores. She embodies the theme of unexpected alliances and maternal instinct overriding self-preservation.",
  imageUrl: "/projects/characters/tala.jpg" // Placeholder path
};

export const arlen: QuestCharacter = {
  name: "Arlen",
  role: "Community builder",
  species: "North American Beaver (Castor canadensis)",
  gender: "Male",
  appearance: "Robust build with dark brown fur flecked with bits of moss. His incisors have small chips from years of gnawing wood. A scar runs across his left cheek. He carries a thick branch as a tool, strapped to his back with a vine. His tail shows a dark pattern—the first signs of infection from the Stain.",
  personality: "Patient and obstinate, Arlen believes in the strength of collective work and protecting the territory. He feels deep responsibility for his family and the aquatic community. He distrusts Kari initially but respects those who strive to help others. His pragmatism sometimes clashes with his stubbornness.",
  currentState: "Trapped under fallen logs at the river's edge in the gorge. He was attempting to build an improvised dam to divert water and disperse the hallucinogenic spores, thus slowing the Stain's spread. The spores and his effort have weakened him, and dark marks are beginning to appear on his tail.",
  narrativeRole: "Arlen represents long-term action and collective solutions. If Kari helps him, he can redirect the river water to disperse the spores and open a safe path. His involvement shows how collective planning is more effective against corruption than individual efforts. If abandoned, the path fills with dangers and his possible infection becomes a later threat.",
  imageUrl: "/projects/characters/arlen.jpg" // Placeholder path
};

// Character groups by quest
export const quest1Characters = [raaz, kenji];
export const quest2Characters = [tala, arlen];
