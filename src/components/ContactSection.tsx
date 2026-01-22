import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, FileText } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Let's Create <span className="text-gradient-gold">Together</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="card-elevated border-gradient-gold rounded-lg p-8">
              <form action="https://formspree.io/f/mvzkonzz" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder=""
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder=""
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={6}
                    placeholder=""
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Mail className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Links */}
            <div className="space-y-6">
              <div className="card-elevated border-gradient-gold rounded-lg p-8">
                <h3 className="font-display text-2xl font-semibold mb-4">Connect With Me</h3>
                <p className="text-muted-foreground font-body mb-6">
                  Feel free to reach out through the form or connect with me on social media.
                </p>
                
                <div className="space-y-3">
                  <Button variant="goldOutline" size="lg" asChild className="w-full justify-start">
                    <a href="mailto:hello@example.com">
                      <Mail className="mr-2" size={20} />
                      pefer.oscar@gmail.com
                    </a>
                  </Button>
                  <Button variant="goldOutline" size="lg" asChild className="w-full justify-start">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2" size={20} />
                      LinkedIn Profile
                    </a>
                  </Button>
                  <Button variant="goldOutline" size="lg" asChild className="w-full justify-start">
                    <a href="https://www.linkedin.com/in/oscarperez-cybersecurity/" target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2" size={20} />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>

              {/* Decorative quote */}
              <div className="card-elevated border-gradient-gold rounded-lg p-8">
                <blockquote className="font-display text-lg italic text-foreground/90 leading-relaxed">
                  "The best stories are the ones we tell together—where every player becomes 
                  a co-author of something meaningful."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
