import Section from "./Section";

export default function Contact() {
  return (
    <Section>
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-green-400">Contact Me</h2>

        <p className="text-gray-300">Let's build something amazing together.</p>

        <input
          placeholder="Your Email"
          className="px-4 py-2 rounded bg-white/10 border border-white/20"
        />

        <br />

        <textarea
          placeholder="Your Message"
          className="px-4 py-2 rounded bg-white/10 border border-white/20 mt-2"
        />

        <br />

        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 mt-4">
          Send Message
        </button>
      </div>
    </Section>
  );
}
