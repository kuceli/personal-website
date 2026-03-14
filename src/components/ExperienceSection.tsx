import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Homeward Technology Inc.",
    period: "Jul 2025 – Present",
    location: "Remote, USA",
    highlights: [
      "Improved the usability and visibility of multiple client WordPress platforms through stronger SEO and accessibility, while delivering work more smoothly by clarifying requirements and keeping technical efforts aligned with business goals.",
    ],
  },
  {
    role: "Information Technology Board Member",
    company: "Museum of Political Corruption",
    period: "Feb 2025 – Present",
    location: "Remote, USA",
    highlights: [
      "Shaped the museum’s digital presence by enhancing its website, SEO, accessibility, and 3D virtual exhibits, creating more engaging and intuitive experiences for online visitors.",
    ],
  },
  {
    role: "Front End Developer",
    company: "MeasureMe, LLC",
    period: "Jul 2024 – Oct 2024",
    location: "Remote, USA",
    highlights: [
      "Strengthened the platform’s user experience by refining frontend features and creating a polished maintenance interface that reduced support issues and kept the brand consistent",
    ],
  },
  {
    role: "Front End Developer",
    company: "uTECH – Nationwide Emission Analyzer Project",
    period: "Sep 2023 – May 2024",
    location: "Cornell University, NY",
    highlights: [
      "Designed and built responsive, accessible UI components and mockups that made complex environmental data easy to navigate across devices.",
    ],
  },

  {
    role: "Graduate Intern, Finance Department (NYSC)",
    company: "Federal Mortgage Bank of Nigeria",
    period: "Aug 2022 – Jun 2023",
    location: "Abuja, Nigeria",
    highlights: [
      "Supported national housing fund operations by maintaining accurate financial records, improving customer service processes, and ensuring transparent documentation.",
    ],
  },
  {
    role: "Work Study Student, IT Department",
    company: "American University of Nigeria",
    period: "Feb 2022 – Apr 2022",
    location: "Adamawa, Nigeria",
    highlights: [
      "Helped keep the campus connected by monitoring network performance, identifying issues early, and reducing downtime for students and staff.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Federal Mortgage Bank of Nigeria",
    period: "Jul 2021 – Aug 2021",
    location: "Abuja, Nigeria",
    highlights: [
      "Created functional, user‑friendly web experiences, from an e‑commerce site to a personal portfolio, using both CMS tools and custom code.",
    ],
  },
  {
    role: "Founding Board Member, COO, Executive Secretary",
    company: "Visqorium",
    period: "Jul 2020 – Sep 2022",
    location: "Remote, Nigeria",
    highlights: [
      "Guided the organization’s operations and product direction, coordinating a development team and producing strategic materials that supported growth in the blockchain and NFT space.",
    ],
  },
  {
    role: "Co-Founder",
    company: "The Favor Busam Foundation",
    period: "Jul 2019 – Nov 2024",
    location: "Abuja, Nigeria",
    highlights: [
      "Led community and fundraising initiatives that expanded educational support to hundreds of children, organizing outreach efforts and sustaining long‑term impact.",
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
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-[120px]" />

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
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary md:left-[117px]" />
                <span className="hidden md:block absolute left-0 top-0 text-sm text-muted-foreground font-body w-[90px]">
                  {exp.period}
                </span>

                <div>
                  <h3 className="font-display text-xl md:text-2xl mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-1">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground text-xs mb-4 md:hidden">
                    {exp.period}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-muted-foreground text-sm leading-relaxed flex gap-2"
                      >
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
