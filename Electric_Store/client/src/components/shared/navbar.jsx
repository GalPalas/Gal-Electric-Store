import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { numberOfItems } from "store/cart";

const Navbar = () => {
  const cart = useSelector(numberOfItems());
  const { cartItems } = cart;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
      <div className="container">
        <Link className="navbar-brand " to="/">
          Gal <span className="text-warning display-5">Electric</span>
          <i
            className="fa fa-bolt fa-2x text-warning mx-2"
            aria-hidden="true"
          ></i>
        </Link>

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
              <Link
                to="/cart"
                className="nav-link text-light position-relative "
              >
                <i
                  class="fa fa-shopping-cart fa-2x mx-2"
                  aria-hidden="true"
                ></i>
                Cart
                {cartItems.length > 0 && (
                  <span className="position-absolute top-5 start-50 translate-middle badge rounded-pill bg-warning">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link text-light ">
                <i class="fa fa-user fa-2x mx-2 " aria-hidden="true"></i>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
