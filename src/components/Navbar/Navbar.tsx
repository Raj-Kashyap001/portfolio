import { useState, useEffect } from "react";
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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleActive = (link: string) => {
    setActiveLink(link);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className={`header ${isScrolled && "scrolled"}`}>
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
                onClick={() => {
                  toggleActive(link);
                  setMobileNavOpen(false);
                }}
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
