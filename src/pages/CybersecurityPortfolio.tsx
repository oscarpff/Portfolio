import CyberNavigation from "@/components/cyber/CyberNavigation";
import FeaturedWriteups from "@/components/cyber/FeaturedWriteups";
import WriteupSection from "@/components/cyber/WriteupSection";
import ProjectsSection from "@/components/cyber/ProjectsSection";
import SkillsSection from "@/components/cyber/SkillsSection";
import CertificationsSection from "@/components/cyber/CertificationsSection";
import CyberContactSection from "@/components/cyber/CyberContactSection";
import CyberFooter from "@/components/cyber/CyberFooter";

const CybersecurityPortfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <CyberNavigation />
      <FeaturedWriteups />
      <WriteupSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <CyberContactSection />
      <CyberFooter />
    </div>
  );
};

export default CybersecurityPortfolio;
