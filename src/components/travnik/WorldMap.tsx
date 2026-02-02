import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, HelpCircle, AlertTriangle, Skull, Building2, Mountain } from "lucide-react";

interface MapLocation {
  id: string;
  name: string;
  x: number; // percentage position
  y: number;
  type: "city" | "mystery" | "danger" | "shelter" | "landmark";
  description: string;
  hint?: string; // Mystery hint for unexplored areas
  isRevealed: boolean;
  linkedLoreId?: string;
}

const mapLocations: MapLocation[] = [
  {
    id: "travnik",
    name: "Travnik",
    x: 50,
    y: 45,
    type: "city",
    description: "The central command center where the Engineers established their base. The crashed ship and main laboratories are located here.",
    isRevealed: true,
    linkedLoreId: "the-fall-detailed",
  },
  {
    id: "dinaric-alps",
    name: "Dinaric Alps",
    x: 35,
    y: 30,
    type: "shelter",
    description: "Mountain ranges that protected civilians during The Fall. Hidden caves contain cryogenic chambers with sleeping humans.",
    isRevealed: true,
  },
  {
    id: "compound-veins",
    name: "Compound-T Deposits",
    x: 65,
    y: 55,
    type: "danger",
    description: "Rich veins of Compound-T guarded by Hooman Conclaves. Extremely dangerous but essential for survival.",
    isRevealed: true,
    linkedLoreId: "compuesto-t-lore",
  },
  {
    id: "proselyte-temple",
    name: "Temple of Ascension",
    x: 25,
    y: 60,
    type: "landmark",
    description: "The central temple of the Proselytes, led by Oct-Vi-O. Underground agricultural bases extend beneath.",
    isRevealed: true,
  },
  {
    id: "hooman-conclave",
    name: "The Great Conclave",
    x: 75,
    y: 40,
    type: "danger",
    description: "Largest known Hooman gathering. The Risen dwell here, protecting hibernation cocoons. Only coordinated teams dare enter.",
    isRevealed: true,
  },
  {
    id: "oceania",
    name: "Oceania Sector",
    x: 90,
    y: 75,
    type: "mystery",
    description: "???",
    hint: "The bombs fell on OTHER sectors... What happened to General Davis and his forces?",
    isRevealed: false,
  },
  {
    id: "asia-sector",
    name: "Asia Sector",
    x: 80,
    y: 25,
    type: "mystery",
    description: "???",
    hint: "The pathogen mutated differently based on climate... What creatures emerged in the East?",
    isRevealed: false,
  },
  {
    id: "americas",
    name: "Americas Sector",
    x: 10,
    y: 50,
    type: "mystery",
    description: "???",
    hint: "Did anyone survive in the Western hemisphere? Radio signals have been detected...",
    isRevealed: false,
  },
  {
    id: "iss-orbit",
    name: "ISS - Low Orbit",
    x: 50,
    y: 8,
    type: "landmark",
    description: "The International Space Station, now home to ESAS command. Resources are running critically low, forcing Operation Return.",
    isRevealed: true,
    linkedLoreId: "wild-awakening-lore",
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

  return (
    <div className="relative w-full rounded-xl border border-gold/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Map Header */}
      <div className="p-4 border-b border-gold/10 flex items-center justify-between">
        <div>
          <h3 className="font-display text-xl font-semibold text-gold">World of Travnik</h3>
          <p className="text-xs text-muted-foreground">Click locations to explore. Some areas remain shrouded in mystery...</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="border-emerald-500/50 text-emerald-400 text-xs">
            Known: {mapLocations.filter(l => l.isRevealed).length}
          </Badge>
          <Badge variant="outline" className="border-purple-500/50 text-purple-400 text-xs animate-pulse">
            Unknown: {mapLocations.filter(l => !l.isRevealed).length}
          </Badge>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative aspect-[16/9] min-h-[300px]">
        {/* Grid overlay for atmosphere */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Radiation zones (decorative) */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-red-500/10 blur-2xl" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl" />
        
        {/* Unknown region fog */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-purple-900/40 to-transparent" />
        <div className="absolute left-0 top-0 w-1/6 h-full bg-gradient-to-r from-purple-900/30 to-transparent" />

        {/* Location markers */}
        {mapLocations.map((location) => (
          <button
            key={location.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group z-10
              ${hoveredLocation === location.id ? 'scale-125' : 'scale-100'}
            `}
            style={{ left: `${location.x}%`, top: `${location.y}%` }}
            onClick={() => setSelectedLocation(location)}
            onMouseEnter={() => setHoveredLocation(location.id)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {/* Marker */}
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center
              ${typeColors[location.type]}
              border-2 ${typeBorderColors[location.type]}
              shadow-lg cursor-pointer
              ${!location.isRevealed ? 'opacity-70' : ''}
            `}>
              {typeIcons[location.type]}
            </div>
            
            {/* Hover label */}
            <div className={`
              absolute left-1/2 -translate-x-1/2 -top-8 whitespace-nowrap
              px-2 py-1 rounded bg-black/90 text-xs font-medium
              transition-opacity duration-200
              ${hoveredLocation === location.id ? 'opacity-100' : 'opacity-0'}
              ${!location.isRevealed ? 'text-purple-300' : 'text-gold'}
            `}>
              {location.isRevealed ? location.name : "???"}
            </div>

            {/* Pulse effect for mysteries */}
            {!location.isRevealed && (
              <div className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping" />
            )}
          </button>
        ))}

        {/* Connection lines (simplified) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(212, 175, 55, 0.3)" />
              <stop offset="100%" stopColor="rgba(212, 175, 55, 0.1)" />
            </linearGradient>
          </defs>
          {/* Travnik to Dinaric Alps */}
          <line x1="50%" y1="45%" x2="35%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />
          {/* Travnik to Compound deposits */}
          <line x1="50%" y1="45%" x2="65%" y2="55%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />
          {/* Travnik to ISS */}
          <line x1="50%" y1="45%" x2="50%" y2="8%" stroke="rgba(0, 200, 255, 0.2)" strokeWidth="1" strokeDasharray="8 4" />
        </svg>
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
