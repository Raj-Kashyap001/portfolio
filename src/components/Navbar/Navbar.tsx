import { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
const Navbar: React.FC = () => {
  const navLinks: Array<string> = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleActive = (link: string) => {
    setActiveLink(link);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header>
      <a href="/">
        <img className="logo" src="/portfolio/icons/logo.svg" alt="Raj" />
      </a>
      <nav className={`navbar ${mobileNavOpen && "open"}`}>
        <ul className="navlinks">
          {navLinks.map((link) => (
            <li className="nav-item" key={link}>
              <a
                className={`nav-link ${link === activeLink ? "active" : ""}`}
                href={`#${link}`}
                onClick={() => toggleActive(link)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="toggle-mobile-nav" onClick={toggleMobileNav}>
        {!mobileNavOpen ? <FaBars /> : <FaX />}
      </button>
    </header>
  );
};

export default Navbar;
