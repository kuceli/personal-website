import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <footer className="text-center py-8 text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Kuceli Susan Englama. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
