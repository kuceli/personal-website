import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Engineering in Computer Science",
    school: "Cornell University, New York, USA",
    gpa: "GPA: 3.497/4.0",
    year: "May 2024",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "American University of Nigeria, Adamawa, Nigeria",
    gpa: "GPA: 3.85/4.0",
    year: "May 2022",
  },
];

const certs = [
  "CSM — Scrum Alliance",
  "CSPO — Scrum Alliance",
  "Product Management Course — PMhelp",
  "Product Management 101 — Simplilearn",
  "Fundamentals of ML and AI — AWS",
  "Responsive Web Design — freeCodeCamp",
  "Frontend Development Course — Stutern",
  "Best Graduating Student — AUN School of IT & Computing",
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl mb-16"
        >
          Education & Honors
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">{edu.degree}</h3>
                  <p className="text-muted-foreground text-sm">{edu.school}</p>
                  <p className="text-primary text-sm font-medium mt-1">
                    {edu.gpa} · {edu.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-body font-semibold text-sm uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
              <Award size={16} />
              Certifications & Awards
            </h3>
            <ul className="space-y-3">
              {certs.map((cert, i) => (
                <li key={i} className="text-muted-foreground text-sm flex gap-2">
                  <span className="text-primary mt-0.5">—</span>
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
