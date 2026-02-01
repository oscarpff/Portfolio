import { useState } from "react";
import { Material, LoreSection } from "@/data/travnikLore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface MaterialCardProps {
  material: Material;
  onReadLore?: () => void;
  hasLore?: boolean;
}

export function MaterialCard({ material, onReadLore, hasLore = false }: MaterialCardProps) {
  const isElement = material.type === "biomolecule";
  const borderColor = isElement ? "border-emerald-500/30" : "border-amber-500/30";
  const bgColor = isElement ? "bg-emerald-500/5" : "bg-amber-500/5";
  const badgeColor = isElement ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300";

  return (
    <div className={`rounded-lg border ${borderColor} ${bgColor} p-6 space-y-4`}>
      <div>
        <div className="flex items-baseline gap-2 mb-2">
          <h3 className="font-display text-xl font-bold text-gold">
            {material.name}
          </h3>
          <span className={`text-xs px-2 py-1 rounded ${badgeColor}`}>
            {material.type === "biomolecule" ? "Biomolecule" : "Mineral"}
          </span>
        </div>
        {hasLore && (
          <Button
            onClick={onReadLore}
            size="sm"
            variant="ghost"
            className="text-cyan-400 hover:text-white hover:bg-cyan-500/20 gap-2 mb-3 -ml-2"
          >
            <BookOpen className="w-4 h-4" />
          </Button>
        )}
      </div>

      <div className="space-y-3 text-sm">
        <div>
          <p className="font-semibold text-gold mb-1">Origin</p>
          <p className="text-muted-foreground">{material.origin}</p>
        </div>

        <div>
          <p className="font-semibold text-gold mb-1">Obtention</p>
          <p className="text-muted-foreground">{material.obtention}</p>
        </div>

        <div>
          <p className="font-semibold text-gold mb-1">Properties</p>
          <p className="text-muted-foreground">{material.properties}</p>
        </div>

        <div>
          <p className="font-semibold text-gold mb-1">Functionality</p>
          <p className="text-muted-foreground">{material.functionality}</p>
        </div>

        <div>
          <p className="font-semibold text-gold mb-1">Impact</p>
          <p className="text-muted-foreground">{material.impact}</p>
        </div>

        <div>
          <p className="font-semibold text-gold mb-1">Ethics</p>
          <p className="text-muted-foreground">{material.ethics}</p>
        </div>

        <div>
          <p className="font-semibold text-gold mb-1">Space Exploration</p>
          <p className="text-muted-foreground">{material.exploration}</p>
        </div>
      </div>
    </div>
  );
}

interface MaterialsGridProps {
  materials: Material[];
  loreSections?: LoreSection[];
}

export default function MaterialsGrid({ materials, loreSections = [] }: MaterialsGridProps) {
  const [showLoreModal, setShowLoreModal] = useState(false);
  const [selectedLore, setSelectedLore] = useState<LoreSection | null>(null);

  const handleReadLore = (materialId: string) => {
    const lore = loreSections.find(l => l.id.includes(materialId));
    if (lore) {
      setSelectedLore(lore);
      setShowLoreModal(true);
    }
  };

  const getMaterialLore = (materialId: string) => {
    return loreSections.find(l => l.id.includes(materialId));
  };

  return (
    <>
      <Tabs defaultValue="elemento-444" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="elemento-444">Element 444</TabsTrigger>
          <TabsTrigger value="compuesto-t">Compound-T</TabsTrigger>
        </TabsList>

        {materials.map((material) => (
          <TabsContent key={material.id} value={material.id} className="mt-6">
            <MaterialCard 
              material={material} 
              onReadLore={() => handleReadLore(material.id)}
              hasLore={!!getMaterialLore(material.id)}
            />
          </TabsContent>
        ))}
      </Tabs>

      {/* Material Lore Modal */}
      {selectedLore && (
        <Dialog open={showLoreModal} onOpenChange={setShowLoreModal}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border-2 border-emerald-500/30">
            <DialogHeader>
              <div className="flex items-center gap-3 border-b border-emerald-500/20 pb-4">
                <div className="text-5xl">{selectedLore.icon}</div>
                <div>
                  <DialogTitle className="text-3xl font-bold text-white">
                    {selectedLore.title}
                  </DialogTitle>
                  <Badge className="mt-2 bg-emerald-500/20 text-emerald-200 border-emerald-500/50">
                    Resource Lore
                  </Badge>
                </div>
              </div>
            </DialogHeader>
            <div className="prose prose-invert prose-sm max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ ...props }) => (
                    <h2
                      className="text-2xl font-bold text-white mt-6 mb-3"
                      {...props}
                    />
                  ),
                  h3: ({ ...props }) => (
                    <h3
                      className="text-xl font-bold text-white/90 mt-4 mb-2"
                      {...props}
                    />
                  ),
                  p: ({ ...props }) => (
                    <p className="text-white/80 mb-4 leading-relaxed" {...props} />
                  ),
                  ul: ({ ...props }) => (
                    <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
                  ),
                  li: ({ ...props }) => (
                    <li className="text-white/80" {...props} />
                  ),
                  strong: ({ ...props }) => (
                    <strong className="text-white font-bold" {...props} />
                  ),
                }}
              >
                {selectedLore.fullContent}
              </ReactMarkdown>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
