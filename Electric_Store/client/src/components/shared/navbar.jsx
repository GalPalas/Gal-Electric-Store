import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
      <div className="container">
        <a className="navbar-brand " href="/#">
          Gal <span className="text-warning display-5">Electric</span>
          <i
            className="fa fa-bolt fa-2x text-warning mx-2"
            aria-hidden="true"
          ></i>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a href="/#" className="nav-link">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
