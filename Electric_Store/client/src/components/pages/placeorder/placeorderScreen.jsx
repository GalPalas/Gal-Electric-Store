import React from "react";
import { useSelector } from "react-redux";
import { getCartItems } from "store/cart";
import { Link } from "react-router-dom";
import CheckoutSteps from "components/shared/checkoutSteps";

const PlaceorderScreen = (props) => {
  const cart = useSelector(getCartItems());
  const { shippingAddress, cartItems } = cart;

  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }

  const toPrice = (num) => Number(num.toFixed(2));
  const itemsPrice = toPrice(
    cartItems.reduce((a, c) => a + c.qty * c.currentPrice, 0)
  );

  const shippingPrice = itemsPrice > 100 ? toPrice(0) : toPrice(10);
  const taxPrice = toPrice(0.15 * itemsPrice);
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const placeOrderHandler = () => {
    // TODO: dispatch place order action
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-8">
            <div className="row m-2">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title mb-3">Shipping</h5>
                  <p className="card-text mb-1">
                    <span className="fw-bold">Name:</span>{" "}
                    {shippingAddress.fullName}
                  </p>
                  <p className="card-text">
                    <span className="fw-bold">Address:</span>{" "}
                    {shippingAddress.address} {shippingAddress.city}{" "}
                    {shippingAddress.postalCode} {shippingAddress.country}
                  </p>
                </div>
              </div>
            </div>
            <div className="row m-2">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title mb-3">Payment</h5>
                  <p className="card-text mb-1">
                    <span className="fw-bold">Method</span> {cart.paymentMethod}
                  </p>
                </div>
              </div>
            </div>
            <div className="row m-2">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title mb-3">Order Items</h5>
                  <ul className="list-unstyled">
                    {cart.cartItems.map((item) => (
                      <li key={item.product}>
                        <div className="row">
                          <div className="d-flex text-center align-items-center justify-content-between">
                            <div className="col-2">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="small img-fluid"
                              ></img>
                            </div>
                            <div className="col-4">
                              <Link to={`/product/${item.product}`}>
                                {item.name}
                              </Link>
                            </div>

                            <div className="col-2">
                              {item.qty} x ${item.currentPrice} = $
                              {item.qty * item.currentPrice}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="card bg-light p-0 m-2">
                <div className="card-body ">
                  <h5 className="card-title mb-3">Order Summary</h5>
                  <div className="d-flex justify-content-between">
                    <div>Items</div>
                    <div>${itemsPrice.toFixed(2)}</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>Shipping</div>
                    <div>${shippingPrice.toFixed(2)}</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>Tax</div>
                    <div className="card-text mb-1">
                      {" "}
                      ${taxPrice.toFixed(2)}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between fw-bold">
                    <div>Order Total</div>
                    <div className="card-text mb-1">
                      ${totalPrice.toFixed(2)}
                    </div>
                  </div>
                  <button
                    className="btn btn-warning w-100 mt-2"
                    onClick={placeOrderHandler}
                    disabled={cart.cartItems.length === 0}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceorderScreen;
