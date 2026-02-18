import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";

const About = () => (
  <main className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <AboutSection />
    </div>
    <footer className="text-center py-8 text-sm text-muted-foreground border-t border-border">
      © {new Date().getFullYear()} Kuceli Susan Englama. All rights reserved.
    </footer>
  </main>
);

export default About;
