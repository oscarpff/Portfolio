import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Writeups", href: "#writeups" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const CyberNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === "/cybersecurity") {
      navigate("/");
    } else {
      navigate("/cybersecurity");
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-cyber/20" : ""
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 transition-colors hidden sm:block">
            <Home className="w-5 h-5" />
          </Link>
          <button 
            onClick={handleLogoClick}
            className="font-display text-2xl font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Oscarpf
          </button>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className="font-body text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                {item.label}
              </a>
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
              <a 
                href={item.href}
                className="block font-body text-lg text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default CyberNavigation;
