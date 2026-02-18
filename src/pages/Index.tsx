import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <footer className="text-center py-8 text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Kuceli Susan Englama. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
