import { useState } from "react";
import "./About.css";
import Nav from "../Nav/Nav";
import NavButton from "../Nav/NavButton";

export default function About() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
  };

  const redirect =
    (path: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      setIsNavOpen(false);
      e.preventDefault(); // Prevent default link behavior
      setTimeout(() => {
        window.location.href = path; // Navigate to the new page after 500 milliseconds
      }, 500);
    };

  return (
    <div className="page" data-nav={isNavOpen}>
      <main>
        <div className="aboutContainer">
          <div className="aboutText">
            <h1>Hi I'm Darren</h1>
            <p>This is a short summary about me.</p>
          </div>
          <img src="/picture.jpg" alt="Interesting about me picture here" />
        </div>
      </main>
      <Nav onClick={redirect}></Nav>
      <NavButton onClick={toggleNav}></NavButton>
    </div>
  );
}
