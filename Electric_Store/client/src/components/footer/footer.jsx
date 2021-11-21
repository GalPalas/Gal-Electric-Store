import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark position-relative p-5 text-center text-light">
      <div className="container">
        <div className="row align-items-center gy-2">
          <div className="col-lg">
            <div className="d-flex justify-content-around">
              <a href="/#">
                <i
                  className="fa fa-facebook-square fa-3x"
                  aria-hidden="true"
                ></i>
              </a>
              <a href="/#">
                <i className="fa fa-youtube-play fa-3x" aria-hidden="true"></i>
              </a>
              <a href="/#">
                <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="col-lg">
            <div className="d-flex justify-content-center align-items-center">
              <p className="lead mb-0">Copyright &copy; 2021 Gal Electric</p>
              <i
                className="fa fa-bolt text-warning mx-1"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div className="col-lg">
            <img src="/images/payments-logo.png" alt="" />
          </div>
        </div>

        <a href="/#" className="position-absolute bottom-0 end-0 p-3">
          <i className="fa fa-arrow-circle-up fa-3x" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
