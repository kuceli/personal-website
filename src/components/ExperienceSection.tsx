import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Homeward Technology Inc.",
    period: "Jul 2025 – Present",
    location: "Remote, USA",
    highlights: [
      "Improved SEO and accessibility across multiple WordPress platforms, increasing visibility and usability for diverse user groups",
      "Supported Agile delivery by clarifying requirements, refining tasks, and ensuring alignment between technical implementation and business goals",
    ],
  },
  {
    role: "Information Technology Board Member",
    company: "Museum of Political Corruption",
    period: "Feb 2025 – Present",
    location: "Remote, USA",
    highlights: [
      "Directed digital product roadmap, increasing visitor engagement time by 30%",
      "Partnered with cross-functional teams to design and launch interactive 3D exhibits aligned with institutional goals",
      "Collaborated with stakeholders to define requirements, build digital assets, and create landing pages supporting museum programs",
    ],
  },
  {
    role: "Front End Developer",
    company: "MeasureMe, LLC",
    period: "Jul 2024 – Oct 2024",
    location: "Remote, USA",
    highlights: [
      "Delivered a customer-facing landing page that reduced support inquiries by 95% during downtime",
      "Strengthened frontend architecture using TypeScript, improving responsiveness, reliability, and maintainability",
      "Worked closely with product and engineering teams to refine features and ensure a seamless user experience",
    ],
  },
  {
    role: "Front End Developer",
    company: "uTECH – Nationwide Emission Analyzer Project",
    period: "Sep 2023 – May 2024",
    location: "Cornell University, NY",
    highlights: [
      "Defined and documented feature requirements for real-time emission dashboards supporting multi-agency compliance",
      "Designed Figma prototypes that reduced design-to-development cycles by 30%",
      "Built accessible React components and integrated a secure real-time API exchange to enhance compliance reporting",
    ],
  },
  {
    role: "Founding Board Member, COO",
    company: "Visqorium",
    period: "Jul 2020 – Sep 2022",
    location: "Remote, Nigeria",
    highlights: [
      "Built operational structure and led a 6-member team delivering blockchain and NFT solutions",
      "Authored investor briefs and technical documentation, increasing engagement by 15%",
      "Facilitated Agile ceremonies, including standups and sprint reviews, to inspect and adapt product development",
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
