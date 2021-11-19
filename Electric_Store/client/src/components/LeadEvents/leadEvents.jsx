import React from "react";
import "./leadEvent.css";

const LeadEvents = () => {
  return (
    <div className=" container-fluid bg-light p-5">
      <div className="row gy-3">
        <div className="col-lg-6">
          <div className="position-relative text-sm-center">
            <div className="position-absolute lead1">
              <h1 className="fw-bold">Apple Shopping Event.</h1>
              <p>Shop great deals on Apple products this holiday season.</p>
              <button className="btn btn-primary btn-md">Shop Now</button>
            </div>
            <img
              className="image-fluid w-100"
              src="/images/Apple.jpg"
              alt=""
            ></img>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="position-relative text-sm-start">
            <div className="position-absolute lead2">
              <h1 className="fw-bold">
                Performance for <br></br> productivity.
              </h1>
              <p>
                Save up to $400 on select laptops powered by 11th Gen Intel®
                Core™ processors.
              </p>

              <button className="btn btn-primary btn-md">Shop Now</button>
            </div>
            <img
              className="image-fluid w-100"
              src="/images/Laptop.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadEvents;
