export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-black bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text ">
          Abdifatah.dev
        </h1>

        <div className="md:flex gap-8 text-lg font-medium">
          <a href="#home" className="hover:text-pink-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-pink-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-pink-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-pink-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-pink-400 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}