import { motion } from "framer-motion";
import {
  defaultTransition,
  fadeInUp,
  viewportOnce,
} from "../lib/animations";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-4xl font-bold mb-8 text-cyan-600 dark:text-cyan-400"
        >
          About Me
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.15 }}
          className="text-slate-600 dark:text-slate-300 leading-8"
        >
          I am a passionate Full-Stack Developer from Kenya. I specialize in
          React, TypeScript, Node.js, Express.js and MongoDB. My goal is to
          create scalable, responsive and user-friendly applications that solve
          real-world problems.
        </motion.p>
      </div>
    </section>
  );
}
