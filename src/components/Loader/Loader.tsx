import "./Loader.css";

interface LoaderProps {
  loaded: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loaded }) => {
  return (
    <div className={`loader ${loaded && "done"}`}>
      <img src="/portfolio/icons/logo.svg" alt="loader logo" />
      <div className="loading-bar"></div>
    </div>
  );
};
export default Loader;
