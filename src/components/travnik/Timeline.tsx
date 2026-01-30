import { TimelineEvent } from "@/data/travnikLore";

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  const colorMap = {
    gold: "bg-gold/10 border-gold/30 before:bg-gold",
    red: "bg-red-500/10 border-red-500/30 before:bg-red-500",
    emerald: "bg-emerald-500/10 border-emerald-500/30 before:bg-emerald-500",
    cyan: "bg-cyan-500/10 border-cyan-500/30 before:bg-cyan-500",
  };

  return (
    <div className="space-y-8">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-gold/0 via-gold to-gold/0" />

        {/* Events */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={event.id} className="relative pl-20">
              {/* Dot */}
              <div
                className={`absolute left-0 top-1 h-12 w-12 rounded-full border-4 ${colorMap[event.color]} flex items-center justify-center text-xl`}
              >
                {event.icon}
              </div>

              {/* Content */}
              <div
                className={`rounded-lg border p-6 ${colorMap[event.color]} transition-all hover:border-opacity-60`}
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-gold">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
