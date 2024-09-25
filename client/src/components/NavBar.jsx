import "./styles/main.scss";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logoimage from "./pic/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo and site name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logoimage} alt="Logo" className="navbar-logo me-2" />
          MySite
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/project-updates">
                Project Updates
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/read">
                Read
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
