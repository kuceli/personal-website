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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Photo side */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[45%]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="h-full"
        >
          <img
            src={profilePhoto}
            alt="Kuceli Susan Englama"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background" />
        </motion.div>
      </div>

      {/* Content side */}
      <div className="w-full md:ml-[45%] section-padding">
        <div className="max-w-2xl">
          {/* Mobile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:hidden w-48 h-48 rounded-full overflow-hidden mx-auto mb-8 border-4 border-primary/20"
          >
            <img
              src={profilePhoto}
              alt="Kuceli Susan Englama"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

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
            <div className="w-20 h-1 bg-primary mb-8" />
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
            className="flex flex-wrap gap-4 mb-8"
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
            className="flex gap-4"
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
      </div>
    </section>
  );
};

export default HeroSection;
