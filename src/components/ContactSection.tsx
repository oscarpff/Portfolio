import { Button } from "@/components/ui/button";
import { Mail, Linkedin, FileText } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Let's Create <span className="text-gradient-gold">Together</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12 leading-relaxed">
            Looking for a narrative designer who can bring depth and meaning to your project? 
            I'd love to hear about what you're building.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:hello@example.com">
                <Mail className="mr-2" size={20} />
                Get in Touch
              </a>
            </Button>
            <Button variant="goldOutline" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </a>
            </Button>
            <Button variant="goldOutline" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2" size={20} />
                Resume
              </a>
            </Button>
          </div>

          {/* Decorative quote */}
          <div className="card-elevated border-gradient-gold rounded-lg p-8 md:p-12 max-w-2xl mx-auto">
            <blockquote className="font-display text-xl md:text-2xl italic text-foreground/90 leading-relaxed">
              "The best stories are the ones we tell together—where every player becomes 
              a co-author of something meaningful."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
