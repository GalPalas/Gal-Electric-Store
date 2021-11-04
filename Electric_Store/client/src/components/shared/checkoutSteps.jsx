import React from "react";
import "./checkoutSteps.css";

const CheckoutSteps = (props) => {
  return (
    <div className="container-fluid">
      <div className="row progressbar">
        <div className={props.step1 ? "active" : ""}>Sign-In</div>
        <div className={props.step2 ? "active" : ""}>Shipping</div>
        <div className={props.step3 ? "active" : ""}>Payment</div>
        <div className={props.step4 ? "active" : ""}>Place Order</div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
