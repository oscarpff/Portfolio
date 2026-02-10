import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { LoreSection, Faction, Character, Material, Enemy, GlossaryTerm } from "@/data/travnikLore";

// Types for exploration system
export type ExplorerItemType = "faction" | "character" | "material" | "enemy" | "lore" | "glossary" | "location";

export interface ExplorerItem {
  id: string;
  type: ExplorerItemType;
  name: string;
  icon?: string;
}

export interface BreadcrumbEntry extends ExplorerItem {
  timestamp: number;
}

interface ExplorerContextType {
  // Breadcrumb trail
  breadcrumbs: BreadcrumbEntry[];
  pushBreadcrumb: (item: ExplorerItem) => void;
  navigateTo: (index: number) => void;
  clearBreadcrumbs: () => void;
  
  // Current selection
  currentItem: ExplorerItem | null;
  setCurrentItem: (item: ExplorerItem | null) => void;
  
  // Modal state
  isDetailOpen: boolean;
  openDetail: (item: ExplorerItem) => void;
  closeDetail: () => void;
  
  // Data lookups
  findFaction: (id: string) => Faction | undefined;
  findCharacter: (id: string) => Character | undefined;
  findMaterial: (id: string) => Material | undefined;
  findEnemy: (id: string) => Enemy | undefined;
  findLore: (id: string) => LoreSection | undefined;
  findGlossary: (term: string) => GlossaryTerm | undefined;
  
  // Relationships
  getRelatedItems: (item: ExplorerItem) => ExplorerItem[];
}

const ExplorerContext = createContext<ExplorerContextType | null>(null);

interface ExplorerProviderProps {
  children: ReactNode;
  factions: Faction[];
  characters: Character[];
  materials: Material[];
  enemies: Enemy[];
  loreSections: LoreSection[];
  glossary: GlossaryTerm[];
}

export function ExplorerProvider({
  children,
  factions,
  characters,
  materials,
  enemies,
  loreSections,
  glossary,
}: ExplorerProviderProps) {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbEntry[]>([]);
  const [currentItem, setCurrentItem] = useState<ExplorerItem | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Lookup functions
  const findFaction = useCallback((id: string) => factions.find(f => f.id === id), [factions]);
  const findCharacter = useCallback((id: string) => characters.find(c => c.id === id), [characters]);
  const findMaterial = useCallback((id: string) => materials.find(m => m.id === id), [materials]);
  const findEnemy = useCallback((id: string) => enemies.find(e => e.id === id), [enemies]);
  const findLore = useCallback((id: string) => loreSections.find(l => l.id === id), [loreSections]);
  const findGlossary = useCallback((term: string) => 
    glossary.find(g => g.term.toLowerCase() === term.toLowerCase()), [glossary]);

  // Breadcrumb management
  const pushBreadcrumb = useCallback((item: ExplorerItem) => {
    setBreadcrumbs(prev => {
      // Don't add duplicates consecutively
      if (prev.length > 0 && prev[prev.length - 1].id === item.id) {
        return prev;
      }
      // Limit to last 10 items
      const newBreadcrumbs = [...prev, { ...item, timestamp: Date.now() }];
      return newBreadcrumbs.slice(-10);
    });
  }, []);

  const navigateTo = useCallback((index: number) => {
    setBreadcrumbs(prev => prev.slice(0, index + 1));
    const target = breadcrumbs[index];
    if (target) {
      setCurrentItem(target);
    }
  }, [breadcrumbs]);

  const clearBreadcrumbs = useCallback(() => {
    setBreadcrumbs([]);
  }, []);

  // Detail modal
  const openDetail = useCallback((item: ExplorerItem) => {
    setCurrentItem(item);
    pushBreadcrumb(item);
    setIsDetailOpen(true);
  }, [pushBreadcrumb]);

  const closeDetail = useCallback(() => {
    setIsDetailOpen(false);
  }, []);

  // Get related items based on current item
  const getRelatedItems = useCallback((item: ExplorerItem): ExplorerItem[] => {
    const related: ExplorerItem[] = [];

    if (item.type === "faction") {
      // Find characters in this faction
      const factionChars = characters.filter(c => {
        const factionMap: Record<string, string> = {
          esas: "ESAS",
          ingenieros: "INGENIEROS",
          proslitos: "PROSÉLITOS",
        };
        return c.faction === factionMap[item.id];
      });
      factionChars.forEach(c => {
        related.push({ id: c.id, type: "character", name: c.name, icon: "👤" });
      });
      
      // Find related lore
      const factionLore = loreSections.filter(l => l.id.includes(item.id) || l.category === "factions");
      factionLore.forEach(l => {
        related.push({ id: l.id, type: "lore", name: l.title, icon: l.icon });
      });
    }

    if (item.type === "character") {
      const char = findCharacter(item.id);
      if (char) {
        // Find faction
        const factionId = char.faction === "ESAS" ? "esas" : 
                          char.faction === "INGENIEROS" ? "ingenieros" : "proslitos";
        const faction = findFaction(factionId);
        if (faction) {
          related.push({ id: faction.id, type: "faction", name: faction.shortName, icon: faction.icon });
        }
        
        // Materials are relevant to all characters
        materials.forEach(m => {
          related.push({ id: m.id, type: "material", name: m.name, icon: m.type === "biomolecule" ? "🧬" : "⚗️" });
        });
      }
    }

    if (item.type === "material") {
      // Find related lore
      const materialLore = loreSections.filter(l => l.category === "resources");
      materialLore.forEach(l => {
        related.push({ id: l.id, type: "lore", name: l.title, icon: l.icon });
      });
      
      // All factions use materials
      factions.forEach(f => {
        related.push({ id: f.id, type: "faction", name: f.shortName, icon: f.icon });
      });
    }

    if (item.type === "enemy") {
      // Enemies relate to materials and factions
      materials.forEach(m => {
        related.push({ id: m.id, type: "material", name: m.name, icon: m.type === "biomolecule" ? "🧬" : "⚗️" });
      });
    }

    return related.slice(0, 6); // Limit to 6 related items
  }, [characters, factions, loreSections, materials, findCharacter, findFaction]);

  return (
    <ExplorerContext.Provider
      value={{
        breadcrumbs,
        pushBreadcrumb,
        navigateTo,
        clearBreadcrumbs,
        currentItem,
        setCurrentItem,
        isDetailOpen,
        openDetail,
        closeDetail,
        findFaction,
        findCharacter,
        findMaterial,
        findEnemy,
        findLore,
        findGlossary,
        getRelatedItems,
      }}
    >
      {children}
    </ExplorerContext.Provider>
  );
}

export function useExplorer() {
  const context = useContext(ExplorerContext);
  if (!context) {
    throw new Error("useExplorer must be used within an ExplorerProvider");
  }
  return context;
}
