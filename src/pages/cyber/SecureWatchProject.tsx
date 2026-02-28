import { useEffect } from "react";
import { ArrowLeft, ShieldAlert, BarChart3, Filter, Bell, Clock, FileText, ExternalLink, Download } from "lucide-react";
import { Link } from "react-router-dom";
import CyberNavigation from "@/components/cyber/CyberNavigation";
import CyberFooter from "@/components/cyber/CyberFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Dashboard with Real-Time Metrics",
    category: "Analytics",
    description: "Comprehensive overview with live statistics, incident distribution by type and severity, and status monitoring.",
    icon: BarChart3,
  },
  {
    title: "Advanced Filtering System",
    category: "Search",
    description: "Filter incidents by type, severity, status, date range, and affected systems for quick access to relevant information.",
    icon: Filter,
  },
  {
    title: "Incident Lifecycle Management",
    category: "Workflow",
    description: "Complete tracking from detection to closure with status transitions: Open → Under Investigation → Mitigated → Closed.",
    icon: Clock,
  },
  {
    title: "Detailed Documentation",
    category: "Records",
    description: "Comprehensive incident records with follow-up notes, attachments, detection details, and resolution documentation.",
    icon: FileText,
  },
  {
    title: "Multi-Language Support",
    category: "i18n",
    description: "Full interface translation between English and Spanish for international security teams.",
    icon: Bell,
  },
  {
    title: "Export & Reporting",
    category: "Reports",
    description: "Export incident data and generate reports for compliance documentation and stakeholder communication.",
    icon: FileText,
  },
];

const SecureWatchProject = () => {
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
                    <img src={getAssetUrl("/projects/icon.svg")} alt="SecureWatch Icon" className="w-6 h-6" />
                  </div>
                  <p className="text-cyber font-mono text-xs tracking-[0.3em] uppercase">
                    Incident Manager
                  </p>
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">
                  SecureWatch — <span className="text-gradient-cyber">Incident Manager</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-3xl">
                  Professional incident response management system designed for security operations centers. Features real-time metrics, advanced filtering, comprehensive tracking, and intuitive workflow management for security incidents.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Incident Response",
                  "Dashboard",
                  "2026",
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
                  Project <span className="text-gradient-cyber">Overview</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SecureWatch is a modern incident management platform built for security teams who need to track, investigate, and resolve security incidents efficiently. The application provides a centralized hub for incident documentation, status tracking, and team collaboration.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Designed with usability in mind, SecureWatch offers an intuitive interface that doesn't sacrifice functionality. From automated metrics to detailed incident records with attachments and follow-up notes, every feature is crafted to support the incident response workflow.
                </p>
              </div>
              <div className="card-cyber border-gradient-cyber rounded-lg p-6">
                <h3 className="font-display text-xl font-semibold mb-3">Core Capabilities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-cyber mt-1" />
                    Incident lifecycle management
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="w-4 h-4 text-cyber mt-1" />
                    Real-time metrics & analytics
                  </li>
                  <li className="flex items-start gap-2">
                    <Filter className="w-4 h-4 text-cyber mt-1" />
                    Advanced search & filtering
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-cyber mt-1" />
                    Comprehensive documentation
                  </li>
                  <li className="flex items-start gap-2">
                    <Download className="w-4 h-4 text-cyber mt-1" />
                    Export system to share reports
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="features" className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6">
              Key <span className="text-gradient-cyber">Features</span>
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="card-cyber border-gradient-cyber rounded-lg p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-cyber/10 border border-cyber/20">
                      <feature.icon className="w-5 h-5 text-cyber" />
                    </div>
                    <div>
                      <p className="text-xs font-mono tracking-[0.2em] text-cyber uppercase">
                        {feature.category}
                      </p>
                      <h3 className="font-display text-lg font-semibold">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="technical" className="mb-12">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="card-cyber border-gradient-cyber rounded-lg p-6">
                <h2 className="font-display text-2xl font-semibold mb-3">
                  Technical Stack
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong className="text-foreground">Frontend:</strong> React 18 with TypeScript for type-safe development</li>
                  <li><strong className="text-foreground">UI Framework:</strong> shadcn/ui components with Radix UI primitives</li>
                  <li><strong className="text-foreground">Styling:</strong> Tailwind CSS for responsive, modern design</li>
                  <li><strong className="text-foreground">State Management:</strong> React Context API with local storage persistence</li>
                  <li><strong className="text-foreground">Routing:</strong> React Router v6 for seamless navigation</li>
                  <li><strong className="text-foreground">Build Tool:</strong> Vite for fast development and optimized production builds</li>
                </ul>
              </div>
              <div className="card-cyber border-gradient-cyber rounded-lg p-6">
                <h2 className="font-display text-2xl font-semibold mb-3">
                  Design Principles
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong className="text-foreground">User-Centric:</strong> Intuitive interface designed for security analysts under pressure</li>
                  <li><strong className="text-foreground">Performance:</strong> Optimized renders and efficient state management</li>
                  <li><strong className="text-foreground">Accessibility:</strong> WCAG-compliant components for all users</li>
                  <li><strong className="text-foreground">Responsive:</strong> Fully functional across desktop, tablet, and mobile devices</li>
                  <li><strong className="text-foreground">Data Persistence:</strong> Browser-based storage for demo/testing environments</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="incident-types" className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6">
              Incident <span className="text-gradient-cyber">Categories</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { name: "Phishing", severity: "High" },
                { name: "Malware", severity: "Critical" },
                { name: "Unauthorized Access", severity: "Critical" },
                { name: "Data Leak", severity: "High" },
                { name: "Other", severity: "Variable" },
              ].map((type) => (
                <div
                  key={type.name}
                  className="card-cyber border-gradient-cyber rounded-lg p-4 text-center"
                >
                  <h3 className="font-display text-base font-semibold mb-1">
                    {type.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Typical: {type.severity}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-body mb-6">
              Try SecureWatch!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="cyberOutline" size="lg" asChild>
                <a href="https://oscarpff.github.io/incident-watcher" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Try Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <CyberFooter />
    </div>
  );
};

export default SecureWatchProject;
