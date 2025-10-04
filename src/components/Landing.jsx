import React from "react";
import "./Landing.css";
import avatar from "../assets/avatar.jpg";
function Landing() {
  return (
    <section className="landing">
      <div className="landing_content">
        <h1>
          Hi, I'm <span>Abdelrahman Alaa</span>
        </h1>
        <h2>I'm a Full Stack Web Developer</h2>
        <p>
          Abdelrahman Alaa is a second-year student at the Egyptian Chinese
          University (ECU) with a rapidly developing technical skill set.
          Nearing completion of the Meta Full-Stack Developer Professional
          Certificate on Coursera, he is focused on quickly transitioning
          theoretical knowledge into practical application. Proficient in C++
          and Python, with experience in Arduino, Abdelrahman is actively
          expanding his expertise into AI/Machine Learning and Cybersecurity to
          build a comprehensive foundation in modern technology.
        </p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </div>

      <div className="avatar">
        <img src={avatar} alt="Devoloper avatar" />
      </div>
    </section>
  );
}

export default Landing;
