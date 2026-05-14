const Projects = () => {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-5 shadow rounded-xl">
          <h3 className="font-bold">Project 1</h3>
          <p>Portfolio Website</p>
        </div>

        <div className="bg-white p-5 shadow rounded-xl">
          <h3 className="font-bold">Project 2</h3>
          <p>Landing Page</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
