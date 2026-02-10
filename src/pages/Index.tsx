import Navigation from "@/components/narrative/Navigation";
import Hero from "@/components/narrative/Hero";
import WorkSection from "@/components/narrative/WorkSection";
import AboutSection from "@/components/narrative/AboutSection";
import CVSection from "@/components/narrative/CVSection";
import ContactSection from "@/components/narrative/ContactSection";
import Footer from "@/components/narrative/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <CVSection />

      <Footer />
    </div>
  );
};

export default Index;
