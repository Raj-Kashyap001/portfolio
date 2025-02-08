import { FaCode, FaEye } from "react-icons/fa";

interface ProjectCardProps {
  projectTitle: string;
  description: string;
  imageURL: string;
  sourceCodeURL: string;
  livePageURL?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  imageURL,
  description,
  sourceCodeURL,
  livePageURL,
}) => {
  return (
    <div className="project-card">
      <div className="project-preview">
        <img src={imageURL} alt="Project" className="project-img" />
        <h4 className="project-name">{projectTitle}</h4>
      </div>

      <div className="project-details flow">
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a href={sourceCodeURL} className="preview-live-link">
            <FaCode className="icon" />
            View Source
          </a>
          {livePageURL && (
            <a href={livePageURL} className="source-code-link">
              <FaEye className="icon" />
              Preview Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
