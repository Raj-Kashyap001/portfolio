import "./Footer.css";
import { FaLinkedin, FaYoutube, FaGithub, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy;Raj Kashyap - 2025 </p>
      <div className="footer-links ">
        <a href="https://github.com/Raj-Kashyap001">
          <FaGithub className="icon" />
        </a>
        <a href="https://linkedin.com/in/raj-kashyap001">
          <FaLinkedin className="icon" />
        </a>
        <a href="mailto:rajkashyapatservice@outlook.com">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://youtube.com/@raj-kashyap-developer">
          <FaYoutube className="icon" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
