import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

const Contact = () => (
  <main className="min-h-screen">
    <Navbar />
    <div className="pt-16">
      <ContactSection />
    </div>
    <footer className="text-center py-8 text-sm text-muted-foreground border-t border-border">
      © {new Date().getFullYear()} Kuceli Susan Englama. All rights reserved.
    </footer>
  </main>
);

export default Contact;
