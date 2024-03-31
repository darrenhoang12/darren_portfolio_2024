import "./Work.css";
import { useState } from "react";
import Nav from "../Nav/Nav";
import NavButton from "../Nav/NavButton";

export default function Work() {
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
        <div className="workContainer">
          <h1>Work</h1>
        </div>
      </main>
      <Nav onClick={redirect}></Nav>
      <NavButton onClick={toggleNav}></NavButton>
    </div>
  );
}
