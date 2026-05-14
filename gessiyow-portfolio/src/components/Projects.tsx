const projects = [
  {
    title: "E-Commerce Website",
    desc: "Modern online shopping platform.",
  },
  {
    title: "Social Media App",
    desc: "Social media application with authentication.",
  },
  {
    title: "Portfolio Website",
    desc: "Beautiful portfolio with animations.",
  },
];
export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-center font-bold mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden"
            >
              <div className="h-56 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500"></div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                <p className="text-red-500 mb-6">{project.desc}</p>

                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
