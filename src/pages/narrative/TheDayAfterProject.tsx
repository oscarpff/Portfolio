import { ArrowLeft, ExternalLink, Brain, Code, Gamepad2, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Navigation from "@/components/narrative/Navigation";
import Footer from "@/components/narrative/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectNavigation from "@/components/narrative/ProjectNavigation";
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
  { id: "design", label: "Design" },
  { id: "learnings", label: "Learnings" },
];

const images = [
  { type: "video", videoId: "Bo40HdKVuG0", alt: "Gameplay Trailer", thumbnail: "https://img.youtube.com/vi/Bo40HdKVuG0/sddefault.jpg" },
  { type: "image", src: "/projects/thedayafter/Bubbly.png", alt: "Magical bubble companion" },
  { type: "image", src: "/projects/thedayafter/Counter.png", alt: "Kitchen" },
  { type: "image", src: "/projects/thedayafter/LivingRoom.png", alt: "Cleaning system" },
];

const TheDayAfterProject = () => {
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
              src="/projects/thedayafter/FullLogo.png" 
              alt="The Day After Logo" 
              className="h-38 md:h-38 w-auto"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            <Badge variant="outline" className="border-gold/30 text-gold">
              <Gamepad2 className="w-3 h-3 mr-1" />
              Game Jam
            </Badge>
            <Badge variant="outline" className="border-gold/30 text-gold">Unreal Engine 5</Badge>
            <Badge variant="outline" className="border-gold/30 text-gold">2025</Badge>
            <Badge variant="outline" className="border-gold/30 text-gold">ZamJam</Badge>
          </div>
          
          <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-4xl mb-7 text-center mx-auto">
            After an unforgettable party, you wake up to a messy house, a pounding headache, and an unexpected companion: 
            a mysterious magical bubble. Clean up the mess, and uncover a lurking danger that 
            threatens to turn this simple chore into a fight for survival.
          </p>
          
          <div className="flex justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://glitch-works.itch.io/the-day-after" target="_blank" rel="noopener noreferrer">
                Play on Itch.io
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <main className="pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Gallery Header */}
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
                  <h3 className="font-display text-xl font-semibold">Lead Narrative Design</h3>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Created the narrative framework, lore, and story progression. Developed environmental storytelling and a full story for a potential full game release.
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
                  Implemented character movement using Animation Blueprints and gameplay logic 
                  in Unreal Engine 5. The system is scalable for future expansions, including jumping and shooting mechanics.
                </p>
              </div>
              
              <div className="card-elevated border-gradient-gold rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gold/10">
                    <Lightbulb className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Cleaning System</h3>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Designed and implemented the core interaction mechanic using invisible 
                  collision meshes. This solution allows intuitive item selection by looking 
                  at objects, rather than requiring precise aiming.
                </p>
              </div>
              
              <div className="card-elevated border-gradient-gold rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gold/10">
                    <Gamepad2 className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Cleaning Scanner</h3>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Created a scanner mechanic to help players identify dirty objects through walls. Using a big sphere trace to hit all the dirty assets in view, enhancing usability and player experience.
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
                      <span className="text-gold/60">•</span>
                      Unreal Engine 5
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold/60">•</span>
                      Blender (3D Modeling)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold/60">•</span>
                      Niagara VFX System
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-display text-lg font-semibold text-gold mb-3">Systems</h4>
                  <ul className="space-y-2 text-muted-foreground font-body">
                    <li className="flex items-center gap-2">
                      <span className="text-gold/60">•</span>
                      Animation Blueprints (ABP)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold/60">•</span>
                      Collision Detection
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold/60">•</span>
                      Interactive Gameplay Logic
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-display text-lg font-semibold text-gold mb-3">Assets</h4>
                  <ul className="space-y-2 text-muted-foreground font-body">
                    <li className="flex items-center gap-2">
                      <span className="text-gold/60">•</span>
                      Custom Level Design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold/60">•</span>
                      Custom 3D Models
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gold/60">•</span>
                      Particle Effects (VFX)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Design Philosophy */}
          <section id="design" className="py-6 scroll-mt-24">
            <h2 className="font-display text-3xl font-semibold mb-8">
              Design <span className="text-gradient-gold">Philosophy</span>
            </h2>
            
            <div className="space-y-6">
              <div className="card-elevated rounded-lg p-6 border-l-4 border-l-gold">
                <h3 className="font-display text-xl font-semibold mb-3">Intuitive Interaction Design</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                    The cleaning system was designed to be immediately understandable: players simply look at dirty objects 
                    and interact with them. This reduces cognitive load and keeps the focus on exploration and narrative 
                    discovery rather than on complex mechanics. We used common dirty items such as pizza boxes, confetti, stains, 
                    and similar elements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Look-based Interaction</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Environmental Feedback</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Accessibility First</Badge>
                </div>
              </div>
              
              <div className="card-elevated rounded-lg p-6 border-l-4 border-l-gold">
                <h3 className="font-display text-xl font-semibold mb-3">Game Jam Constraints</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Developed within tight time constraints (ZamJam 2025), the project required careful 
                  scope management. Every feature was designed to maximize the impact while 
                  minimizing implementation complexity. The result is a fun short experience, which could be enhanced into a full game with additional content.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Scope Management</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Iterative Design</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Team Collaboration</Badge>
                </div>
              </div>
              
              <div className="card-elevated rounded-lg p-6 border-l-4 border-l-gold">
                <h3 className="font-display text-xl font-semibold mb-3">Narrative Through Environment</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  The house itself tells the story. Visual clues, object placement, and environmental 
                  decay reveal what happened during the party. The mysterious bubble guides players not 
                  through exposition, but through atmospheric design and subtle visual cues.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Environmental Storytelling</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Visual Narrative</Badge>
                  <Badge variant="outline" className="border-gold/30 text-gold/80">Atmosphere</Badge>
                </div>
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
                  <Lightbulb className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Problem-Solving Under Pressure</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Game jams demand creative solutions with limited time. The invisible collision mesh 
                    approach to cleaning is a perfect example of elegant problem solving. It emerged from 
                    asking "how can we make this intuitive?" rather than "what's the most complex way?"
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gold/10">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Team Communication</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Working within a tight game jam team reinforced the importance of clear communication. 
                    Quick design decisions, efficient collaboration, and clear role definitions were crucial 
                    to delivering a cohesive final product.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gold/10">
                  <Brain className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Scope as a Feature</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Constraints breed creativity. By accepting the game jam's time limits, we created 
                    a tightly focused experience. This taught me that limitation isn't a weakness, but 
                    an opportunity for focused, impactful design.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Final CTA */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground font-body mb-6">
                Ready to experience the mystery and clean up the chaos?
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="https://glitch-works.itch.io/the-day-after" target="_blank" rel="noopener noreferrer">
                  Play The Day After on Itch.io
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

export default TheDayAfterProject;
