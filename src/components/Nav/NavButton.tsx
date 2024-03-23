import "./Nav.css";

export default function NavButton({ onClick }: { onClick: () => void }) {
  return (
    <button id="nav-toggle" type="button" onClick={onClick}>
      <i className="open fa-solid fa-bars-staggered"></i>
      <i className="close fa-solid fa-xmark"></i>
    </button>
  );
}
