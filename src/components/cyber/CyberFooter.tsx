import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const CyberFooter = () => {
  return (
    <footer className="py-12 border-t border-cyber/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyber" />
            <span className="font-display text-lg font-semibold text-gradient-cyber">
              Oscarpf
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm font-body text-center">
            © {new Date().getFullYear()} Óscar Pérez Fernández. All rights reserved.
          </p>
          
          <Link 
            to="/" 
            className="text-sm text-muted-foreground hover:text-cyber transition-colors font-mono"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default CyberFooter;
