import { Link } from "react-router-dom";
import "../public/topbar.css";

const AppNavbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="nav-link">
          <h1>Mediclaim</h1>
        </Link>
      </div>
      <div className="nav-btn">
        <div>
          <Link to="/register">
            <button className="btn">
              <span>Register</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/login">
            <button className="btn">
              <span>Login</span>
            </button>
          </Link>
        </div>
        <div>
          <Link to="/prompt">
            <button className="btn" id="search">
              <span>AI Search</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
