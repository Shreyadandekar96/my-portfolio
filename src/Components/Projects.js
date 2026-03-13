import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>React, CSS</p>

        <div className="project-links">
          <a
            href="https://shreyadandekar96.github.io/shreya1/"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
          <a
            href="https://github.com/Shreyadandekar96/shreya1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;