import { useState } from "react";
import Nav from "../Nav/Nav";
import NavButton from "../Nav/NavButton";
import "./Landing.css";

export default function Landing() {
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
        <div className="landingContainer">
          <div className="picture">Pictures etc here</div>
          <div className="summary">
            <h1>DARREN HOANG</h1>
            <p>
              A software engineer with a passion for data-driven and full-stack
              development
            </p>
            <a href="#">learn more about me</a>
          </div>
        </div>
      </main>

      <Nav onClick={redirect} />
      <NavButton onClick={toggleNav} />
    </div>
  );
}
