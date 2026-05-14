export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl max-w-4xl">
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Hi, I'm
          <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text">
            Abdifatah
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer creating modern and beautiful websites.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-lg font-semibold">
            View Projects
          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 bg-white/10 text-lg font-semibold">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}