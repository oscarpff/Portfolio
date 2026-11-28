import { useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useScrolled } from "@/hooks/use-scrolled";

const navItems = [
  { label: "Competencies", href: "#skills" },
  { label: "Experience", href: "#cv" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
];

const CyberNavigation = () => {
  const isScrolled = useScrolled();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/cybersecurity") {
      // If already on cybersecurity, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to cybersecurity and scroll to top
      navigate("/cybersecurity");
      setTimeout(() => window.scrollTo(0, 0), 0);
    }
  };

  const handleNavClick = (href: string) => {
    // Si estamos en la página principal de cybersecurity, scroll al ancla
    if (location.pathname === "/cybersecurity") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en una subpágina, navegar a /cybersecurity con el hash
      navigate(`/cybersecurity${href}`);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-cyber/20" : ""
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            onClick={() => window.scrollTo(0, 0)}
            className="text-cyber hover:text-cyber-glow transition-colors hidden sm:block"
          >
            <Home className="w-5 h-5" />
          </Link>
          <button 
            onClick={handleLogoClick}
            className="font-display text-2xl font-semibold text-cyber hover:text-cyber-glow transition-colors"
          >
            Oscarpf
          </button>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <button 
                onClick={() => handleNavClick(item.href)}
                className="font-body text-sm text-cyber hover:text-cyber-glow transition-colors duration-300"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-cyber/20 transition-all duration-300 ${
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        <ul className="container mx-auto px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <button 
                onClick={() => handleNavClick(item.href)}
                className="block font-body text-lg text-cyber hover:text-cyber-glow transition-colors duration-300 w-full text-left"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default CyberNavigation;
