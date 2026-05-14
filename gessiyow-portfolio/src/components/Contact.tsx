export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <form className="space-y-6 mt-10">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20"
          ></textarea>

          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-lg font-bold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
