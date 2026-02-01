import { TimelineEvent } from "@/data/travnikLore";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineExpandedProps {
  events: TimelineEvent[];
}

const colorMap = {
  gold: "bg-yellow-500/20 border-yellow-500/50 text-yellow-200",
  red: "bg-red-500/20 border-red-500/50 text-red-200",
  emerald: "bg-emerald-500/20 border-emerald-500/50 text-emerald-200",
  cyan: "bg-cyan-500/20 border-cyan-500/50 text-cyan-200",
};

const iconBgMap = {
  gold: "bg-yellow-500/30",
  red: "bg-red-500/30",
  emerald: "bg-emerald-500/30",
  cyan: "bg-cyan-500/30",
};

export function TimelineExpanded({ events }: TimelineExpandedProps) {
  return (
    <div className="relative py-20 px-8 overflow-x-auto">
      <div className="relative flex items-center justify-center min-w-max mx-auto">
        {/* Horizontal Timeline Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/60 via-purple-500/60 to-cyan-500/60" 
             style={{ transform: 'translateY(-50%)' }} 
        />

        {/* Timeline Events */}
        <div className="flex items-center justify-center gap-12">
          {events.map((event, index) => {
            const isBoxTop = index % 2 === 0;
            
            return (
              <div key={event.id} className="relative flex flex-col items-center justify-center" style={{ width: '200px', height: '400px' }}>
                {/* Top Section - Fixed Height */}
                <div className="flex items-end justify-center" style={{ height: '180px', marginBottom: '20px' }}>
                  {isBoxTop ? (
                    <div className={`flex flex-col items-center p-4 border-2 ${colorMap[event.color]} bg-gray-900`}>
                      <span className="text-xs font-bold text-white/90 bg-black/50 px-3 py-1 rounded mb-2">
                        {event.date}
                      </span>
                      <h3 className="font-bold text-xs uppercase tracking-wider text-center mb-2 text-white">
                        {event.title}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed text-center">
                        {event.description}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={`w-12 h-12 rounded-full ${iconBgMap[event.color]} bg-gray-900 flex items-center justify-center text-2xl border-2 border-white/30 shadow-lg`}
                    >
                      {event.icon}
                    </div>
                  )}
                </div>

                {/* Bottom Section - Fixed Height */}
                <div className="flex items-start justify-center" style={{ height: '180px', marginTop: '20px' }}>
                  {isBoxTop ? (
                    <div
                      className={`w-12 h-12 rounded-full ${iconBgMap[event.color]} bg-gray-900 flex items-center justify-center text-2xl border-2 border-white/30 shadow-lg`}
                    >
                      {event.icon}
                    </div>
                  ) : (
                    <div className={`flex flex-col items-center p-4 border-2 ${colorMap[event.color]} bg-gray-900`}>
                      <span className="text-xs font-bold text-white/90 bg-black/50 px-3 py-1 rounded mb-2">
                        {event.date}
                      </span>
                      <h3 className="font-bold text-xs uppercase tracking-wider text-center mb-2 text-white">
                        {event.title}
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed text-center">
                        {event.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
