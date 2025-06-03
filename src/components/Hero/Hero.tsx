import "./Hero.css";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="Home"
      className="hero"
      variants={fadeInAnimation}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="hero-content flow">
        <motion.h1
          className="hero-title"
          variants={fadeInAnimation}
          transition={{ duration: 0.5 }}
        >
          Hi, I’m <span className="text-gradient">Raj</span>
        </motion.h1>
        <motion.p
          className="hero-text"
          variants={fadeInAnimation}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          I’m a passionate and versatile Full Stack Developer with expertise in
          web development, AI integration, and modern design principles. With a
          strong foundation in both front-end and back-end technologies.
        </motion.p>

        <a
          href="/portfolio/docs/resume.docx"
          className="btn"
          download={"Raj Kashyap's Resume"}
        >
          Get Resume
        </a>
      </div>
      <div className="hero-image">
        <img src="/portfolio/images/hero.webp" alt="Hero Image" />
      </div>
    </motion.section>
  );
};

export default Hero;
