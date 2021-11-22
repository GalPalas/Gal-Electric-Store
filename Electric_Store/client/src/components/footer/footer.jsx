import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import "./footer.css";

const Footer = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 15,
  });

  useEffect(() => {
    setViewport(viewport);
  }, [viewport]);

  return (
    <footer className="bg-dark position-relative p-5  text-light">
      <div className="container">
        <div className="row">
          <div className="col links">
            <p className="fw-bold">Order & Purchases</p>
            <ul className="orders list-unstyled">
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light">
                  Check Order Status
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light">
                  Shipping, Delivery & Pickup
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light">
                  Returns & Exchanges
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light">
                  Price Match Guarantee
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light">
                  Product Recalls
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light ">
                  Trade-In Program
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light ">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          <div className="col links">
            <p className="fw-bold">Support & Services</p>
            <ul className="orders list-unstyled">
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light">
                  Visit our Support Center
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light">
                  Shop with an Expert
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light">
                  Schedule a Service
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light">
                  Manage an Appointment
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light">
                  Protection & Support Plans
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light ">
                  Haul Away & Recycling
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light ">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md links">
            <p className="fw-bold">About Gal Electric</p>
            <ul className="orders list-unstyled">
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light">
                  Corporate Information
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light">
                  Careers
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light">
                  Corporate Responsibility & Sustainability
                </a>
              </li>
              <li className="mb-1">
                <a href="/#" className="text-decoration-none text-light">
                  Discover & Learn
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md">
            <ReactMapGL
              className="map"
              {...viewport}
              mapboxApiAccessToken={
                "pk.eyJ1IjoiZ2FscGFsYXMyNjUiLCJhIjoiY2txOThlYWh6MGFldjJwam94dTlldjh0eSJ9.yC0mBcPnSJQTe6sSsfbIVQ"
              }
            ></ReactMapGL>
          </div>
        </div>
        <div className="row align-items-center mt-2 gy-2">
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
          <div className="col-lg text-center">
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
