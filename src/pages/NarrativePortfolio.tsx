import Navigation from "@/components/narrative/Navigation";
import FeaturedWorks from "@/components/narrative/FeaturedWorks";
import WorkSection from "@/components/narrative/WorkSection";
import AboutSection from "@/components/narrative/AboutSection";
import CVSection from "@/components/narrative/CVSection";
import ContactSection from "@/components/narrative/ContactSection";
import Footer from "@/components/narrative/Footer";

const NarrativePortfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FeaturedWorks />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <CVSection />
      <Footer />
    </div>
  );
};

export default NarrativePortfolio;
