import { ArrowLeft, Download, FileText, Users, GitBranch, MapPin, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PDFModal from "@/components/PDFModal";
import FlowchartViewer from "@/components/FlowchartViewer";
import CharacterCard from "@/components/foques/CharacterCard";
import QuestConceptCard from "@/components/foques/QuestConceptCard";
import PageNavigation from "@/components/foques/PageNavigation";
import { quest1Narrative, quest2Narrative } from "@/data/questNarratives";
import { quest1Characters, quest2Characters } from "@/data/questCharacters";

const FoquesQuestSystem = () => {
  const [expandedQuest, setExpandedQuest] = useState<string | null>(null);
  const [pdfModalOpen, setPdfModalOpen] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Back button */}
          <Link to="/narrative" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-body">Back to Portfolio</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="border-gold/30 text-gold">Quest Design</Badge>
              <Badge variant="outline" className="border-gold/30 text-gold">System Design</Badge>
              <Badge variant="outline" className="border-gold/30 text-gold">Branching Narrative</Badge>
              <Badge variant="outline" className="border-gold/30 text-gold">2025</Badge>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              Quest Design - <span className="text-gradient-gold">FOQUES (TVM)</span>
            </h1>
            
            {/* Studio Credit */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm text-muted-foreground font-body">Developed for</span>
              <img 
                src="/TVM_Logo_Text.PNG" 
                alt="TTV Media Studio" 
                className="h-20 opacity-80"
              />
            </div>
            
            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl">
              A comprehensive quest design system for the game "FOQUES", featuring interconnected narratives, moral choices with lasting consequences, and psychological horror elements set in the forests of Northern Canada.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <Button asChild className="bg-gold hover:bg-gold/90">
                <a href="/projects/oscarpf_OPF_Documentation.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Documentation
                </a>
              </Button>
            </div>
          </header>

          {/* Project Overview */}
          <section id="overview" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">Project Overview</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-elevated border-gradient-gold rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gold/10">
                    <GitBranch className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">12 Interconnected Quests</h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      2 fully developed main quests with multiple branching paths, plus 10 additional quest concepts exploring themes of survival, trust, and consequence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-elevated border-gradient-gold rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gold/10">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">Character Relationship System</h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      Multiple NPCs with detailed profiles, emotional arcs, and dynamic relationships that shift based on player choices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-elevated border-gradient-gold rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gold/10">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">Environmental Storytelling</h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      Setting as narrative vessel: corrupted forests, hallucinogenic spores, and The Stain as both threat and storytelling device.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-elevated border-gradient-gold rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gold/10">
                    <FileText className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">Documentation and Work Diary</h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      Complete design documentation including narrative drafts, flowcharts, gameplay mechanics, and consequence tracking systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Narrative */}
          <section id="narrative" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">Core Narrative</h2>
            <div className="card-elevated border-gradient-gold rounded-lg p-8">
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                In FOQUES, players control <strong className="text-foreground">Kari</strong>, a fox navigating the infected forests of Northern Canada alongside <strong className="text-foreground">Whisker</strong>, her owl companion. The world is threatened by <strong className="text-foreground">The Stain</strong>, a corruption that transforms living creatures into monstrous versions of themselves.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                The quest system explores themes like <em className="text-gold">"The enemy of my enemy is my friend"</em> and the <em className="text-gold">"Butterfly Effect"</em> ; small choices that compound into major consequences. When Kari encounters Raaz, a wounded lynx who once killed her sister, she must choose between revenge and survival. That decision sends a ripple through future quests, character relationships, and even the environment itself.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Unlike traditional quest design, consequences here are not binary good/bad outcomes. Helping an enemy may save lives but create new conflicts. Abandoning someone may haunt the player through hallucinations and environmental changes. Every choice asks: <em className="text-gold">"What is the cost of survival?"</em>
              </p>
            </div>
          </section>

          {/* Featured Quests */}
          <section id="quests" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">Featured Quest Design</h2>
            
            <div className="space-y-12">
              {/* Quest 1 */}
              <div className="card-elevated border-gradient-gold rounded-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl font-semibold">Quest 1: "Pacts Beneath the Snow"</h3>
                  <Badge variant="outline" className="border-gold/30 text-gold">Main Quest</Badge>
                </div>
                
                <p className="text-sm text-gold uppercase tracking-wider mb-4 font-body">
                  Theme: "The enemy of my enemy is my friend"
                </p>
                
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Kari discovers Raaz trapped in an old hunter's snare, surrounded by infected creatures. Nearby lies Kenji, an unconscious human who once saved Raaz as a child. The player must decide who to help, if anyone, as The Stain closes in.
                </p>

                <div className="border-l-2 border-gold/30 pl-6 mb-6">
                  <p className="text-muted-foreground italic font-body leading-relaxed text-sm">
                    "Those are just memories, fox. Will you let the past decide if I live or die?"
                  </p>
                  <p className="text-xs text-gold mt-2 font-body">— Raaz, trapped and desperate</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-display text-lg font-semibold">Branching Outcomes:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground font-body">
                    <li className="flex gap-2">
                      <span className="text-gold">→</span>
                      <span><strong>Help both:</strong> Complex escape sequence; all survive but Whisker is injured by Raaz</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold">→</span>
                      <span><strong>Help Raaz only:</strong> He becomes an unpredictable ally; Kenji haunts later quests</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold">→</span>
                      <span><strong>Help Kenji only:</strong> Human ally gained; Raaz returns as corrupted threat</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold">→</span>
                      <span><strong>Abandon both:</strong> Guilt-driven hallucinations; both appear as enemies in Quest 2</span>
                    </li>
                  </ul>
                </div>

                {/* Expand Button */}
                <div className="mt-8 pt-8 border-t border-border/50">
                  <Button
                    onClick={() => setExpandedQuest(expandedQuest === "quest1" ? null : "quest1")}
                    variant="outline"
                    className="border-gold/30 text-gold hover:bg-gold/10"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    {expandedQuest === "quest1" ? "Hide Full Narrative & Characters" : "View Full Narrative & Characters"}
                  </Button>
                </div>

                {/* Expanded Content */}
                {expandedQuest === "quest1" && (
                  <div className="mt-6 pt-6 border-t border-border/50 space-y-6">
                    {/* Narrative */}
                    <div className="prose prose-invert prose-sm max-w-none">
                      <div className="bg-muted/30 border border-border rounded-lg p-6 max-h-96 overflow-y-auto">
                        <p className="text-muted-foreground font-body leading-relaxed whitespace-pre-line">
                          {quest1Narrative}
                        </p>
                      </div>
                    </div>

                    {/* Characters Section */}
                    <div className="space-y-4">
                      <h4 className="font-display text-xl font-semibold flex items-center gap-2">
                        <Users className="w-5 h-5 text-gold" />
                        Key Characters
                      </h4>
                      <div className="grid gap-6 md:grid-cols-2">
                        {quest1Characters.map((character) => (
                          <CharacterCard key={character.name} character={character} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Flowchart */}
                <div className="mt-8 pt-8 border-t border-border/50">
                  <h4 className="font-display text-lg font-semibold mb-4">Decision Flowchart</h4>
                  <Button
                    onClick={() => setPdfModalOpen("flowchart1")}
                    variant="outline"
                    className="w-full border-gold/30 text-gold hover:bg-gold/10"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Decision Flowchart
                  </Button>
                </div>
              </div>

              {/* Quest 2 */}
              <div className="card-elevated border-gradient-gold rounded-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl font-semibold">Quest 2: "Echoes in the Gorge"</h3>
                  <Badge variant="outline" className="border-gold/30 text-gold">Main Quest</Badge>
                </div>
                
                <p className="text-sm text-gold uppercase tracking-wider mb-4 font-body">
                  Theme: "Everything returns eventually" (The Butterfly Effect)
                </p>
                
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Crossing a gorge filled with hallucinogenic spores, Kari confronts the consequences of her choices. Tala, a raven, needs help protecting her nest. Arlen, a beaver, is trapped building a dam to clear the spores. And in the mist... familiar figures appear.
                </p>

                <div className="border-l-2 border-gold/30 pl-6 mb-6">
                  <p className="text-muted-foreground italic font-body leading-relaxed text-sm">
                    "Are you going to help that beaver finish his dam? Or will you help me protect my nest and trust that my eyes will get you out of here?"
                  </p>
                  <p className="text-xs text-gold mt-2 font-body">— Tala, desperate and impatient</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-display text-lg font-semibold">Branching Outcomes:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground font-body">
                    <li className="flex gap-2">
                      <span className="text-gold">→</span>
                      <span><strong>Help both NPCs:</strong> Safe passage; water clears spores; future allies gained</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold">→</span>
                      <span><strong>Prioritize one:</strong> Partial success; the other becomes hostile or dies</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold">→</span>
                      <span><strong>Help neither:</strong> Nightmare escape sequence with permanent guilt effects</span>
                    </li>
                  </ul>
                </div>

                {/* Expand Button */}
                <div className="mt-8 pt-8 border-t border-border/50">
                  <Button
                    onClick={() => setExpandedQuest(expandedQuest === "quest2" ? null : "quest2")}
                    variant="outline"
                    className="border-gold/30 text-gold hover:bg-gold/10"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    {expandedQuest === "quest2" ? "Hide Full Narrative & Characters" : "View Full Narrative & Characters"}
                  </Button>
                </div>

                {/* Expanded Content */}
                {expandedQuest === "quest2" && (
                  <div className="mt-6 pt-6 border-t border-border/50 space-y-6">
                    {/* Narrative */}
                    <div className="prose prose-invert prose-sm max-w-none">
                      <div className="bg-muted/30 border border-border rounded-lg p-6 max-h-96 overflow-y-auto">
                        <p className="text-muted-foreground font-body leading-relaxed whitespace-pre-line">
                          {quest2Narrative}
                        </p>
                      </div>
                    </div>

                    {/* Characters Section */}
                    <div className="space-y-4">
                      <h4 className="font-display text-xl font-semibold flex items-center gap-2">
                        <Users className="w-5 h-5 text-gold" />
                        Key Characters
                      </h4>
                      <div className="grid gap-6 md:grid-cols-2">
                        {quest2Characters.map((character) => (
                          <CharacterCard key={character.name} character={character} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Flowchart */}
                <div className="mt-8 pt-8 border-t border-border/50">
                  <h4 className="font-display text-lg font-semibold mb-4">Decision Flowchart</h4>
                  <Button
                    onClick={() => setPdfModalOpen("flowchart2")}
                    variant="outline"
                    className="w-full border-gold/30 text-gold hover:bg-gold/10"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Decision Flowchart
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Design Philosophy */}
          <section id="philosophy" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">Design Philosophy</h2>
            <div className="card-elevated border-gradient-gold rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">Choices Over Combat</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">
                    FOQUES prioritizes stealth, puzzles, and moral decisions over direct combat. Violence has consequences, both mechanical and narrative. Players must think strategically about whom to trust and what to sacrifice.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">Characters Discovery</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">
                    Instead of exposition and heavy dialogue, character personalities emerge through behaviors, reactions, and consequences. Raaz's pride shows through his refusal to beg. Whisker's distrust reveals itself in subtle disapproval. Players learn who these characters are by seeing how they act under pressure.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">The Environment as Storyteller</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">
                    The Stain isn't just a threat but a narrative tool. Hallucinogenic spores force players to confront guilt and past choices. Infected water spreads corruption if left unchecked. The world reacts to player decisions, making the setting itself a living consequence system.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">No "Right" Answers</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">
                    Every choice carries weight. Helping everyone may spread resources too thin. Focusing on one character may doom another. The quest system doesn't judge, it reflects. Players must live with their decisions and see them echo through future encounters.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Quest Concepts */}
          <section id="concepts" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">Additional Quest Concepts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: "The Beaver's Dam", 
                  theme: "Individual survival vs. community well-being",
                  synopsis: "A beaver has built a dam to protect itself from infected waters, but flooded the forest. Kari must choose: destroy the dam and earn resentment, negotiate for trust, or leave it and doom the land."
                },
                { 
                  title: "A Father's Roar", 
                  theme: "Sacrifice born from love",
                  synopsis: "A massive bear searches for its corrupted cub. In a moment of tragic clarity, the father sacrifices himself so Kari and Whisker can escape. A cinematic meditation on parental love and inevitable loss."
                },
                { 
                  title: "The White Hare", 
                  theme: "Predator instinct vs. gratitude",
                  synopsis: "Starving and weak, Kari collapses. A white hare saves her with kindness. When Kari recovers, she must choose between hunting it for survival or honoring the debt. Whisker watches in judgment."
                },
                { 
                  title: "Whisker's Call", 
                  theme: "Family bonds vs. survival priorities",
                  synopsis: "Whisker hears calls from his family trapped in an infected zone. His desperation tests Kari's commitment. She must decide whether to support him, convince him to abandon them, or risk everything together."
                },
                { 
                  title: "The Owl's Warning", 
                  theme: "Trust and opportunism",
                  synopsis: "A mysterious owl offers information in exchange for food or a human trap. Whisker distrusts the trade. Kari must weigh the cost of resources against knowledge that might save them later."
                },
                { 
                  title: "The Caribou Crossing", 
                  theme: "Leadership and collective survival",
                  synopsis: "A panicked herd blocks the path, some showing infection. Kari can guide them to safety, using stealth to protect them, or slip through alone, affecting how animals perceive her throughout the game."
                },
                { 
                  title: "The Broken Wing", 
                  theme: "Prejudice vs. compassion",
                  synopsis: "An injured magpie begs for help, but Whisker strongly opposes, calling magpies deceitful scavengers. Kari must challenge her companion's bias or leave the creature to die."
                },
                { 
                  title: "The Stain's Bloom", 
                  theme: "Ignorance vs. survival",
                  synopsis: "A grotesque infected tree releases hallucinogenic pollen. Mice worship it as a guardian. Kari must decide: destroy it and save them from false faith, or leave them to their fatal belief."
                },
                { 
                  title: "Echoes of the Lost Pack", 
                  theme: "Past ties and grief",
                  synopsis: "Kari finds traces of her old pack, now partially corrupted. A hallucination forces her to choose: rescue a family member and risk spreading infection, or abandon them and carry the guilt forever."
                },
                { 
                  title: "Night of the Wolves", 
                  theme: "Unexpected alliances",
                  synopsis: "During a violent storm, wolves fight to protect their cubs from infected creatures. Kari must choose: intervene and help them, creating future allies, or escape and leave them to their fate."
                },
              ].map((quest) => (
                <QuestConceptCard 
                  key={quest.title} 
                  title={quest.title} 
                  theme={quest.theme} 
                  synopsis={quest.synopsis} 
                />
              ))}
            </div>
          </section>

          {/* Technical Details */}
          <section id="technical" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">Technical Details</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-elevated border-gradient-gold rounded-lg p-6">
                <h3 className="font-display text-lg font-semibold mb-2">Scope</h3>
                <ul className="text-sm text-muted-foreground space-y-1 font-body">
                  <li>• 12 side quests designed</li>
                  <li>• 2 fully scripted narratives</li>
                  <li>• Major character profiles</li>
                  <li>• 38 pages of documentation</li>
                </ul>
              </div>

              <div className="card-elevated border-gradient-gold rounded-lg p-6">
                <h3 className="font-display text-lg font-semibold mb-2">Mechanics</h3>
                <ul className="text-sm text-muted-foreground space-y-1 font-body">
                  <li>• Branching dialogue trees</li>
                  <li>• Consequence tracking system</li>
                  <li>• Environmental puzzles</li>
                  <li>• Stealth gameplay integration</li>
                </ul>
              </div>

              <div className="card-elevated border-gradient-gold rounded-lg p-6">
                <h3 className="font-display text-lg font-semibold mb-2">Inspirations</h3>
                <ul className="text-sm text-muted-foreground space-y-1 font-body">
                  <li>• Hellblade: Senua's Sacrifice</li>
                  <li>• The Last of Us</li>
                  <li>• INSIDE</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Reflection */}
          <section id="reflection" className="mb-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-6">Reflection</h2>
            <div className="card-elevated border-gradient-gold rounded-lg p-8">
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                This project taught me that <strong className="text-foreground">narrative design is not just writing, but integration</strong>. It's about understanding how story, environment, and mechanics can work together to create emotional impact. Players don't read character descriptions; they discover personalities through gameplay interactions and consequences.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                The story I developed is both beautiful and tragic. On a personal level, it made me reflect on the value of time, of life itself, and of the Earth we inhabit. It reminded me of the importance of teamwork and building bonds, and of how sometimes setting aside differences can be the key to survival.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                I'm grateful to the FOQUES team for giving me the opportunity to grow as a narrative designer and for valuing the work I contributed to this project.
              </p>
            </div>
          </section>
        </div>
      </main>

      <PageNavigation />
      <PDFModal
        isOpen={pdfModalOpen === "quest1"}
        onClose={() => setPdfModalOpen(null)}
        pdfFile="/projects/oscarpf_OPF_SideQuest1.pdf"
        title="Quest 1: Pacts Beneath the Snow - Full Narrative"
        downloadName="FOQUES_Quest1_FullNarrative.pdf"
      />
      
      <PDFModal
        isOpen={pdfModalOpen === "quest2"}
        onClose={() => setPdfModalOpen(null)}
        pdfFile="/projects/oscarpf_OPF_SideQuest2.pdf"
        title="Quest 2: Echoes in the Gorge - Full Narrative"
        downloadName="FOQUES_Quest2_FullNarrative.pdf"
      />

      <FlowchartViewer
        isOpen={pdfModalOpen === "flowchart1"}
        onClose={() => setPdfModalOpen(null)}
        pdfFile="/projects/oscarpf_OPF_SideQuest1.pdf"
        title="Quest 1: Decision Flowchart"
        downloadName="FOQUES_Quest1_Flowchart.pdf"
      />

      <FlowchartViewer
        isOpen={pdfModalOpen === "flowchart2"}
        onClose={() => setPdfModalOpen(null)}
        pdfFile="/projects/oscarpf_OPF_SideQuest2.pdf"
        title="Quest 2: Decision Flowchart"
        downloadName="FOQUES_Quest2_Flowchart.pdf"
      />

      <Footer />
    </div>
  );
};

export default FoquesQuestSystem;
