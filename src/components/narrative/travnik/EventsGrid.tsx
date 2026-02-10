import { Event } from "@/data/travnikLore";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const typeMap = {
    incursion: { label: "PvE Incursion", color: "bg-purple-500/20 text-purple-300" },
    seasonal: { label: "Seasonal Event", color: "bg-blue-500/20 text-blue-300" },
    limited: { label: "Limited Event", color: "bg-orange-500/20 text-orange-300" },
  };

  const difficultyMap = {
    normal: "border-emerald-500/30",
    hard: "border-orange-500/30",
    legendary: "border-red-500/30",
  };

  const difficultyLabel = {
    normal: "Normal",
    hard: "Hard",
    legendary: "Legendary",
  };

  return (
    <div className={`rounded-lg border ${difficultyMap[event.difficulty]} bg-white/5 p-6 space-y-4`}>
      <div className="space-y-2">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-display text-2xl font-bold text-gold">
            {event.name}
          </h3>
          <Badge className={typeMap[event.type].color}>
            {typeMap[event.type].label}
          </Badge>
          <Badge variant="outline" className="border-gold/30 text-gold">
            {difficultyLabel[event.difficulty]}
          </Badge>
        </div>
      </div>

      <p className="text-muted-foreground">{event.description}</p>

      <div className="space-y-3 text-sm border-t border-white/10 pt-4">
        <div>
          <p className="font-semibold text-gold mb-1">Details</p>
          <p className="text-muted-foreground">{event.details}</p>
        </div>

        <div>
          <p className="font-semibold text-gold mb-1">Rewards</p>
          <p className="text-muted-foreground">{event.rewards}</p>
        </div>
      </div>
    </div>
  );
}

interface EventsGridProps {
  events: Event[];
}

export default function EventsGrid({ events }: EventsGridProps) {
  return (
    <div className="space-y-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
