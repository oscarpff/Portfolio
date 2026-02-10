import { ArrowLeft, ExternalLink, Code, Brain, Gamepad2, Wrench, BookOpen, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectNavigation from "@/components/ProjectNavigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const navSections = [
  { id: "hero", label: "Overview" },
  { id: "gallery", label: "Gallery" },
  { id: "contributions", label: "My Role" },
  { id: "technical", label: "Technical" },
  { id: "ai", label: "AI Systems" },
  { id: "narrative", label: "Narrative" },
  { id: "learnings", label: "Learnings" },
];

const images = [
  { type: "video", videoId: "q_mMmUznelE", alt: "Gameplay Trailer", thumbnail: "https://img.youtube.com/vi/q_mMmUznelE/sddefault.jpg" },
  { type: "image", src: "/projects/slaughterhouse/Inventory.png", alt: "Inventory screen" },
  { type: "image", src: "/projects/slaughterhouse/congelador.png", alt: "Freezer area" },
  { type: "image", src: "/projects/slaughterhouse/laboratorio.png", alt: "Laboratory" },
  { type: "image", src: "/projects/slaughterhouse/Puzzle.png", alt: "Puzzle" },
  { type: "image", src: "/projects/slaughterhouse/boss.png", alt: "Boss fight" },
];

const SlaughterhouseProject = () => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi, thumbApi]
  );

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return;
    setSelectedIndex(mainApi.selectedScrollSnap());
    thumbApi.scrollTo(mainApi.selectedScrollSnap());
  }, [mainApi, thumbApi]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    return () => {
      mainApi.off("select", onSelect);
    };
  }, [mainApi, onSelect]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-6">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link 
            to="/narrative" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-body">Back to Portfolio</span>
          </Link>
          
          {/* Game Logo */}
          <div className="mb-6 flex justify-center">
            <img 
              src="/projects/slaughterhouse/Prueba2.svg" 
              alt="Slaughterhouse Logo" 
              className="h-28 md:h-38 w-auto"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            <Badge variant="outline" className="border-gold/30 text-gold">
              <Gamepad2 className="w-3 h-3 mr-1" />
              Published Game
            </Badge>
            <Badge variant="outline" className="border-gold/30 text-gold">2024</Badge>
            <Badge variant="outline" className="border-gold/30 text-gold">Team Project</Badge>
          </div>
          
          <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-4xl mb-7 text-center mx-auto">
            Explore an abandoned facility, uncover its dark secrets and navigate challenging 
            encounters while trying to survive the horrors within.
          </p>
          
          <div className="flex justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://las-divinas.itch.io/slaughter-house" target="_blank" rel="noopener noreferrer">
                Play on Itch.io
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <main className="pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          
        {/* Carousel */}
          <section id="gallery" className="py-6 scroll-mt-14">
            <h2 className="font-display text-3xl font-semibold mb-5">
              Image <span className="text-gradient-gold">Gallery</span>
            </h2>
          </section>
          {/* Image Carousel */}
          <section className="py-6 mb-12">
            <div className="max-w-4xl mx-auto">
              {/* Main Carousel */}
              <Carousel
                setApi={setMainApi}
                opts={{
                  loop: true,
                }}
                className="w-full mb-4"
              >
                <CarouselContent>
                  {images.map((item, index) => (
                    <CarouselItem key={index}>
                      {item.type === "image" ? (
                        <div className="rounded-lg overflow-hidden border border-border">
                          <img 
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-auto"
                          />
                        </div>
                      ) : (
                        <div className="rounded-lg overflow-hidden border border-border aspect-video bg-black flex items-center justify-center">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${item.videoId}`}
                            title={item.alt}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                      )}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12 md:-left-16 bg-transparent border-none hover:bg-transparent hover:text-gold shadow-none" />
                <CarouselNext className="-right-12 md:-right-16 bg-transparent border-none hover:bg-transparent hover:text-gold shadow-none" />
              </Carousel>
              
              {/* Thumbnail Carousel */}
              <Carousel
                setApi={setThumbApi}
                opts={{
                  containScroll: "keepSnaps",
                  dragFree: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2">
                  {images.map((item, index) => (
                    <CarouselItem key={index} className="basis-1/3 md:basis-1/5 pl-2">
                      <div
                        className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all relative ${
                          index === selectedIndex
                            ? "border-gold opacity-100"
                            : "border-border opacity-50 hover:opacity-75"
                        }`}
                        onClick={() => onThumbClick(index)}
                      >
                        <img 
                          src={item.type === "image" ? item.src : item.thumbnail}
                          alt={item.alt}
                          className="w-full h-auto aspect-video object-cover pointer-events-none"
                        />
                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
                            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                              <svg className="w-4 h-4 text-background fill-current ml-0.5" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </section>
          
          {/* My Contributions Section */}
          <section id="contributions" className="py-6 scroll-mt-24">
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
                  state machine transitions between actions.
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
                  management, and weapon handling.
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
          <section id="technical" className="py-6 scroll-mt-24">
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
          </section>

          {/* AI Systems Deep Dive */}
          <section id="ai" className="py-6 scroll-mt-24">
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
                  Used Blackboards to manage AI memory and decision-making data. 
                  Enemies remember the player’s last known position and share information when appropriate, 
                  creating emergent behaviors where creatures can effectively “communicate” danger to nearby allies. 
                  If one creature spots you, be ready to fight!
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
                  Enemy combat behaviors include attack patterns, cooldowns, and positioning logic, 
                  all balanced around a tank-style movement system. 
                  The challenge was ensuring they felt dangerous without becoming frustrating due to the movement constraints.
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
          <section id="narrative" className="py-6 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-8">
              Narrative <span className="text-gradient-gold">Design</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-elevated rounded-lg p-6 border-l-4 border-l-gold">
                <h3 className="font-display text-xl font-semibold mb-4 text-gold">Environmental Storytelling</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  The environment itself tells the story. Visual clues, architectural 
                  design, and atmosphere guide players' understanding without explicit 
                  exposition.
                </p>
              </div>
              
              <div className="card-elevated rounded-lg p-6 border-l-4 border-l-gold">
                <h3 className="font-display text-xl font-semibold mb-4 text-gold">Optional Discovery</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Collectible items reward exploration without forcing 
                  lore consumption. Players can enjoy pure gameplay or dive deeper into 
                  the narrative—both approaches are equally valid.
                </p>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section id="learnings" className="py-8 scroll-mt-24">
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
                    Working with other programmers, 3D artists, and QA testers taught me 
                    how to communicate technical constraints and creative intentions 
                    effectively. Clear documentation and teamwork became essential.
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

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gold/10">
                  <Sparkles className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Animation Blueprints</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Deepened my understanding of Animation Blueprints (ABPs), 
                    including animation state control, blending, and transitions. 
                    Implemented combat traces and animation-driven attacks.
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
                    Environmental storytelling poses unique challenges. How do you 
                    reveal plot without interrupting gameplay? This project refined 
                    my approach to optional lore and collectible design.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Final CTA */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground font-body mb-6">
                Still here?? Go experience the horror yourself!!
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
