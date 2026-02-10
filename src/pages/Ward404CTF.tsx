import { useEffect } from "react";
import { ArrowLeft, ClipboardList, ExternalLink, FileSearch, Flag, Network, Terminal, Users } from "lucide-react";
import { Link } from "react-router-dom";
import CyberNavigation from "@/components/cyber/CyberNavigation";
import CyberFooter from "@/components/cyber/CyberFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const challengeCards = [
  {
    title: "Challenge 01 — Medical Records",
    category: "OSINT",
    description: "Identification of Hospital Saint Anima and first evidence of Project ANIMA.",
    icon: FileSearch,
  },
  {
    title: "Challenge 02 — Patient Without Discharge",
    category: "OSINT",
    description: "Analysis of patient records and connection to unauthorized experimentation.",
    icon: FileSearch,
  },
  {
    title: "Challenge 03 — Nurse Post",
    category: "SOCMINT",
    description: "Recovery of evidence from social media of shift B personnel.",
    icon: Users,
  },
  {
    title: "Challenge 04 — Shift B Group",
    category: "SOCMINT",
    description: "Infiltration of private communications to reconstruct key conversations.",
    icon: Users,
  },
  {
    title: "Challenge 05 — South Wing Server",
    category: "CTI",
    description: "Network logs reading and detection of anomalous communication patterns.",
    icon: Network,
  },
  {
    title: "Challenge 06 — Project ANIMA",
    category: "CTI",
    description: "Digital forensics and confirmation of sensitive data exfiltration.",
    icon: Network,
  },
  {
    title: "Challenge 07 — Escape",
    category: "Pentest",
    description: "Final access with FLAG combination and guided environment exploitation.",
    icon: Terminal,
  },
];

const Ward404CTF = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CyberNavigation />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <Link
            to="/cybersecurity"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-cyber transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-body">Back to Cybersecurity</span>
          </Link>

          <header className="mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyber/10 border border-cyber/20">
                    <Flag className="w-6 h-6 text-cyber" />
                  </div>
                  <p className="text-cyber font-mono text-xs tracking-[0.3em] uppercase">
                    CTF · Ward404
                  </p>
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">
                  Ward 404 — <span className="text-gradient-cyber">Hospital Saint Anima</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-3xl">
                  Narrative CTF simulating a real investigation in a compromised hospital. Combines OSINT, SOCMINT, CTI, and a final pentest challenge to reconstruct the evidence chain of Project ANIMA.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "OSINT",
                  "SOCMINT",
                  "CTI",
                  "Pentest",
                  "Narrative CTF",
                  "2025",
                ].map((tag) => (
                  <Badge key={tag} variant="outline" className="border-cyber/30 text-cyber">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </header>

          <section id="overview" className="mb-12">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 card-cyber border-gradient-cyber rounded-lg p-6">
                <h2 className="font-display text-2xl font-semibold mb-3">
                  Scenario <span className="text-gradient-cyber">Brief</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  An encrypted communication connects a British institution with Hospital Saint Anima in Madrid. In parallel, massive deletion of medical records is detected. The investigation team has less than 72 hours to recover evidence before backups are overwritten. Each challenge provides a piece of the puzzle.
                </p>
              </div>
              <div className="card-cyber border-gradient-cyber rounded-lg p-6">
                <h3 className="font-display text-xl font-semibold mb-3">Focus Areas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ClipboardList className="w-4 h-4 text-cyber mt-1" />
                    OSINT investigation with open sources.
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardList className="w-4 h-4 text-cyber mt-1" />
                    SOCMINT applied to social media.
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardList className="w-4 h-4 text-cyber mt-1" />
                    CTI, log analysis and data exfiltration.
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardList className="w-4 h-4 text-cyber mt-1" />
                    Final pentest based on composite flags.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="challenges" className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6">
              Challenge <span className="text-gradient-cyber">Map</span>
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {challengeCards.map((challenge) => (
                <div
                  key={challenge.title}
                  className="card-cyber border-gradient-cyber rounded-lg p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-cyber/10 border border-cyber/20">
                      <challenge.icon className="w-5 h-5 text-cyber" />
                    </div>
                    <div>
                      <p className="text-xs font-mono tracking-[0.2em] text-cyber uppercase">
                        {challenge.category}
                      </p>
                      <h3 className="font-display text-lg font-semibold">
                        {challenge.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="deliverables" className="mb-12">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="card-cyber border-gradient-cyber rounded-lg p-6">
                <h2 className="font-display text-2xl font-semibold mb-3">
                  Deliverables
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Narrative landing page with confidential briefing and guided access.</li>
                  <li>Six investigation challenges with integrated hints and resources.</li>
                  <li>Final pentest challenge unlocked by composite flags.</li>
                  <li>Final summary with results and closing narrative.</li>
                </ul>
              </div>
              <div className="card-cyber border-gradient-cyber rounded-lg p-6">
                <h2 className="font-display text-2xl font-semibold mb-3">
                  Skills Practiced
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Structured investigation and evidence correlation.</li>
                  <li>Tactical OSINT with source cross-validation.</li>
                  <li>CTI: log reading, anomaly detection, and light forensics.</li>
                  <li>CTF flow design with coherent and progressive narrative.</li>
                </ul>
              </div>
            </div>
          </section>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground font-body mb-6">
                Play the CTF and discover the truth behind Project ANIMA.
              </p>
              <Button variant="cyberOutline" size="lg" asChild>
                <a href="https://oscarpff.github.io/Ward404-CTF/" target="_blank" rel="noopener noreferrer">
                  Play Ward404 CTF
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>

        </div>
      </main>

      <CyberFooter />
    </div>
  );
};

export default Ward404CTF;
