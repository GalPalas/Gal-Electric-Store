import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "store/cart";
import { getUserInfo, signout } from "store/userSignIn";

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCartItems());
  const { cartItems } = cart;

  const userSignIn = useSelector(getUserInfo());
  const { user } = userSignIn;

  const signoutHandler = () => {
    dispatch(signout());
  };

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

        <div className="collapse navbar-collapse align-center" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-link text-light position-relative "
              >
                <i
                  className="fa fa-shopping-cart fa-2x mx-2"
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
              {user ? (
                <div className="dropdown">
                  <Link
                    className="btn dropdown-toggle text-light p-0 mt-1"
                    to="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user fa-2x mx-2 "></i>
                    {user.name}
                  </Link>

                  <ul
                    className="dropdown-menu bg-light"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <Link
                      className="dropdown-item p-0"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </ul>
                </div>
              ) : (
                <Link to="/signin" className="nav-link text-light ">
                  <i className="fa fa-user fa-2x mx-2 "></i>
                  SignIn
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
