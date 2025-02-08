import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="Projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-container">
        <ProjectCard
          projectTitle="Ecogrow Fertilizers"
          description="Ecogrow is an e-commerce website offering eco-friendly fertilizers. It provides customers with a user-friendly interface to explore and purchase products."
          imageURL="/portfolio/images/ecogrow-fertilizer.jpg"
          sourceCodeURL="#"
          livePageURL="#"
        />

        <ProjectCard
          projectTitle="Public JSON API"
          description="A publicly accessible JSON API providing free data for developers. Perform CRUD Operation on this API"
          imageURL="/portfolio/images/public-json-api.webp"
          sourceCodeURL="#"
        />

        <ProjectCard
          projectTitle="Unshwash (A Unsplash-like Website)"
          description="A Unshwash is a image gallary. It allows users to browse, download, and share high-resolution photos."
          imageURL="/portfolio/images/unswash.jpg"
          sourceCodeURL="#"
          livePageURL="#"
        />

        <ProjectCard
          projectTitle="React Landing Page"
          description="A Responsive Landing Webpage made in Reactjs. it is simple and feature rich"
          imageURL="/portfolio/images/react-landing-page.png"
          sourceCodeURL="#"
          livePageURL="#"
        />

        <ProjectCard
          projectTitle="Realstator: Realtor like website"
          description="Realstator is a real estate website that helps users find properties for sale or rent."
          imageURL="/portfolio/images/realstator.jpg"
          sourceCodeURL="#"
          livePageURL="#"
        />

        <ProjectCard
          projectTitle="The Book Nook"
          description="The Book Nook is a digital library and marketplace for books. It allows users to browse  read, and purchase books online."
          imageURL="/portfolio/images/the-book-nook.jpg"
          sourceCodeURL="#"
          livePageURL="#"
        />
      </div>
    </section>
  );
};
export default Projects;
