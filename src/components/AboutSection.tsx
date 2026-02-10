import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "PHP", "SQL", "Java"] },
  { category: "Frameworks", items: ["React", "Tailwind CSS", "Framer Motion", "Django"] },
  { category: "Tools", items: ["Git", "Figma", "Adobe XD", "VS Code", "Jira", "Confluence"] },
  { category: "AI & Data", items: ["Python", "ML Fundamentals", "Data Analysis"] },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a Software Engineer with a Master of Engineering in Computer Science from Cornell University.
              I specialize in building responsive, accessible frontend applications using React, TypeScript, and modern web technologies.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond engineering, I co-founded The Favor Busam Foundation, securing educational sponsorships for 300+ children in Nigeria.
              I believe technology should serve people — and I bring that philosophy to everything I build.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {skills.map(({ category, items }) => (
              <div key={category}>
                <h3 className="font-body font-semibold text-sm uppercase tracking-widest text-primary mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-sm bg-muted text-muted-foreground border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
