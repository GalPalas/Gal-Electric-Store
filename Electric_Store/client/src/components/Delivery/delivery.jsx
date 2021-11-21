import React from "react";
import "./delivery.css";

const Delivery = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row gy-3">
        <div className="col-lg">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="/images/freeshipping.png"
              alt=""
              className="freeshipping"
            />
            <div className="mx-2">
              <a
                href="/#"
                className="text-secondary text-decoration-none fw-bold fs-5"
              >
                Free next-day delivery
              </a>
              <p>on thousands of items.</p>
            </div>
          </div>
        </div>
        <div className="col-lg">
          <div className="d-flex justify-content-center align-items-center">
            <img src="/images/curbside.png" alt="" className="freeshipping" />
            <div className="mx-2">
              <a
                href="/#"
                className="text-secondary text-decoration-none fw-bold fs-5"
              >
                Ready in one hour
              </a>
              <p>with Store or Curbside Pickup.</p>
            </div>
          </div>
        </div>
        <div className="col-lg">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="/images/freeshipping.png"
              alt=""
              className="freeshipping"
            />
            <div className="mx-2">
              <a
                href="/#"
                className="text-secondary text-decoration-none fw-bold fs-5"
              >
                Same-day delivery.
              </a>
              <p>Order by 4 p.m., get it by 9 p.m.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
