import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="inner">
        <a href="#hero" className="logo">
          Herbert | Ntim
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map((nav) => (
              <li key={nav.name} className="group">
                <a href={nav.link}>
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
