import { motion } from "framer-motion";
import {
  defaultTransition,
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "../lib/animations";

const projects = [
  {
    title: "Kids Coding Competition",
    description: "Competition platform for students.",
  },
  {
    title: "E-Commerce Website",
    description: "Modern online shopping platform.",
  },
  {
    title: "Hotel Booking System",
    description: "Reservation management application.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-4xl font-bold mb-12 text-center text-cyan-600 dark:text-cyan-400"
        >
          Projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              transition={defaultTransition}
              whileHover={{ scale: 1.03, y: -6 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-sm dark:shadow-none transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
