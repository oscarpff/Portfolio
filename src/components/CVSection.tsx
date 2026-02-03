import { Download, Briefcase, Wrench, Award, GraduationCap} from "lucide-react";
import { Button } from "@/components/ui/button";

const CVSection = () => {
  return (
    <section id="cv" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Curriculum Vitae
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Professional <span className="text-gradient-gold">Experience</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto mb-8">
              A comprehensive overview of my journey trying to become a game & narrative designer, 
              including education, work experience, and achievements.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {/* Work Experience */}
            <div className="card-elevated border-gradient-gold rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gold/10 text-gold">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-2">Work Experience</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Professional roles and responsibilities
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 ml-16">
                <div className="border-l-2 border-gold/30 pl-6 pb-6">
                  <p className="text-gold font-body text-sm mb-1">Feb. 2025 - Aug. 2025</p>
                  <h4 className="font-display text-xl font-semibold mb-2">Innovation Software Developer</h4>
                  <p className="text-muted-foreground font-body text-sm mb-3">Renault Technology Spain</p>
                  <ul className="text-muted-foreground font-body text-sm space-y-2 list-disc list-outside pl-5">
                    <li>
                      Implementation and maintenance of secure middleware for bidirectional communication in autonomous vehicle teleoperation systems
                    </li>
                    <li>
                      Software development and validation in Python and Linux environments. Implementation of data collection and analysis systems using Python and SQL
                    </li>
                    <li>
                      Configuration and maintenance of CAN/MQTT communication for critical data transmission
                    </li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-gold/30 pl-6">
                  <p className="text-gold font-body text-sm mb-1">Apr 2024 - Aug. 2024</p>
                  <h4 className="font-display text-xl font-semibold mb-2">Narrative Designer</h4>
                  <p className="text-muted-foreground font-body text-sm mb-3">Gamez Studio</p>
                  <ul className="text-muted-foreground font-body text-sm space-y-2 list-disc list-outside pl-5">
                    <li>Wrote character dialogue and backstories, creating relationships and character arcs</li>
                    <li>Created world-building documentation for game environments</li>
                    <li>Implemented narrative systems in Unreal Engine 5</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="card-elevated border-gradient-gold rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gold/10 text-gold">
                  <GraduationCap  size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Academic background
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 ml-16 mb-8">
                <div className="border-l-2 border-gold/30 pl-6">
                  <p className="text-gold font-body text-sm mb-1">2025 - 2026</p>
                  <h4 className="font-display text-xl font-semibold mb-2">Master´s in Cybersecurity</h4>
                  <p className="text-muted-foreground font-body text-sm">University of Salamanca</p>
                </div>
              </div>

              <div className="space-y-6 ml-16">
                <div className="border-l-2 border-gold/30 pl-6">
                  <p className="text-gold font-body text-sm mb-1">2021 - 2025</p>
                  <h4 className="font-display text-xl font-semibold mb-2">Bachelor’s Degree in Interactive 3D Applications and Video Game Development </h4>
                  <p className="text-muted-foreground font-body text-sm">University of Salamanca</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="card-elevated border-gradient-gold rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gold/10 text-gold">
                  <Award  size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-2">Certifications</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Certifications and courses
                  </p>
                </div>
              </div>
              <div className="space-y-6 ml-16 mb-8">
                <div className="border-l-2 border-gold/30 pl-6">
                  <p className="text-gold font-body text-sm mb-1">2024</p>
                  <h4 className="font-display text-xl font-semibold mb-2">Briefing & Script Creation</h4>
                  <p className="text-muted-foreground font-body text-sm">El Jap! (Salamanca)</p>
                </div>
              </div>
              <div className="space-y-6 ml-16">
                <div className="border-l-2 border-gold/30 pl-6">
                  <p className="text-gold font-body text-sm mb-1">2023</p>
                  <h4 className="font-display text-xl font-semibold mb-2">Narrative in Videogames</h4>
                  <p className="text-muted-foreground font-body text-sm">Penguin Editorial</p>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="card-elevated border-gradient-gold rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gold/10 text-gold">
                  <Wrench size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-2">Tools</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Technical proficiencies and software knowledge
                  </p>
                </div>
              </div>
              
              <div className="ml-16">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-display text-lg font-semibold mb-3 text-gold">Writing Tools</h4>
                    <ul className="text-muted-foreground font-body text-sm space-y-2">
                      <li>• Twine / Obsidian</li>
                      <li>• Articy Draft</li>
                      <li>• Draw.io</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold mb-3 text-gold">Game Engines</h4>
                    <ul className="text-muted-foreground font-body text-sm space-y-2">
                      <li>• Unreal Engine 5</li>
                      <li>• Unity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
