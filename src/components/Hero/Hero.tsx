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
          I’m a Full Stack Developer passionate about web development, AI, and
          modern design. I love building things that make a difference.
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
