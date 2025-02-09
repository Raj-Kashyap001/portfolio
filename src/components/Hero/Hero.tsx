import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="Home" className="hero">
      <div className="hero-content flow">
        <h1 className="hero-title">
          Hi, I’m <span className="text-gradient">Raj</span>
        </h1>
        <p className="hero-text">
          I’m a passionate and versatile Full Stack Developer with expertise in
          web development, AI integration, and modern design principles. With a
          strong foundation in both front-end and back-end technologies.
        </p>

        <a
          href="https://drive.google.com/uc?export=download&id=1u5aL4fizzY0myrxecdxLpLqn8pl1Kwa2WECXyKw5dAI"
          className="btn"
        >
          Get Resume
        </a>
      </div>
      <div className="hero-image">
        <img src="/portfolio/images/hero.png" alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;
