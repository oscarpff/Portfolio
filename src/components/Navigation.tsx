import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "CV", href: "#cv" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If we're not on the narrative portfolio page, navigate there first
    if (location.pathname !== "/narrative") {
      navigate("/narrative");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // If we're already on the narrative page, just scroll
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-semibold text-gradient-gold">
          Oscarpf
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-body text-sm text-muted-foreground hover:text-gold transition-colors duration-300 cursor-pointer inline-block"
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
      <div className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300 ${
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        <ul className="container mx-auto px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block font-body text-lg text-muted-foreground hover:text-gold transition-colors duration-300 cursor-pointer py-2"
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

export default Navigation;
