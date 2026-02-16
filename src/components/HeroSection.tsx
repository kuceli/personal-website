import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const socials = [
  { icon: Github, href: "https://github.com/kuceli", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kucelienglama", label: "LinkedIn" },
  { icon: Mail, href: "mailto:kse47@cornell.edu", label: "Email" },
  { icon: ExternalLink, href: "https://medium.com/@englamakuceli", label: "Medium" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      <div className="relative z-10 w-full flex flex-col-reverse md:flex-row items-center md:items-center md:justify-between gap-10 max-w-6xl mx-auto">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-body font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-2"
          >
            Kuceli Susan
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-4">
              <span className="text-gradient">Englama</span>
            </h1>
            <div className="w-20 h-1 bg-primary mb-8 mx-auto md:mx-0" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed"
          >
            Frontend developer & Cornell M.Eng graduate crafting accessible, performant web experiences.
            Passionate about building products that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start"
          >
            <a
              href="https://drive.google.com/file/d/1wNuPvouf5B2wOCUlL12FuCo-twj03Rnp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Resumé
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Photo on the right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 relative shrink-0"
        >
          <div
            className="w-full h-full overflow-hidden"
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          >
            <img
              src={profilePhoto}
              alt="Kuceli Susan Englama"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div
            className="absolute inset-0 border-2 border-primary/30 translate-x-2 translate-y-2 -z-10"
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
