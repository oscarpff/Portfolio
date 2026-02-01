import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavSection {
  id: string;
  label: string;
}

const sections: NavSection[] = [
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "lore", label: "World History" },
  { id: "factions", label: "Factions" },
  { id: "systems", label: "Resources" },
  { id: "enemies", label: "Enemies" },
  { id: "events", label: "Events" },
  { id: "glossary", label: "Glossary" },
];

const TravnikNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 rounded-full w-12 h-12 p-0 bg-gold hover:bg-gold/90 shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Navigation Panel */}
      <div
        className={`fixed bottom-20 right-6 z-40 bg-card border border-border rounded-lg shadow-xl transition-all duration-300 w-fit ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-1">
          <nav className="flex flex-col gap-0.5">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-left px-2.5 py-1 text-s rounded-md transition-colors font-body whitespace-nowrap ${
                  activeSection === section.id
                    ? "bg-gold/10 text-gold font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default TravnikNavigation;
