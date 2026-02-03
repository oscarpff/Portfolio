import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, FileText, Github } from "lucide-react";

const CyberContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-cyber font-mono text-sm tracking-[0.3em] uppercase mb-4">
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Let's <span className="text-gradient-cyber">Connect</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="card-cyber border-gradient-cyber rounded-lg p-8">
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
                    className="bg-background border-cyber/20 focus:border-cyber"
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
                    className="bg-background border-cyber/20 focus:border-cyber"
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
                    className="bg-background border-cyber/20 focus:border-cyber resize-none"
                  />
                </div>

                <Button type="submit" variant="cyber" size="lg" className="w-full">
                  <Mail className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Links */}
            <div className="space-y-6">
              <div className="card-cyber border-gradient-cyber rounded-lg p-8">
                <h3 className="font-display text-2xl font-semibold mb-4">Connect With Me</h3>
                <p className="text-muted-foreground font-body mb-6">
                  Looking for SOC Analyst opportunities. Feel free to reach out!
                </p>
                
                <div className="space-y-3">
                  <Button variant="cyberOutline" size="lg" asChild className="w-full justify-start">
                    <a href="https://www.linkedin.com/in/oscarperez-cybersecurity/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2" size={20} />
                      LinkedIn Profile
                    </a>
                  </Button>
                  <Button variant="cyberOutline" size="lg" asChild className="w-full justify-start">
                    <a href="https://github.com/oscarpff" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={20} />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>

              {/* Status indicator */}
              <div className="card-cyber border-gradient-cyber rounded-lg p-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-terminal animate-pulse" />
                  <span className="font-mono text-sm text-terminal">Available for opportunities</span>
                </div>
                <p className="mt-3 text-muted-foreground text-sm">
                  Actively seeking SOC L1 / Junior Security Analyst positions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberContactSection;
