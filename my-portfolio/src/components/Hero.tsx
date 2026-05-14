const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <h1 className="text-5xl font-bold">Hi, I'm Developer 👋</h1>
      <p className="mt-4">I build modern websites</p>
      <button className="mt-6 px-6 py-2 bg-white text-black rounded-full">
        View Projects
      </button>
    </section>
  );
};

export default Hero;
