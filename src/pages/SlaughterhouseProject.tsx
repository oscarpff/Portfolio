import { ArrowLeft, ExternalLink, Code, Brain, Gamepad2, Wrench, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectNavigation from "@/components/ProjectNavigation";

const navSections = [
  { id: "hero", label: "Overview" },
  { id: "contributions", label: "My Role" },
  { id: "technical", label: "Technical" },
  { id: "ai", label: "AI Systems" },
  { id: "narrative", label: "Narrative" },
  { id: "learnings", label: "Learnings" },
];

const SlaughterhouseProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/projects/slaughterhouse/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        
        <div className="relative z-10 container mx-auto px-6 pb-12 pt-32">
          <Link to="/narrative" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-body">Back to Portfolio</span>
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="border-gold/30 text-gold bg-background/50 backdrop-blur-sm">
              <Gamepad2 className="w-3 h-3 mr-1" />
              Published Game
            </Badge>
            <Badge variant="outline" className="border-gold/30 text-gold bg-background/50 backdrop-blur-sm">
              Unreal Engine 5
            </Badge>
            <Badge variant="outline" className="border-gold/30 text-gold bg-background/50 backdrop-blur-sm">
              Team Project
            </Badge>
            <Badge variant="outline" className="border-gold/30 text-gold bg-background/50 backdrop-blur-sm">
              2024
            </Badge>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Slaughter<span className="text-gradient-gold">house</span>
          </h1>
          
          <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mb-8">
            A survival horror game where you play as a peace-loving hippie driven to destroy 
            a decaying slaughterhouse filled with unspeakable mutations. What starts as a 
            twisted quest soon turns into a desperate fight for survival.
          </p>
          
          <Button variant="hero" size="lg" asChild>
            <a href="https://las-divinas.itch.io/slaughter-house" target="_blank" rel="noopener noreferrer">
              Play on Itch.io
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      <main className="pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* My Contributions Section */}
          <section id="contributions" className="py-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-8">
              My <span className="text-gradient-gold">Contributions</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-elevated border-gradient-gold rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gold/10">
                    <Brain className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">AI System Design</h3>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Designed and implemented enemy AI using Behavior Trees and Blackboards. 
                  Created dynamic patrol patterns, detection systems, and combat behaviors 
                  that adapt to player actions.
                </p>
              </div>
              
              <div className="card-elevated border-gradient-gold rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gold/10">
                    <Code className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Movement System</h3>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Built the character movement system using Animation Blueprints (ABP) 
                  and gameplay logic in Unreal Engine 5. Smooth locomotion with proper 
                  state machine transitions.
                </p>
              </div>
              
              <div className="card-elevated border-gradient-gold rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gold/10">
                    <Gamepad2 className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Combat System</h3>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Implemented diverse combat mechanics including melee attacks, bullet 
                  management, and weapon handling. Balanced player agency with horror tension.
                </p>
              </div>
              
              <div className="card-elevated border-gradient-gold rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gold/10">
                    <BookOpen className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Lead Narrative</h3>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Led narrative design including environmental storytelling, collectible 
                  lore items, and the overarching story that reveals the slaughterhouse's 
                  dark secrets.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Deep Dive */}
          <section id="technical" className="py-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-8">
              Technical <span className="text-gradient-gold">Stack</span>
            </h2>
            
            <div className="card-elevated border-gradient-gold rounded-lg p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-display text-lg font-semibold text-gold mb-3">Engine & Tools</h4>
                  <ul className="space-y-2 text-muted-foreground font-body">
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-gold/60" />
                      Unreal Engine 5
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-gold/60" />
                      Blender (3D/Rigging)
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-gold/60" />
                      Adobe Photoshop
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-display text-lg font-semibold text-gold mb-3">Systems</h4>
                  <ul className="space-y-2 text-muted-foreground font-body">
                    <li className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-gold/60" />
                      Behavior Trees
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-gold/60" />
                      Blackboard AI
                    </li>
                    <li className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-gold/60" />
                      Animation Blueprints
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-display text-lg font-semibold text-gold mb-3">Assets</h4>
                  <ul className="space-y-2 text-muted-foreground font-body">
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-gold/60" />
                      Custom Level Design
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-gold/60" />
                      Character Setup
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-gold/60" />
                      Hand-painted Textures
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Visual Gallery */}
            <div className="rounded-lg overflow-hidden border border-border">
              <img 
                src="/projects/slaughterhouse/details.jpg" 
                alt="Slaughterhouse development details" 
                className="w-full h-auto"
              />
            </div>
          </section>

          {/* AI Systems Deep Dive */}
          <section id="ai" className="py-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-8">
              AI <span className="text-gradient-gold">Systems</span>
            </h2>
            
            <div className="space-y-6">
              <div className="card-elevated rounded-lg p-6 border-l-4 border-l-gold">
                <h3 className="font-display text-xl font-semibold mb-3">Behavior Trees</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Each enemy type has a unique behavior tree governing its actions. The mutation 
                  creatures patrol dynamically, investigate sounds, and enter aggressive pursuit 
                  states when detecting the player. I implemented priority-based task selection 
                  to create unpredictable yet believable enemy behaviors.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Patrol Logic</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Detection System</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold/80">State Transitions</Badge>
                </div>
              </div>
              
              <div className="card-elevated rounded-lg p-6 border-l-4 border-l-gold">
                <h3 className="font-display text-xl font-semibold mb-3">Blackboard Architecture</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Used Blackboards to manage AI memory and decision-making data. Enemies 
                  remember last known player positions, track alert states, and share 
                  information when appropriate. This creates emergent behaviors where 
                  creatures can "communicate" danger to nearby allies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Memory Systems</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Alert Propagation</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Dynamic Targeting</Badge>
                </div>
              </div>
              
              <div className="card-elevated rounded-lg p-6 border-l-4 border-l-gold">
                <h3 className="font-display text-xl font-semibold mb-3">Combat AI</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Enemy combat behaviors include attack patterns, cooldowns, and positioning 
                  logic. Creatures strafe, retreat when hurt, and coordinate attacks in 
                  groups. The challenge was balancing aggression with player fairness—enemies 
                  needed to feel threatening but not frustrating.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Attack Patterns</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Group Coordination</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Difficulty Balancing</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Narrative Design */}
          <section id="narrative" className="py-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-8">
              Narrative <span className="text-gradient-gold">Design</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl font-semibold mb-4 text-gold">Environmental Storytelling</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  The slaughterhouse tells its story through its environment. Blood trails 
                  lead to hidden rooms. Scattered documents hint at experiments gone wrong. 
                  The deeper players explore, the more they understand the facility's 
                  horrifying transformation.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  I designed the narrative to reward exploration without forcing players 
                  to engage with lore if they prefer pure gameplay.
                </p>
              </div>
              
              <div>
                <h3 className="font-display text-xl font-semibold mb-4 text-gold">Collectible Lore</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Optional collectibles scattered throughout the levels reveal the backstory: 
                  worker diaries, scientific notes, and cryptic messages. Each piece adds 
                  context to the mutations and the facility's dark past.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  The Resident Evil-inspired approach balances horror tension with 
                  worldbuilding for players who want to dig deeper.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-lg bg-muted/20 border border-border">
              <p className="text-lg italic text-muted-foreground font-body leading-relaxed text-center">
                "The slaughterhouse has become a breeding ground for unspeakable mutations. 
                Twisted creatures, born of the facility's dark past, now roam the halls, 
                turning your mission into a terrifying struggle for survival."
              </p>
            </div>
          </section>

          {/* Learnings */}
          <section id="learnings" className="py-16 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-8">
              What I <span className="text-gradient-gold">Learned</span>
            </h2>
            
            <div className="card-elevated border-gradient-gold rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gold/10">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Team Collaboration</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Working with 3D artists, sound designers, and QA testers taught me 
                    how to communicate technical constraints and creative intentions 
                    effectively. Clear documentation became essential.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gold/10">
                  <Brain className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">AI Architecture</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Deepened my understanding of Behavior Trees and Blackboards. 
                    Creating dynamic, believable AI that enhances horror without 
                    being unfair is a delicate balance I now appreciate deeply.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gold/10">
                  <BookOpen className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Narrative Integration</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Environmental storytelling poses unique challenges—how do you 
                    reveal plot without interrupting gameplay? This project refined 
                    my approach to optional lore and collectible design.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Final CTA */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground font-body mb-6">
                Ready to experience the horror yourself?
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="https://las-divinas.itch.io/slaughter-house" target="_blank" rel="noopener noreferrer">
                  Play Slaughterhouse on Itch.io
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <ProjectNavigation sections={navSections} />
      <Footer />
    </div>
  );
};

export default SlaughterhouseProject;
