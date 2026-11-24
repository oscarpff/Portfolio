import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, HelpCircle, AlertTriangle, Skull, Building2, Mountain, ZoomOut } from "lucide-react";
import { getAssetUrl } from "@/lib/asset-utils";

interface MapLocation {
  id: string;
  name: string;
  x: number; // percentage position
  y: number;
  type: "city" | "mystery" | "danger" | "shelter" | "landmark";
  description: string;
  hint?: string;
  isRevealed: boolean;
  linkedLoreId?: string;
  region: "europe" | "asia" | "americas" | "africa";
}

const mapLocations: MapLocation[] = [
  {
    id: "travnik",
    name: "Travnik",
    x: 48,
    y: 45,
    type: "city",
    description: "The historic city center of Travnik, Bosnia. Where the Engineers established their base. The crashed ship and main laboratories are located here.",
    isRevealed: true,
    linkedLoreId: "the-fall-detailed",
    region: "europe",
  },
  {
    id: "dinaric-alps",
    name: "Vlašić Mountains",
    x: 52,
    y: 28,
    type: "shelter",
    description: "The Dinaric Alps mountain range to the north. Hidden caves contain cryogenic chambers with sleeping humans. Ancient structures buried in stone.",
    isRevealed: true,
    region: "europe",
  },
  {
    id: "compound-veins",
    name: "Compound-T Deposits",
    x: 68,
    y: 45,
    type: "danger",
    description: "Rich veins of radioactive minerals in the eastern plateaus. Guarded by Hooman Conclaves. Extremely dangerous but essential for survival.",
    isRevealed: true,
    linkedLoreId: "compuesto-t-lore",
    region: "europe",
  },
  {
    id: "proselyte-temple",
    name: "Temple of Ascension",
    x: 38,
    y: 52,
    type: "landmark",
    description: "The central temple of the Proselytes, hidden in the western valleys. Led by Oct-Vi-O. Underground agricultural bases extend beneath fertile soil.",
    isRevealed: true,
    region: "europe",
  },
  {
    id: "hooman-conclave",
    name: "The Great Conclave",
    x: 65,
    y: 35,
    type: "danger",
    description: "Largest known Hooman gathering in the eastern caverns. The Risen dwell here, protecting hibernation cocoons. Only coordinated teams dare enter.",
    isRevealed: true,
    region: "europe",
  },
  {
    id: "bosna-river",
    name: "Bosna River Valley",
    x: 48,
    y: 60,
    type: "shelter",
    description: "The river valley that runs through the region. Life-giving waters and natural defensive positions. Rich fishing grounds.",
    isRevealed: true,
    region: "europe",
  },
  {
    id: "issa-orbit",
    name: "ISS - Low Orbit",
    x: 78,
    y: 20,
    type: "landmark",
    description: "The International Space Station, now home to ESAS command. Resources are running critically low, forcing Operation Return.",
    isRevealed: true,
    linkedLoreId: "wild-awakening-lore",
    region: "europe",
  },
];

const continentRegions = [
  {
    id: "europe",
    name: "Travnik",
    x: 52,
    y: 36,
    type: "city" as const,
    description: "Travnik region (Bosnia)",
    isRevealed: true,
  },
  {
    id: "asia",
    name: "Asia Sector",
    x: 72,
    y: 38,
    type: "mystery" as const,
    description: "???",
    hint: "The pathogen mutated differently based on climate... What creatures emerged in the East?",
    isRevealed: false,
  },
  {
    id: "americas",
    name: "Americas Sector",
    x: 20,
    y: 50,
    type: "mystery" as const,
    description: "???",
    hint: "Did anyone survive in the Western hemisphere? Radio signals have been detected...",
    isRevealed: false,
  },
  {
    id: "africa",
    name: "Africa Sector",
    x: 50,
    y: 65,
    type: "mystery" as const,
    description: "???",
    hint: "Unknown state of the African continent post-fall...",
    isRevealed: false,
  },
  {
    id: "oceania",
    name: "Oceania Sector",
    x: 85,
    y: 70,
    type: "mystery" as const,
    description: "???",
    hint: "The bombs fell on OTHER sectors... What happened to General Davis and his forces?",
    isRevealed: false,
  },
];

