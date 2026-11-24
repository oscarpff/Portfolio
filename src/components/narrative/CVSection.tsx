import { Download, Briefcase, Wrench, Award, GraduationCap, ExternalLink } from "lucide-react";
import {
  CV_PDF_FILENAME,
  CV_PDF_URL,
  cvCertificates,
  cvEducation,
  cvExperience,
  cvLanguages,
  cvSkills,
} from "@/data/cyberCV";

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

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={CV_PDF_URL}
                download={CV_PDF_FILENAME}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-background font-body font-semibold hover:opacity-90 transition-opacity"
              >
                <Download size={18} />
                Download CV (PDF)
              </a>
              <a
                href={CV_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gold/40 text-gold font-body hover:bg-gold/10 transition-colors"
              >
                <ExternalLink size={18} />
                View online
              </a>
            </div>
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
              
              <div className="space-y-6 md:ml-16">
                {cvExperience.map((job) => (
                  <div key={job.company + job.period} className="border-l-2 border-gold/30 pl-6 pb-6">
                    <p className="text-gold font-body text-sm mb-1">{job.period}</p>
                    <h4 className="font-display text-xl font-semibold mb-2">{job.role}</h4>
                    <p className="text-muted-foreground font-body text-sm mb-3">{job.company}</p>
                    <ul className="text-muted-foreground font-body text-sm space-y-2 list-disc list-outside pl-5">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Narrative-only experience (not in the cybersecurity CV PDF) */}
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
              
              <div className="space-y-6 md:ml-16">
                {cvEducation.map((ed) => (
                  <div key={ed.degree} className="border-l-2 border-gold/30 pl-6">
                    <p className="text-gold font-body text-sm mb-1">{ed.period}</p>
                    <h4 className="font-display text-xl font-semibold mb-2">{ed.degree}</h4>
                    <p className="text-muted-foreground font-body text-sm mb-2">{ed.school}</p>
                    <p className="text-muted-foreground font-body text-sm">
                      <span className="text-foreground font-semibold">{ed.thesisLabel}:</span> {ed.thesis}
                    </p>
                  </div>
                ))}
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
              <div className="space-y-6 md:ml-16 mb-6">
                {cvCertificates.map((c) => (
                  <div key={c.name} className="border-l-2 border-gold/30 pl-6">
                    <p className="text-gold font-body text-sm mb-1">{c.year}</p>
                    <h4 className="font-display text-xl font-semibold mb-2">{c.name}</h4>
                    <p className="text-muted-foreground font-body text-sm">{c.issuer}</p>
                  </div>
                ))}
              </div>
              {/* Narrative-only courses (not in the cybersecurity CV PDF) */}
              <div className="space-y-6 md:ml-16 mb-6">
                <div className="border-l-2 border-gold/30 pl-6">
                  <p className="text-gold font-body text-sm mb-1">2024</p>
                  <h4 className="font-display text-xl font-semibold mb-2">Briefing & Script Creation</h4>
                  <p className="text-muted-foreground font-body text-sm">El Jap! (Salamanca)</p>
                </div>
              </div>
              <div className="space-y-6 md:ml-16">
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
              
              <div className="md:ml-16">
                <div className="grid sm:grid-cols-2 gap-6">
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
                  <div>
                    <h4 className="font-display text-lg font-semibold mb-3 text-gold">Programming & Data</h4>
                    <ul className="text-muted-foreground font-body text-sm space-y-2">
                      {(cvSkills.find((s) => s.area === "Programming & Data")?.items ?? []).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold mb-3 text-gold">Languages</h4>
                    <ul className="text-muted-foreground font-body text-sm space-y-2">
                      {cvLanguages.map((l) => (
                        <li key={l.language}>• {l.language} ({l.level})</li>
                      ))}
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
