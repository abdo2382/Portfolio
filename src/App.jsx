import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 } // section shows when 20% is visible
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>
      <Header />
      <h1>Welcome to My Portfolio</h1>
      <p>This is where you can showcase your projects and skills.</p>
      <main>
        {/* Each section gets an id matching Header links */}
        <section id="landing">
          <Landing />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
