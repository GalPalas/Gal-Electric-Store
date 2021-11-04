import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems, savePaymentMethod } from "store/cart";
import CheckoutSteps from "components/shared/checkoutSteps";

const PaymentScreen = (props) => {
  const cart = useSelector(getCartItems());
  const { shippingAddress } = cart;

  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }

  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="col-8">
            <h2 className="mb-2">Payment Method</h2>
            <form onSubmit={SubmitHandler}>
              <div className="form-check">
                <input
                  type="radio"
                  id="paypal"
                  className="form-check-input"
                  name="paymentMethod"
                  value="PayPal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  checked
                  required
                />
                <label className="form-check-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="stripe"
                  className="form-check-input"
                  name="paymentMethod"
                  value="Stripe"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                <label className="form-check-label" htmlFor="stripe">
                  Stripe
                </label>
              </div>
              <button type="submit" className="btn btn-warning w-100 mt-2">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;
