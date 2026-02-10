import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl mb-6"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-secondary-foreground/70 text-lg mb-12 max-w-lg mx-auto"
        >
          I'm always open to discussing new opportunities, collaborations, or just chatting about tech.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:kse47@cornell.edu"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/kucelienglama"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-secondary-foreground/20 text-secondary-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com/kuceli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-secondary-foreground/20 text-secondary-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
