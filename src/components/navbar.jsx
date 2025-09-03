import { useState, useEffect } from 'react';
import Home from "../pages/home.jsx"
import About from '../pages/about.jsx';
import Projects from '../pages/project.jsx';
import Contact from '../pages/contact.jsx';


export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home")
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.6
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();

  }, []);

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if(target){
       target.scrollIntoView({ behavior: "smooth" });
    }
   
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li
            className={activeSection === "home" ? "active" : ""}
            onClick={() => handleScroll("home")}
          >
            Home
          </li>
          <li
            className={activeSection === "about" ? "active" : ""}
            onClick={() => handleScroll("about")}
          >
            About
          </li>
          <li
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => handleScroll("projects")}
          >
            Projects
          </li>
          <li
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => handleScroll("contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
};