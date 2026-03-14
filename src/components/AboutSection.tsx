import { motion } from "framer-motion";

const skills = [
  {
    category: "Product Leadership",
    items: [
      "Scrum",
      "Sprint Planning",
      "Backlog Refinement",
      "Product Strategy",
      "Roadmap Planning",
      "UX Research",
      "Requirements Definition",
    ],
  },
  {
    category: "Project Management",
    items: [
      "Agile",
      "Cross-functional Collaboration",
      "Risk Management",
      "WBS",
      "Gantt",
      "Stakeholder Communication",
    ],
  },
  {
    category: "Technical",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind",
      "Python",
      "Django",
      "REST APIs",
      "SQL",
      "WordPress",
      "HTML/CSS",
    ],
  },
  {
    category: "Tools",
    items: [
      "Jira",
      "Confluence",
      "MS Project",
      "Figma",
      "Adobe XD",
      "Git/GitHub",
      "Trello",
      "Google Analytics",
    ],
  },
  {
    category: "AI & Data",
    items: ["Python", "ML Fundamentals", "Data Analysis"],
  },
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
            <p className="text-muted-foreground text-base leading-relaxed mb-6 text-justify">
              With a foundation in software engineering and a Master of
              Engineering in Computer Science from Cornell University, my work
              sits at the intersection of technology, clarity, and human need.
              I’m drawn to environments where ideas are still forming, problems
              are messy, and teams need someone who can bring structure,
              intention, and momentum.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6 text-justify">
              My experience spans leading Agile teams, shaping requirements, and
              delivering user‑centered digital solutions. My CSM and CSPO
              background guide how I collaborate, aligning cross‑functional
              teams, simplifying complexity, and helping products move from
              early concept to meaningful impact.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed text-justify">
              Outside of my technical work, I co‑founded The Favor Busam
              Foundation, supporting underserved communities and securing
              educational sponsorships for hundreds of children in Nigeria. That
              experience grounds my belief that meaningful solutions start with
              people — a principle that shapes how I build, lead, and make
              decisions.
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
