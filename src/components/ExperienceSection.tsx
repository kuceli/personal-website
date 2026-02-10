import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Homeward Technology Inc.",
    period: "Jul 2025 – Present",
    location: "Remote, USA",
    highlights: [
      "Design and maintain scalable applications optimizing key business processes",
      "Full SDLC collaboration — coding, testing, debugging, and deployment",
    ],
  },
  {
    role: "IT Associate Board Member",
    company: "Museum of Political Corruption",
    period: "Feb 2025 – Present",
    location: "Remote, USA",
    highlights: [
      "Designed 3D virtual museum interfaces, increasing engagement by 30%",
      "SEO & accessibility improvements driving 20% increase in organic traffic",
    ],
  },
  {
    role: "Front End Developer",
    company: "MeasureMe, LLC",
    period: "Jul 2024 – Jun 2025",
    location: "Remote, USA",
    highlights: [
      "Built React + Tailwind maintenance page, reducing support inquiries by 95%",
      "Enhanced frontend features with TypeScript for improved stability",
    ],
  },
  {
    role: "Front End Developer",
    company: "uTECH – Emission Analyzer Project",
    period: "Sep 2023 – May 2024",
    location: "Cornell University",
    highlights: [
      "Built accessible ReactJS components for environmental data visualization",
      "Figma mockups accelerated design-to-dev workflows by 30%",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-[140px]" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-[180px]"
              >
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary md:left-[137px]" />
                <span className="hidden md:block absolute left-0 top-0 text-sm text-muted-foreground font-body w-[120px]">
                  {exp.period.split("–")[0].trim()}
                </span>

                <div>
                  <h3 className="font-display text-xl md:text-2xl mb-1">{exp.role}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{exp.company}</p>
                  <p className="text-muted-foreground text-xs mb-4 md:hidden">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
