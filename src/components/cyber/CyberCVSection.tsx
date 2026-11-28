import {
  Award,
  Briefcase,
  Download,
  ExternalLink,
  GraduationCap,
  Languages,
  ShieldCheck,
  User,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import {
  CV_PDF_FILENAME,
  CV_PDF_URL,
  cvCertificates,
  cvClearance,
  cvEducation,
  cvExperience,
  cvLanguages,
  cvProfile,
  cvSkills,
} from "@/data/cyberCV";

function CVCard({
  icon: Icon,
  title,
  subtitle,
  children,
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="card-cyber border-gradient-cyber rounded-lg p-6 md:p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-lg bg-cyber/10 border border-cyber/20 text-cyber">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold mb-1">{title}</h3>
          {subtitle && <p className="text-muted-foreground font-body text-sm">{subtitle}</p>}
        </div>
      </div>
      {children}
    </div>
  );
}

const CyberCVSection = () => {
  return (
    <section id="cv" className="py-20 md:py-24 bg-ink/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-cyber font-mono text-sm tracking-[0.3em] uppercase mb-4">
              Curriculum Vitae
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Professional <span className="text-gradient-cyber">Experience</span>
            </h2>
            <p className="text-cyber/80 font-mono text-sm mb-8">{cvProfile.title}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={CV_PDF_URL}
                download={CV_PDF_FILENAME}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyber text-background font-body font-semibold hover:glow-cyber transition-all"
              >
                <Download size={18} />
                Download CV (PDF)
              </a>
              <a
                href={CV_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-cyber/40 text-cyber font-body hover:bg-cyber/10 transition-colors"
              >
                <ExternalLink size={18} />
                View online
              </a>
            </div>
          </div>

          <div className="space-y-8">
            {/* Profile */}
            <CVCard icon={User} title="Profile">
              <p className="text-muted-foreground font-body leading-relaxed">{cvProfile.summary}</p>
            </CVCard>

            {/* Experience */}
            <CVCard icon={Briefcase} title="Work Experience" subtitle="Professional roles and responsibilities">
              <div className="space-y-6 md:ml-16">
                {cvExperience.map((job) => (
                  <div key={job.company + job.period} className="border-l-2 border-cyber/30 pl-6">
                    <p className="text-cyber font-mono text-sm mb-1">{job.period}</p>
                    <h4 className="font-display text-xl font-semibold mb-1">{job.role}</h4>
                    <p className="text-muted-foreground font-body text-sm italic mb-3">{job.company}</p>
                    <ul className="text-muted-foreground font-body text-sm space-y-2 list-disc list-outside pl-5">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CVCard>

            {/* Education */}
            <CVCard icon={GraduationCap} title="Education" subtitle="Academic background">
              <div className="space-y-6 md:ml-16">
                {cvEducation.map((ed) => (
                  <div key={ed.degree} className="border-l-2 border-cyber/30 pl-6">
                    <p className="text-cyber font-mono text-sm mb-1">{ed.period}</p>
                    <h4 className="font-display text-xl font-semibold mb-1">{ed.degree}</h4>
                    <p className="text-muted-foreground font-body text-sm italic mb-2">{ed.school}</p>
                    <p className="text-muted-foreground font-body text-sm">
                      <span className="text-foreground font-semibold">{ed.thesisLabel}:</span> {ed.thesis}
                    </p>
                  </div>
                ))}
              </div>
            </CVCard>

            {/* Skills */}
            <CVCard icon={Wrench} title="Skills" subtitle="Areas of expertise and tools">
              <div className="grid sm:grid-cols-2 gap-6 md:ml-16">
                {cvSkills.map((group) => (
                  <div key={group.area}>
                    <h4 className="font-mono text-sm font-semibold mb-3 text-cyber">{group.area}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 bg-secondary/50 rounded-lg text-sm font-body text-secondary-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 md:ml-16 flex items-start gap-3 p-4 rounded-lg border border-terminal/30 bg-terminal/10">
                <ShieldCheck className="w-5 h-5 text-terminal flex-shrink-0 mt-0.5" />
                <p className="text-sm font-body text-muted-foreground">
                  <span className="text-terminal font-semibold">Security Clearance: </span>
                  {cvClearance}
                </p>
              </div>
            </CVCard>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Certificates */}
              <CVCard icon={Award} title="Certificates">
                <ul className="space-y-4">
                  {cvCertificates.map((c) => (
                    <li key={c.name} className="border-l-2 border-cyber/30 pl-4">
                      <p className="text-cyber font-mono text-xs mb-1">{c.year}</p>
                      <p className="font-display text-lg font-semibold leading-tight">{c.name}</p>
                      <p className="text-muted-foreground text-sm">{c.issuer}</p>
                    </li>
                  ))}
                </ul>
              </CVCard>

              {/* Languages */}
              <CVCard icon={Languages} title="Languages">
                <ul className="space-y-3">
                  {cvLanguages.map((l) => (
                    <li key={l.language} className="flex items-center justify-between border-b border-cyber/10 pb-2">
                      <span className="font-body text-foreground">{l.language}</span>
                      <span className="font-mono text-sm text-cyber">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </CVCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberCVSection;
