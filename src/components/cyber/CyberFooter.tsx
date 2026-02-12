import { Link, useLocation, useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

const CyberFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Si estamos en /cybersecurity, ir a split
    if (location.pathname === "/cybersecurity") {
      navigate("/");
      setTimeout(() => window.scrollTo(0, 0), 0);
    }
    // Si estamos en un proyecto de cybersecurity, ir a /cybersecurity
    else {
      navigate("/cybersecurity");
      setTimeout(() => window.scrollTo(0, 0), 0);
    }
  };

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
          
          <button
            onClick={handleBackClick}
            className="text-sm text-muted-foreground hover:text-cyber transition-colors font-mono"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </footer>
  );
};

export default CyberFooter;
