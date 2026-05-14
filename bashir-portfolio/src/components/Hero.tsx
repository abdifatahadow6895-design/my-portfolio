import { motion } from "framer-motion";
import Section from "./Section";

export default function Hero() {
  return (
    <Section>
      <div className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent"
        >
          Abdifatah Adow
        </motion.h1>

        <p className="text-lg md:text-2xl text-gray-300">
          Creative Frontend Developer 🚀
        </p>

        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition">
          View My Work
        </button>
      </div>
    </Section>
  );
}
