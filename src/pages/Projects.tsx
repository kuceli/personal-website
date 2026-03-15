import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/data/projects";
import logo from "@/assets/1-NoBackground.png";

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-32 h-16">
          <Link to="/" className="h-full py-2 flex items-center">
          
          <img
            src={logo}
            alt="Kuceli Susan Englama"
            className="h-full w-auto object-contain"
          />
     
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            <ArrowLeft size={16} />
            Back Home
          </Link>
        </div>
      </nav>

      <section className="section-padding pt-32">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl mb-12"
          >
            All Projects
          </motion.h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setSelected(project)}
                className="group rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-500 hover:shadow-lg text-left cursor-pointer overflow-hidden"
              >
                <div className="aspect-video w-full bg-muted overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-lg md:text-xl">
                      {project.title}
                    </h3>
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
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
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Kuceli Susan Englama. All rights reserved.
      </footer>

      <Dialog
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl md:text-3xl">
                  {selected.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div className="aspect-video rounded-lg bg-muted border border-border overflow-hidden">
                  <img
                    src={selected.thumbnail}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                </div>

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

                {/* <div className="flex flex-wrap gap-3 pt-2">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  )}
                  {selected.live && selected.live !== "#" && (
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={16} />
                      View here
                    </a>
                  )}
                </div> */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {selected.subProjects
                    ? selected.subProjects.map((sp) => (
                        <a
                          key={sp.label}
                          href={sp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink size={16} />
                          {sp.label}
                        </a>
                      ))
                    : selected.live &&
                      selected.live !== "#" && (
                        <a
                          href={selected.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                          <ExternalLink size={16} />
                          View here
                        </a>
                      )}

                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Projects;
