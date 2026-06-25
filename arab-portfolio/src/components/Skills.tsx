import { motion } from "framer-motion";
import {
  defaultTransition,
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "../lib/animations";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-100 dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-4xl font-bold mb-12 text-center text-cyan-600 dark:text-cyan-400"
        >
          Skills
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={fadeInUp}
              transition={defaultTransition}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-transparent p-6 rounded-2xl text-center shadow-sm dark:shadow-none transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
