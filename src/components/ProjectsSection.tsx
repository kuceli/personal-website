import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "EduAfrica",
    description: "Responsive online learning platform democratizing education across Africa.",
    tags: ["React", "Frontend", "Stutern"],
  },
  {
    title: "AlertCap",
    description: "EEG-based driver-fatigue safety wearable — product vision, market research & business model.",
    tags: ["Product", "Cornell", "IoT"],
  },
  {
    title: "Rehoboth Health Care",
    description: "Patient-facing healthcare platform built with React and Tailwind, increasing patient engagement.",
    tags: ["React", "Tailwind", "Healthcare"],
  },
  {
    title: "Community Literacy Program",
    description: "One-year literacy improvement program with full WBS, Gantt chart, and budget planning.",
    tags: ["Project Management", "Cornell"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-background hover:border-primary/40 transition-all duration-500 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-2xl">{project.title}</h3>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
