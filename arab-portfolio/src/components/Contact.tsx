import { motion } from "framer-motion";
import {
  defaultTransition,
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "../lib/animations";

const contactItems = [
  { icon: "📧", text: "abdifatnadow6895@gmail.com" },
  { icon: "📱", text: "+254 722381031" },
  { icon: "📍", text: "Garissa, Kenya" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-100 dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-4xl font-bold mb-8 text-cyan-600 dark:text-cyan-400"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="space-y-4"
        >
          {contactItems.map((item) => (
            <motion.p
              key={item.text}
              variants={fadeInUp}
              transition={defaultTransition}
              whileHover={{ scale: 1.02 }}
              className="text-slate-700 dark:text-white"
            >
              {item.icon} {item.text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
