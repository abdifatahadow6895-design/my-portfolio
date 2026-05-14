const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-black text-white sticky">
      <h1 className="text-xl font-bold">MyPortfolio</h1>
      <ul className="flex gap-6">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
