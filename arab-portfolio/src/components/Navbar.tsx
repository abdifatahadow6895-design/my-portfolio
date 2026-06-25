import { motion } from "framer-motion";
import { defaultTransition, fadeInDown } from "../lib/animations";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      transition={defaultTransition}
      className="fixed top-0 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 z-50 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-cyan-600 dark:text-cyan-400"
        >
          Abdifatah.dev
        </motion.h1>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2, color: "#22d3ee" }}
                transition={{ duration: 0.2 }}
                className="text-slate-700 dark:text-white"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
