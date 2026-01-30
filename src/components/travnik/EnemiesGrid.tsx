import { Enemy } from "@/data/travnikLore";

interface EnemyCardProps {
  enemy: Enemy;
}

export function EnemyCard({ enemy }: EnemyCardProps) {
  const stageColor = enemy.stage === "early" ? "border-orange-500/30" : "border-red-500/30";
  const stageBg = enemy.stage === "early" ? "bg-orange-500/5" : "bg-red-500/5";

  return (
    <div className={`rounded-lg border ${stageColor} ${stageBg} overflow-hidden hover:border-opacity-60 transition-all`}>
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="h-48 w-full md:h-auto md:w-48 flex-shrink-0 flex items-center justify-center bg-muted/20">
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
              <h3 className="font-display text-xl font-bold text-gold">
                {enemy.name}
              </h3>
              <span className="text-xs px-2 py-1 rounded bg-white/10 text-muted-foreground">
                {enemy.stage === "early" ? "Early Stage" : "Advanced Stage"}
              </span>
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
  return (
    <div className="space-y-6">
      {enemies.map((enemy) => (
        <EnemyCard key={enemy.id} enemy={enemy} />
      ))}
    </div>
  );
}
