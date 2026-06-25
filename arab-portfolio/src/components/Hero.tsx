import { motion } from "framer-motion";
import {
  defaultTransition,
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "../lib/animations";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-cyan-600 dark:text-cyan-400 mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Abdifatah
            <span className="text-cyan-600 dark:text-cyan-400"> Hussein Bashir</span>
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-2xl text-slate-600 dark:text-slate-300 mb-6"
          >
            Full-Stack Developer
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-slate-600 dark:text-slate-400 text-lg mb-8"
          >
            I build modern web applications using React, TypeScript, Node.js,
            Express.js and MongoDB.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={defaultTransition}
            className="flex gap-4 flex-wrap"
          >
            <motion.a
              href="/Abdifatah_Hussein_Bashir_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Download CV
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border border-cyan-500 text-cyan-600 dark:text-white px-6 py-3 rounded-xl"
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ ...defaultTransition, delay: 0.3 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl" />
            <img
              src="/profile.jpg"
              alt="Abdifatah Hussein Bashir"
              className="relative w-80 h-80 rounded-full object-cover border-4 border-cyan-500 dark:border-cyan-400 shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
