import Navbar from "@/components/Navbar";
import EducationSection from "@/components/EducationSection";

const Education = () => (
  <main className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <EducationSection />
    </div>
    <footer className="text-center py-8 text-sm text-muted-foreground border-t border-border">
      © {new Date().getFullYear()} Kuceli Susan Englama. All rights reserved.
    </footer>
  </main>
);

export default Education;
