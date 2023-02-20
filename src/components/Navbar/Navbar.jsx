/* eslint-disable react/prop-types */
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ isAdmin, isloggedIn, logOut }) => {
  return (
    <div className="navbar">
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#0e1c36", width: "100%" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: "white" }}>
            LMS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {!isloggedIn && (
                <Link to="/" className="nav-link" style={{ color: "white" }}>
                  Login
                </Link>
              )}
              {!isloggedIn && (
                <Link
                  to="/add-user"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Register
                </Link>
              )}
              {isloggedIn && (
                <Link
                  to="/home"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Home
                </Link>
              )}
              {isloggedIn && !isAdmin && (
                <Link
                  to="/my-books"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  My Books
                </Link>
              )}
              {isloggedIn && isAdmin && (
                <Link
                  to="/add-books"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Add Book
                </Link>
              )}
              {isloggedIn && isAdmin && (
                <Link
                  to="/rent-list"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Rent List
                </Link>
              )}
              {isloggedIn && isAdmin && (
                <Link
                  to="/user-profile"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  My Profile
                </Link>
              )}
              {isloggedIn && !isAdmin && (
                <Link
                  to="/user-profile"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  My Profile
                </Link>
              )}
              {isloggedIn && (
                <button
                  className="btn"
                  style={{ color: "white" }}
                  onClick={logOut}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