const typeIcons: Record<string, React.ReactNode> = {
  city: <Building2 className="w-4 h-4" />,
  mystery: <HelpCircle className="w-4 h-4" />,
  danger: <Skull className="w-4 h-4" />,
  shelter: <Mountain className="w-4 h-4" />,
  landmark: <MapPin className="w-4 h-4" />,
};

const typeColors: Record<string, string> = {
  city: "bg-gold text-black",
  mystery: "bg-purple-500/80 text-white animate-pulse",
  danger: "bg-red-500/80 text-white",
  shelter: "bg-emerald-500/80 text-white",
  landmark: "bg-cyan-500/80 text-white",
};

const typeBorderColors: Record<string, string> = {
  city: "border-gold",
  mystery: "border-purple-500",
  danger: "border-red-500",
  shelter: "border-emerald-500",
  landmark: "border-cyan-500",
};

export default function WorldMap() {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [zoomedRegion, setZoomedRegion] = useState<string | null>(null);
  const [hoveredContinent, setHoveredContinent] = useState<string | null>(null);

  const handleLocationClick = (location: MapLocation) => {
    setSelectedLocation(location);
  };

  const handleContinentClick = (continentId: string) => {
    if (continentId === "europe") {
      setZoomedRegion("europe");
    }
  };

  const handleZoomOut = () => {
    setZoomedRegion(null);
  };

  const currentLocations = zoomedRegion === "europe" 
    ? mapLocations 
    : [];

  return (
    <div className="relative w-full rounded-xl border border-gold/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Map Header */}
      <div className="p-4 border-b border-gold/10 flex items-center justify-between">
        <div>
          <h3 className="font-display text-xl font-semibold text-gold">
            {zoomedRegion === "europe" ? "Travnik Region - Bosnia" : "World Map"}
          </h3>
          <p className="text-xs text-muted-foreground">
            {zoomedRegion === "europe" 
              ? "Click locations to explore regional details"
              : "Click continents to explore. Unknown regions await discovery..."}
          </p>
        </div>
        {zoomedRegion === "europe" && (
          <Button
            onClick={handleZoomOut}
            size="sm"
            variant="outline"
            className="border-gold/30 text-gold hover:bg-gold/10"
          >
            <ZoomOut className="w-4 h-4 mr-2" />
            Back to World
          </Button>
        )}
      </div>

      {/* Map Container */}
      <div className="relative aspect-[16/9] min-h-[400px] bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-in-out"
          style={{
            transform: zoomedRegion === "europe" ? "scale(1.35)" : "scale(1)",
            transformOrigin: "55% 40%",
          }}
        >
          {/* World Map Background */}
          <img
            src={getAssetUrl(zoomedRegion === "europe" ? "/projects/Travnik/bosnia.png" : "/projects/Travnik/mapamundi.png")}
            alt={zoomedRegion === "europe" ? "Bosnia Map" : "World Continents Map"}
            className="absolute inset-0 w-full h-full object-contain"
            style={{ filter: 'invert(1) brightness(0.8)', opacity: 0.6 }}
          />

          {/* Overlay for atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-900/30 pointer-events-none" />

          {/* Continent/Region Markers (World View) */}
          {!zoomedRegion && continentRegions.map((region) => (
            <button
              key={region.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group z-10
                ${hoveredContinent === region.id ? 'scale-125' : 'scale-100'}
              `}
              style={{ left: `${region.x}%`, top: `${region.y}%` }}
              onClick={() => handleContinentClick(region.id)}
              onMouseEnter={() => setHoveredContinent(region.id)}
              onMouseLeave={() => setHoveredContinent(null)}
            >
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${typeColors[region.type]}
                border-2 ${typeBorderColors[region.type]}
                shadow-lg cursor-pointer
                ${!region.isRevealed ? 'opacity-70' : ''}
              `}>
                {typeIcons[region.type]}
              </div>
              
              <div className={`
                absolute left-1/2 -translate-x-1/2 -top-8 whitespace-nowrap
                px-2 py-1 rounded bg-black/90 text-xs font-medium
                transition-opacity duration-200 pointer-events-none
                ${hoveredContinent === region.id ? 'opacity-100' : 'opacity-0'}
                ${!region.isRevealed ? 'text-purple-300' : 'text-gold'}
              `}>
                {region.isRevealed ? region.name : "???"}
              </div>

              {!region.isRevealed && region.hint && (
                <div className={`
                  absolute left-1/2 -translate-x-1/2 top-12 w-56
                  px-3 py-2 rounded bg-black/90 text-xs text-purple-200
                  transition-opacity duration-200 pointer-events-none
                  ${hoveredContinent === region.id ? 'opacity-100' : 'opacity-0'}
                `}>
                  {region.hint}
                </div>
              )}

              {!region.isRevealed && (
                <div className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping" />
              )}
            </button>
          ))}

          {/* Local Markers (Travnik Region View) */}
          {zoomedRegion === "europe" && currentLocations.map((location) => (
            <button
              key={location.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group z-10
                ${hoveredLocation === location.id ? 'scale-125' : 'scale-100'}
              `}
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
              onClick={() => handleLocationClick(location)}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center
                ${typeColors[location.type]}
                border-2 ${typeBorderColors[location.type]}
                shadow-lg cursor-pointer
                ${!location.isRevealed ? 'opacity-70' : ''}
              `}>
                {typeIcons[location.type]}
              </div>
              
              <div className={`
                absolute left-1/2 -translate-x-1/2 -top-8 whitespace-nowrap
                px-2 py-1 rounded bg-black/90 text-xs font-medium
                transition-opacity duration-200 pointer-events-none
                ${hoveredLocation === location.id ? 'opacity-100' : 'opacity-0'}
                ${!location.isRevealed ? 'text-purple-300' : 'text-gold'}
              `}>
                {location.isRevealed ? location.name : "???"}
              </div>

              {!location.isRevealed && (
                <div className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="p-4 border-t border-gold/10 flex flex-wrap gap-3">
        {Object.entries(typeColors).map(([type, color]) => (
          <div key={type} className="flex items-center gap-1.5 text-xs">
            <div className={`w-3 h-3 rounded-full ${color}`} />
            <span className="text-muted-foreground capitalize">{type}</span>
          </div>
        ))}
      </div>

      {/* Location Detail Modal */}
      <Dialog open={!!selectedLocation} onOpenChange={() => setSelectedLocation(null)}>
        <DialogContent className="max-w-lg bg-gradient-to-br from-slate-900 to-black border border-gold/30">
          {selectedLocation && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${typeColors[selectedLocation.type]}`}>
                    {typeIcons[selectedLocation.type]}
                  </div>
                  <div>
                    <DialogTitle className={`text-xl font-display ${selectedLocation.isRevealed ? 'text-gold' : 'text-purple-300'}`}>
                      {selectedLocation.isRevealed ? selectedLocation.name : "Unknown Region"}
                    </DialogTitle>
                    <Badge variant="outline" className={`mt-1 ${typeBorderColors[selectedLocation.type]} text-xs capitalize`}>
                      {selectedLocation.type}
                    </Badge>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-4 mt-4">
                {selectedLocation.isRevealed ? (
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedLocation.description}
                  </p>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
                      <AlertTriangle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-purple-300 mb-1">Area Unknown</p>
                        <p className="text-xs text-purple-200/70">
                          This region has not yet been explored. What secrets might it hold?
                        </p>
                      </div>
                    </div>
                    
                    {selectedLocation.hint && (
                      <div className="p-3 rounded-lg bg-gold/5 border border-gold/20">
                        <p className="text-sm text-gold/80 italic">
                          "{selectedLocation.hint}"
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
