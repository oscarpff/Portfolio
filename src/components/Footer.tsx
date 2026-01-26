import { Link } from "react-router-dom";
import { Feather } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Feather className="w-5 h-5 text-gold" />
            <span className="font-display text-lg font-semibold text-gradient-gold">
              Oscarpf
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm font-body text-center">
            © {new Date().getFullYear()} Óscar Pérez Fernández. All rights reserved.
          </p>
          
          <Link 
            to="/" 
            className="text-sm text-muted-foreground hover:text-gold transition-colors font-body"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
