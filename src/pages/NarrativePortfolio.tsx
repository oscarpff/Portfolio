import Navigation from "@/components/Navigation";
import FeaturedWorks from "@/components/FeaturedWorks";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import CVSection from "@/components/CVSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
