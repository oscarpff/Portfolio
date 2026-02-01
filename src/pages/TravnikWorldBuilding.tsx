import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { TimelineExpanded } from "@/components/travnik/TimelineExpanded";
import FactionFeed from "@/components/travnik/FactionFeed";
import EnemiesGrid from "@/components/travnik/EnemiesGrid";
import MaterialsGrid from "@/components/travnik/MaterialsGrid";
import EventsGrid from "@/components/travnik/EventsGrid";
import LoreTabs from "@/components/travnik/LoreTabs";
import ProjectNavigation from "@/components/ProjectNavigation";
import {
  timelineEvents,
  factions,
  characters,
  enemies,
  materials,
  glossary,
  events,
  loreSections,
} from "@/data/travnikLore";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

const travnikNavSections = [
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "lore", label: "World History" },
  { id: "factions", label: "Factions" },
  { id: "systems", label: "Resources" },
  { id: "enemies", label: "Enemies" },
  { id: "events", label: "Events" },
  { id: "glossary", label: "Glossary" },
];

const TravnikWorldBuilding = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredGlossary = glossary.filter(
    (term) =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter lore sections to exclude factions and resources (they have their own dedicated sections)
  const coreLoreSections = loreSections.filter(
    (lore) => lore.category === "war" || lore.category === "world"
  );

  const factionLoreSections = loreSections.filter(
    (lore) => lore.category === "factions"
  );

  const resourceLoreSections = loreSections.filter(
    (lore) => lore.category === "resources"
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Back Button */}
          {/* Back Button */}
          <Link to="/narrative" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-body">Back to Portfolio</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="border-gold/30 text-gold">
                Worldbuilding
              </Badge>
              <Badge variant="outline" className="border-gold/30 text-gold">
                Game Design
              </Badge>
              <Badge variant="outline" className="border-gold/30 text-gold">
                2024
              </Badge>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              Travnik - <span className="text-gradient-gold">Post-Nuclear Worldbuilding</span>
            </h1>

            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl">
              Complete worldbuilding documentation for a post-apocalyptic PvP/PvE isometric
              shooter. Three conflicting factions fight for survival on a radiation-ravaged
              Earth where nuclear war mutated humans into mindless beasts and animals into
              intelligent superbeings.
            </p>
          </header>

        </div>

        {/* Timeline Section - Full Width */}
        <section id="timeline" className="mb-16 scroll-mt-24 w-full">
          <div className="container mx-auto px-6 max-w-5xl mb-8">
            <h2 className="font-display text-3xl font-semibold mb-6">
              Timeline: Pre-Game History
            </h2>
          </div>
          <TimelineExpanded events={timelineEvents} />
        </section>

        <div className="container mx-auto px-6 max-w-5xl">

          {/* Detailed Lore Section */}
          <section id="lore" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">
              World History & Context
            </h2>
            <p className="text-muted-foreground mb-8">
              Explore the events that shaped Travnik's world. From the devastating Inter-World War to the emergence of super-intelligent animals.
            </p>
            <LoreTabs loreSections={coreLoreSections} />
          </section>

          {/* Factions Section */}
          <section id="factions" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">
              Factions & Characters
            </h2>
            <p className="text-muted-foreground mb-8">
              The three factions represent distinct philosophies and approaches. Click the book icon for detailed faction lore, or "Details" to explore members and organization.
            </p>
            <FactionFeed 
              factions={factions} 
              characters={characters}
              loreSections={factionLoreSections}
            />
          </section>

          {/* Systems & Materials Section */}
          <section id="systems" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">
              Systems & Resources
            </h2>
            <p className="text-muted-foreground mb-8">
              The pillars that sustain the world's economy and technology. Click "Read Detailed Lore" for comprehensive information about each resource.
            </p>
            <MaterialsGrid 
              materials={materials}
              loreSections={resourceLoreSections}
            />
          </section>

          {/* Enemies Section */}
          <section id="enemies" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">
              Threats & Bosses
            </h2>
            <p className="text-muted-foreground mb-8">
              Dangerous creatures inhabiting Travnik
            </p>
            <EnemiesGrid enemies={enemies} />
          </section>

          {/* Events Section */}
          <section id="events" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">
              PvE Events
            </h2>
            <p className="text-muted-foreground mb-8">
              Special operations and seasonal events
            </p>
            <EventsGrid events={events} />
          </section>

          {/* Glossary Section */}
          <section id="glossary" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">
              Lore Glossary
            </h2>
            <p className="text-muted-foreground mb-4">
              Key terms and concepts of the Travnik worldbuilding
            </p>
            <Input
              placeholder="Search terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-6"
            />

            <div className="grid gap-4 md:grid-cols-2">
              {filteredGlossary.map((term) => (
                <div
                  key={term.id}
                  className="rounded-lg border border-white/10 bg-white/5 p-4 hover:border-gold/30 transition-colors"
                >
                  <h3 className="font-semibold text-gold mb-2">{term.term}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {term.definition}
                  </p>
                  {term.relatedTerms && term.relatedTerms.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <p className="text-xs text-gold/60 mb-1">Related terms:</p>
                      <div className="flex flex-wrap gap-1">
                        {term.relatedTerms.map((related, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 rounded bg-gold/10 text-gold/80"
                          >
                            {related}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredGlossary.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No matching terms found
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

      <ProjectNavigation sections={travnikNavSections} />
      <Footer />
    </div>
  );
};

export default TravnikWorldBuilding;
