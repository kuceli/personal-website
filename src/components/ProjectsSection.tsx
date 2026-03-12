import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    title: "AlertCap",
    description: "Defined product vision and validated market demands for an EEG-based driver safety wearable.",
    tags: ["Product", "Cornell", "IoT"],
    fullDescription:
      "AlertCap is an EEG-based wearable designed to detect driver fatigue in real-time. I defined the product vision, validated market demands, and projected $6.6M in first-year revenue. The project included go-to-market strategy, competitive analysis, and a pitch to a panel of advisors at Cornell.",
    github: "https://github.com/kuceli",
    live: "#",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Community Literacy Program",
    description: "Collaborated with a cross-functional team of 12 on a one-year literacy improvement initiative.",
    tags: ["Project Management", "Cornell"],
    fullDescription:
      "A comprehensive one-year community literacy improvement program developed at Cornell. Collaborated with a cross-functional team of 12 to create a full Work Breakdown Structure (WBS), Gantt chart scheduling, risk analysis, resource allocation, and detailed budget planning.",
    github: "https://github.com/kuceli",
    live: "#",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Rehoboth Health Care",
    description: "Delivered a responsive patient-facing healthcare platform that increased engagement by 40%.",
    tags: ["React", "Tailwind", "Healthcare"],
    fullDescription:
      "Rehoboth Health Care is a patient-facing healthcare platform built with React and Tailwind CSS. The application provides appointment scheduling, health records access, and telehealth features — resulting in a 40% increase in patient engagement, along with supporting digital assets.",
    github: "https://github.com/kuceli",
    live: "#",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "EduAfrica",
    description: "Responsive online learning platform democratizing education across Africa.",
    tags: ["React", "Frontend", "Stutern"],
    fullDescription:
      "EduAfrica is a responsive online learning platform designed to democratize education across Africa. Built during the Stutern Graduate Accelerator program, it features course catalogs, user dashboards, and an accessible UI optimized for low-bandwidth environments.",
    github: "https://github.com/kuceli",
    live: "#",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
];

type Project = (typeof projects)[number];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

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

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(project)}
              className="group p-6 md:p-8 rounded-2xl border border-border bg-background hover:border-primary/40 transition-all duration-500 hover:shadow-lg text-left cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-xl md:text-2xl">{project.title}</h3>
                <ExternalLink
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
                />
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
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl md:text-3xl">
                  {selected.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {selected.fullDescription}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {selected.images.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-video rounded-lg bg-muted border border-border overflow-hidden"
                    >
                      <img
                        src={img}
                        alt={`${selected.title} screenshot ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                  {selected.live && selected.live !== "#" && (
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
