import { motion } from "framer-motion";
import Section from "./Section";

export default function Projects() {
  return (
    <Section>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((p) => (
          <motion.div
            key={p}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20"
          >
            <h3 className="text-xl font-semibold mb-2">Project {p}</h3>
            <p className="text-gray-300">Modern UI project with animations.</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
