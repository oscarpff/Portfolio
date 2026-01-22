import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const CVSection = () => {
  return (
    <section id="cv" className="py-24 md:py-32 bg-background">
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
              A comprehensive overview of my journey as a narrative designer, 
              including education, work experience, and achievements.
            </p>
            <Button variant="gold" size="lg">
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
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
                  <p className="text-gold font-body text-sm mb-1">2023 - Present</p>
                  <h4 className="font-display text-xl font-semibold mb-2">Senior Narrative Designer</h4>
                  <p className="text-muted-foreground font-body text-sm mb-3">Company Name</p>
                  <ul className="text-muted-foreground font-body text-sm space-y-2 list-disc list-inside">
                    <li>Lead narrative development for AAA title</li>
                    <li>Designed branching quest systems</li>
                    <li>Collaborated with game design and art teams</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-gold/30 pl-6">
                  <p className="text-gold font-body text-sm mb-1">2020 - 2023</p>
                  <h4 className="font-display text-xl font-semibold mb-2">Narrative Designer</h4>
                  <p className="text-muted-foreground font-body text-sm mb-3">Previous Company</p>
                  <ul className="text-muted-foreground font-body text-sm space-y-2 list-disc list-inside">
                    <li>Wrote character dialogue and backstories</li>
                    <li>Created world-building documentation</li>
                    <li>Implemented narrative systems in Unity</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="card-elevated border-gradient-gold rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gold/10 text-gold">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Academic background and qualifications
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 ml-16">
                <div className="border-l-2 border-gold/30 pl-6">
                  <p className="text-gold font-body text-sm mb-1">2016 - 2020</p>
                  <h4 className="font-display text-xl font-semibold mb-2">Bachelor's Degree in Creative Writing</h4>
                  <p className="text-muted-foreground font-body text-sm">University Name</p>
                </div>
              </div>
            </div>

            {/* Skills & Certifications */}
            <div className="card-elevated border-gradient-gold rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gold/10 text-gold">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-2">Skills & Tools</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Technical proficiencies and certifications
                  </p>
                </div>
              </div>
              
              <div className="ml-16">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-display text-lg font-semibold mb-3 text-gold">Writing Tools</h4>
                    <ul className="text-muted-foreground font-body text-sm space-y-2">
                      <li>• Twine / Ink</li>
                      <li>• Articy Draft</li>
                      <li>• Final Draft</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold mb-3 text-gold">Game Engines</h4>
                    <ul className="text-muted-foreground font-body text-sm space-y-2">
                      <li>• Unity</li>
                      <li>• Unreal Engine</li>
                      <li>• Godot</li>
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
