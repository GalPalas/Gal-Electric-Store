import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="/" className="navbar-brand">
            Gal Electric
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="nav navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#instructors" className="nav-link">
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a href="#learn" className="nav-link">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
