const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Express",
  "Firebase",
  "GitHub",
];
export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
