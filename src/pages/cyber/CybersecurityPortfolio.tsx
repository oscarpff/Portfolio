import CyberNavigation from "@/components/cyber/CyberNavigation";
import CyberHero from "@/components/cyber/CyberHero";
import SkillsSection from "@/components/cyber/SkillsSection";
import CyberCVSection from "@/components/cyber/CyberCVSection";
import CertificationsSection from "@/components/cyber/CertificationsSection";
import ProjectsSection from "@/components/cyber/ProjectsSection";
import TechnicalLabSection from "@/components/cyber/TechnicalLabSection";
import CyberContactSection from "@/components/cyber/CyberContactSection";
import CyberFooter from "@/components/cyber/CyberFooter";

const CybersecurityPortfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <CyberNavigation />
      <CyberHero />
      <SkillsSection />
      <CyberCVSection />
      <CertificationsSection />
      <ProjectsSection />
      <TechnicalLabSection />
      <CyberContactSection />
      <CyberFooter />
    </div>
  );
};

export default CybersecurityPortfolio;
