import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MessageBox from "components/shared/messageBox";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, getCartItems, removeItemFromCart } from "store/cart";
import "./style.css";

const CartScreen = (props) => {
  const dispatch = useDispatch();

  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector(getCartItems());
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addItemToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-8">
          <h2>Your cart</h2>
          {cartItems.length === 0 ? (
            <MessageBox>
              Your cart is empty{" "}
              <Link className="text-decoration-none" to="/">
                Go Shopping
              </Link>
            </MessageBox>
          ) : (
            <ul className="list-unstyled">
              {cartItems.map((item) => (
                <li key={item.product}>
                  <div className="row">
                    <div className="d-flex text-center align-items-center">
                      <div className="col-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="small img-fluid"
                        ></img>
                      </div>
                      <div className="col-4">
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </div>
                      <div className="col-2">
                        <select
                          className="form-select shadow-none select-qty"
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addItemToCart(
                                item.product,
                                Number(e.target.value)
                              )
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-2">${item.currentPrice}</div>
                      <div className="col-2">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Order Summary</h5>
              <hr />
              <ul className="list-unstyled">
                <li>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Subtotal({cartItems.reduce((a, c) => a + c.qty, 0)} items):{" "}
                    ${cartItems.reduce((a, c) => a + c.currentPrice * c.qty, 0)}
                  </h6>
                </li>
                <hr />
                <li>
                  <button
                    className="btn btn-warning btn-lg w-100 mb-2 btn-checkout"
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                  >
                    Proceed to Checkout
                  </button>
                </li>
                <hr />
                <li>
                  <button
                    className="btn btn-dark text-light btn-lg w-100 mb-2 btn-paypal"
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                  >
                    PayPal <span style={{ fontSize: "12px" }}>Checkout</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
