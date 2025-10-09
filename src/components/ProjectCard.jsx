import React from "react";
import "./projects.css";

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noreferrer" className="project-btn">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
