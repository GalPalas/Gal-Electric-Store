import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <section className="bg-warning text-dark p-3">
      <div className="container">
        <div className="d-md-flex align-items-center justify-content-between">
          <h3 className="mb-4 mb-md-0">Sign Up For Our Newsletter</h3>

          <div className="input-group news-input">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
            />
            <button className="btn btn-dark btn-lg" type="button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
