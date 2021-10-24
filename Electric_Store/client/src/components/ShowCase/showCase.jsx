import React from "react";

const ShowCase = () => {
  return (
    <section className="bg-primary text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex justify-content-between align-items-center">
          <div>
            <h1>
              The Early <span className="text-warning">Deals Event</span>
            </h1>
            <p className="fw-bold mb-0">
              Start saving with Black Friday Prices Guaranteed.*
            </p>
            <p>Plus, exclusive offers for our members.</p>
            <button className="btn btn-lg btn-warning fw-bold">Shop Now</button>
          </div>
          <img
            className="img-fluid w-50 d-none  d-sm-block"
            src="images/undraw_Gifts_re_97j6.svg"
            alt="show case img"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
