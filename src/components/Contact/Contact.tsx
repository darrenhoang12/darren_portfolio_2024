import "./Contact.css";
import { useState } from "react";
import Nav from "../Nav/Nav";
import NavButton from "../Nav/NavButton";

export default function Contact() {
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
        <div className="contactContainer">
          <div className="leftContainer">
            <div className="pageTitleContainer">
              <h1>Get in touch</h1>
              <h1>Get in touch</h1>
              <h1>Get in touch</h1>
            </div>
            <div className="contactSummary">
              <h1>Summary here</h1>
            </div>
          </div>
          <div className="contactInfoContainer">
            <div className="email">
              <h3>WRITE ME</h3>
              <p>darrenhoang12@gmail.com</p>
            </div>
            <div className="number">
              <h3>CALL ME</h3>
              <p>(714)-260-7399</p>
            </div>
            <div className="links">
              <a href="https://github.com/darrenhoang12">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/darrenhoang/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://gitlab.com/darrenhoang12">
                <i className="fa-brands fa-gitlab"></i>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Nav onClick={redirect}></Nav>
      <NavButton onClick={toggleNav}></NavButton>
    </div>
  );
}
