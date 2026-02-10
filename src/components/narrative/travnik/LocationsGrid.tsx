import { useState } from "react";
import { Location } from "@/data/travnikLore";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";

interface LocationsGridProps {
  locations: Location[];
}

const typeColors = {
  wasteland: "from-amber-500/20 to-orange-500/20 border-amber-500/50",
  urban: "from-slate-500/20 to-gray-500/20 border-slate-500/50",
  swamp: "from-green-500/20 to-emerald-500/20 border-green-500/50",
  cave: "from-purple-500/20 to-indigo-500/20 border-purple-500/50",
  oasis: "from-cyan-500/20 to-blue-500/20 border-cyan-500/50",
  frozen: "from-blue-500/20 to-cyan-500/20 border-blue-500/50",
};

const typeBadges = {
  wasteland: "bg-amber-500/20 text-amber-200 border-amber-500/50",
  urban: "bg-slate-500/20 text-slate-200 border-slate-500/50",
  swamp: "bg-green-500/20 text-green-200 border-green-500/50",
  cave: "bg-purple-500/20 text-purple-200 border-purple-500/50",
  oasis: "bg-cyan-500/20 text-cyan-200 border-cyan-500/50",
  frozen: "bg-blue-500/20 text-blue-200 border-blue-500/50",
};

function LocationCard({ location }: { location: Location }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        className={`bg-gradient-to-br ${typeColors[location.type]} border-2 backdrop-blur-sm hover:scale-[1.01] transition-all duration-300 h-full flex flex-col`}
      >
        <CardHeader>
          <div className="flex items-start gap-3 mb-2">
            <div className="text-4xl flex-shrink-0">{location.icon}</div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-white">{location.name}</h3>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <p className="text-sm text-white/80 mb-4 line-clamp-3 flex-1">
            {location.description}
          </p>
          <Button
            onClick={() => setIsOpen(true)}
            className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 group"
          >
            Explore Location
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border-2 border-white/20">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="text-5xl">{location.icon}</div>
              <div>
                <DialogTitle className="text-2xl font-bold text-white">
                  {location.name}
                </DialogTitle>
                <span
                  className={`inline-block text-xs px-2 py-1 rounded border mt-2 uppercase tracking-wider ${
                    typeBadges[location.type]
                  }`}
                >
                  {location.type}
                </span>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            <div>
              <p className="text-white/90 leading-relaxed">{location.description}</p>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-4">
              <div>
                <p className="text-xs font-semibold text-gold uppercase tracking-wide mb-2">
                  Environment
                </p>
                <p className="text-sm text-white/70">{location.environment}</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-red-400 uppercase tracking-wide mb-2">
                  Threats
                </p>
                <p className="text-sm text-white/70">{location.threats}</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-2">
                  Resources
                </p>
                <p className="text-sm text-white/70">{location.resources}</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-purple-400 uppercase tracking-wide mb-2">
                  Lore Elements
                </p>
                <p className="text-sm text-white/70">{location.loreElements}</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                  Strategic Value
                </p>
                <p className="text-sm text-white/70">{location.strategicValue}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function LocationsGrid({ locations }: LocationsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
}
