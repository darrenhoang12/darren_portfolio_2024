import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav({
  onClick,
}: {
  onClick: (
    path: string
  ) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}) {
  return (
    <nav>
      <div id="nav-links">
        <Link className="nav-link" to="/" onClick={onClick("/")}>
          <h2 className="nav-link-label rubik-font">Home</h2>
          <img
            className="nav-link-image"
            src="https://images.unsplash.com/photo-1666091863721-54331a5db52d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          />
        </Link>
        <Link className="nav-link" to="/work" onClick={onClick("/work")}>
          <h2 className="nav-link-label rubik-font">Work</h2>
          <img
            className="nav-link-image"
            src="https://images.unsplash.com/photo-1666055642230-1595470b98fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=995&q=80"
          />
        </Link>
        <Link className="nav-link" to="/about" onClick={onClick("/about")}>
          <h2 className="nav-link-label rubik-font">About</h2>
          <img
            className="nav-link-image"
            src="https://images.unsplash.com/photo-1666005487638-61f45819c975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          />
        </Link>
        <Link className="nav-link" to="/contact" onClick={onClick("/contact")}>
          <h2 className="nav-link-label rubik-font">Contact</h2>
          <img
            className="nav-link-image"
            src="https://images.unsplash.com/photo-1665910407771-bc84ad45676b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
          />
        </Link>
      </div>
    </nav>
  );
}
