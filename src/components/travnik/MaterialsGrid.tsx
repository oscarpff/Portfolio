import { Material } from "@/data/travnikLore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MaterialCardProps {
  material: Material;
}

export function MaterialCard({ material }: MaterialCardProps) {
  const isElement = material.type === "biomolecule";
  const borderColor = isElement ? "border-cyan-500/30" : "border-amber-500/30";
  const bgColor = isElement ? "bg-cyan-500/5" : "bg-amber-500/5";
  const badgeColor = isElement ? "bg-cyan-500/20 text-cyan-300" : "bg-amber-500/20 text-amber-300";

  return (
    <div className={`rounded-lg border ${borderColor} ${bgColor} p-6 space-y-4`}>
      <div>
        <div className="flex items-baseline gap-2">
          <h3 className="font-display text-xl font-bold text-gold">
            {material.name}
          </h3>
          <span className={`text-xs px-2 py-1 rounded ${badgeColor}`}>
            {material.type === "biomolecule" ? "Biomolecule" : "Mineral"}
          </span>
        </div>
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
}

export default function MaterialsGrid({ materials }: MaterialsGridProps) {
  return (
    <Tabs defaultValue="elemento-444" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="elemento-444">Element 444</TabsTrigger>
        <TabsTrigger value="compuesto-t">Compound-T</TabsTrigger>
      </TabsList>

      {materials.map((material) => (
        <TabsContent key={material.id} value={material.id} className="mt-6">
          <MaterialCard material={material} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
