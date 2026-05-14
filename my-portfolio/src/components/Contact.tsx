const Contact = () => {
  return (
    <section className="p-10 text-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>

      <form className="flex flex-col gap-4 max-w-md mx-auto mt-6">
        <input className="p-3 border rounded" placeholder="Your Name" />
        <input className="p-3 border rounded" placeholder="Email" />
        <textarea className="p-3 border rounded" placeholder="Message" />
        <button className="bg-black text-white p-3 rounded">Send</button>
      </form>
    </section>
  );
};

export default Contact;
