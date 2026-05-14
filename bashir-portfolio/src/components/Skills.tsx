import Section from "./Section";

export default function Skills() {
  return (
    <Section>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["React", "TypeScript", "Tailwind", "Node.js"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
