import React from "react";
import "./Project.css";

const projectsData = [
  {
    title: "Portfolio ",
    description: "My personal portfolio built with React.",
    link: "https://shreyadandekar96.github.io/my-portfolio/",
  },
  {
    title: "Mruttika",
    description: "A simple e-commerce app website using React and Firebase.",
    link: "https://shreyadandekar96.github.io/my-app1/",
  },
  {
    title: "Vihara",
    description: "A simple e-commerce app website using React and Firebase.",
    link: "https://shreyadandekar96.github.io/shreya1/",
  },

   {
    title: "M5MOTORS",
    description: "A simple e-commerce app website using React and Firebase.",
    link: "https://shreyadandekar96.github.io/m5motors/",
  },
];

export default function Projects() {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="title-pro">{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}