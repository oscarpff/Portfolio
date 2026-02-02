import { useState } from "react";
import { Enemy } from "@/data/travnikLore";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

interface EnemyCardProps {
  enemy: Enemy;
  onExplore?: (enemy: Enemy) => void;
}

export function EnemyCard({ enemy, onExplore }: EnemyCardProps) {
  const stageColor = enemy.stage === "early" ? "border-orange-500/30" : "border-red-500/30";
  const stageBg = enemy.stage === "early" ? "bg-orange-500/5" : "bg-red-500/5";

  const handleExplore = () => {
    if (onExplore) {
      onExplore(enemy);
    }
  };

  return (
    <div className={`rounded-lg border ${stageColor} ${stageBg} overflow-hidden hover:border-opacity-60 transition-all cursor-pointer group`} onClick={handleExplore}>
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="h-48 w-full md:h-auto md:w-48 flex-shrink-0 flex items-center justify-center bg-muted/20 group-hover:bg-muted/40 transition-colors">
          <img
            src={enemy.imageUrl}
            alt={enemy.name}
            className="h-full w-full object-contain"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/300x300?text=" + enemy.name;
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 space-y-3">
          <div>
            <div className="flex items-baseline gap-2">
              <h3 className="font-display text-xl font-bold text-gold group-hover:text-gold/80 transition-colors">
                {enemy.name}
              </h3>
              <span className="text-xs px-2 py-1 rounded bg-white/10 text-muted-foreground">
                {enemy.stage === "early" ? "Early Stage" : "Advanced Stage"}
              </span>
              <ChevronRight className="w-4 h-4 text-gold/40 group-hover:text-gold/70 ml-auto transition-colors" />
            </div>
          </div>

          <p className="text-sm text-muted-foreground">{enemy.description}</p>

          <div>
            <p className="text-xs font-semibold text-gold mb-2">Characteristics</p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              {enemy.characteristics.map((char, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>{char}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-gold mb-1">Behavior</p>
            <p className="text-xs text-muted-foreground">{enemy.behaviors}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface EnemiesGridProps {
  enemies: Enemy[];
}

export default function EnemiesGrid({ enemies }: EnemiesGridProps) {
  const [selectedEnemy, setSelectedEnemy] = useState<Enemy | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const handleExplore = (enemy: Enemy) => {
    setSelectedEnemy(enemy);
    setShowDetailModal(true);
  };

  return (
    <>
      <div className="space-y-6">
        {enemies.map((enemy) => (
          <EnemyCard key={enemy.id} enemy={enemy} onExplore={handleExplore} />
        ))}
      </div>

      {/* Enemy Detail Modal */}
      {selectedEnemy && (
        <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
          <DialogContent className="max-w-2xl bg-gradient-to-br from-slate-900 to-black border border-red-500/30">
            <DialogHeader>
              <div className="flex items-center gap-3">
                <span className="text-4xl">☠️</span>
                <div>
                  <DialogTitle className="text-2xl text-red-400">
                    {selectedEnemy.name}
                  </DialogTitle>
                  <Badge className="mt-2 bg-red-500/20 text-red-300 border-red-500/50">
                    {selectedEnemy.stage === "early" ? "Early Stage Threat" : "Advanced Stage Threat"}
                  </Badge>
                </div>
              </div>
            </DialogHeader>
            
            <div className="space-y-6 mt-6">
              <p className="text-muted-foreground leading-relaxed">
                {selectedEnemy.description}
              </p>

              <div>
                <h4 className="font-semibold text-red-400 mb-3">Characteristics</h4>
                <ul className="space-y-2">
                  {selectedEnemy.characteristics.map((char, idx) => (
                    <li key={idx} className="flex gap-2 text-sm">
                      <span className="text-emerald-400 flex-shrink-0">•</span>
                      <span className="text-muted-foreground">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-400 mb-3">Behavior Patterns</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedEnemy.behaviors}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
