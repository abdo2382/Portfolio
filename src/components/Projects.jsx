import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

function Projects() {
  const projects = [
    {
      title: "Restaurant Page",
      description:
        "A responsive restaurant landing page with menu, contact, and reservation sections built using React and CSS.",
      image: project1,
      link: "https://github.com/abdo2382/restaurant-page",
    },
    {
      title: "Landing Page",
      description:
        "A clean and modern landing page showcasing a fictional product or brand, optimized for all devices.",
      image: project2,
      link: "https://github.com/abdo2382/landing-page",
    },
    {
      title: "Jewelry Shop",
      description:
        "An elegant online jewelry shop UI designed with React components, featuring smooth hover effects and layout design.",
      image: project3,
      link: "https://github.com/abdo2382/jewelry-shop",
    },
    {
      title: "Simple Portfolio",
      description:
        "A minimal personal portfolio website to showcase skills, projects, and contact information.",
      image: project4,
      link: "https://github.com/abdo2382/simple-portfolio",
    },
  ];

  return (
    <section className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
