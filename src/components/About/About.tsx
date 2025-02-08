import { FaLinkedin, FaYoutube, FaGithub, FaEnvelope } from "react-icons/fa";
import "./About.css";
const About: React.FC = () => {
  return (
    <section id="About" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-me-card">
          <div className="profile-image">
            <img
              src="/portfolio/images/Raj Kashyap.jpg"
              alt="My Profile Photo"
            />
          </div>
          <div className="profile-details flow">
            <h2 className="name">
              Raj Kashayp
              <hr />
            </h2>
            <p className="about-text">
              I’m Raj Kashyap, a 22-year-old freelance full-stack developer. I
              love experimenting with new ideas and creating innovative
              solutions. I actively build and contribute to open-source
              projects, constantly learning and sharing my knowledge with the
              developer community. As a Linux enthusiast, I enjoy customizing
              and optimizing my workflow while exploring new tools and
              technologies. If you're looking for a dedicated developer who
              loves problem-solving and innovation, let's connect!
            </p>
            <div className="social-links ">
              <a href="https://github.com/Raj-Kashyap001">
                <FaGithub className="icon" />
                Github
              </a>
              <a href="https://linkedin.com/in/raj-kashyap001">
                <FaLinkedin className="icon" />
                LinkedIn
              </a>
              <a href="mailto:rajkashyapatservice@outlook.com">
                <FaEnvelope className="icon" />
                Email
              </a>
              <a href="https://youtube.com/@raj-kashyap-developer">
                <FaYoutube className="icon" />
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
