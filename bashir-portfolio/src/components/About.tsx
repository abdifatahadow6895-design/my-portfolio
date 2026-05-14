import Section from "./Section";

export default function About() {
  return (
    <Section>
      <div className="max-w-3xl text-center space-y-4">
        <h2 className="text-4xl font-bold text-pink-400">About Me</h2>
        <p className="text-gray-300">
          I'm a passionate developer who builds modern, beautiful, and
          responsive web applications using React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </Section>
  );
}
