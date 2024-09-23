import React from "react";
import styles from "../styles/style";
import "../styles/estilo.css";
import projects from "./json/projects.json"

// map lista para exibir projetos
const Projects = () => {
  return (
    <div style={styles.projectsContainer} className="projectsContainer">
      {projects.map((project, index) => (
        <div key={index} className="projectContainerWide" style={styles.projectContainerWide}>
          <p>
            <strong>{project.projectTitle}</strong>
          </p>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            <div className={`imageContainer ${project.imageClass}`}>
              
            </div>
          </a>
          <div style={styles.projectDescription} className="projectDescription">
            <p>{project.projectDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
