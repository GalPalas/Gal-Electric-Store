import React, { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { detailsOrder, orderInfo } from "store/orderDetails";
import { orderPayInfo, orderPayResetList, payOrder } from "store/orderPay";
import { Link } from "react-router-dom";
import LoadingBox from "components/shared/loadingBox";
import MessageBox from "components/shared/messageBox";
import axios from "axios";

const OrderScreen = (props) => {
  const [sdkReady, setSdkReady] = useState(false);
  const orderId = props.match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector(orderInfo());
  const { loading, error, order } = orderDetails;

  const orderPay = useSelector(orderPayInfo());
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay || (order && order._id !== orderId)) {
      dispatch(orderPayResetList());
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, order, orderId, sdkReady, successPay]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox>{error}</MessageBox>
  ) : (
    <div>
      <div className="container-fluid p-5">
        <h2>Order No:{order._id}</h2>
        <div className="row">
          <div className="col-8">
            <div className="row m-2">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title mb-3">Shipping</h5>
                  <p className="card-text mb-1">
                    <span className="fw-bold">Name:</span>{" "}
                    {order.shippingAddress.fullName}
                  </p>
                  <p className="card-text">
                    <span className="fw-bold">Address:</span>{" "}
                    {order.shippingAddress.address} {order.shippingAddress.city}{" "}
                    {order.shippingAddress.postalCode}{" "}
                    {order.shippingAddress.country}
                  </p>
                  {order.isDelivered ? (
                    <MessageBox
                      custom={"alert alert-success alert-massage m-0 p-0"}
                    >
                      Delivered at {order.deliveredAt}
                    </MessageBox>
                  ) : (
                    <MessageBox
                      custom={"alert alert-danger alert-massage m-0 p-0"}
                    >
                      Not Delivered
                    </MessageBox>
                  )}
                </div>
              </div>
            </div>
            <div className="row m-2">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title mb-3">Payment</h5>
                  <p className="card-text mb-1">
                    <span className="fw-bold">Method</span>{" "}
                    {order.paymentMethod}
                  </p>
                  {order.isPaid ? (
                    <MessageBox
                      custom={"alert alert-success alert-massage m-0 p-0"}
                    >
                      Paid at {order.paidAt}
                    </MessageBox>
                  ) : (
                    <MessageBox
                      custom={"alert alert-danger alert-massage m-0 p-0"}
                    >
                      Not Paid
                    </MessageBox>
                  )}
                </div>
              </div>
            </div>
            <div className="row m-2">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title mb-3">Order Items</h5>
                  <ul className="list-unstyled">
                    {order.orderItems.map((item) => (
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
                    <div>${order.itemsPrice.toFixed(2)}</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>Shipping</div>
                    <div>${order.shippingPrice.toFixed(2)}</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>Tax</div>
                    <div className="card-text mb-1">
                      {" "}
                      ${order.taxPrice.toFixed(2)}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between fw-bold">
                    <div>Order Total</div>
                    <div className="card-text mb-1">
                      ${order.totalPrice.toFixed(2)}
                    </div>
                  </div>
                  {!order.isPaid && (
                    <div>
                      {!sdkReady ? (
                        <LoadingBox></LoadingBox>
                      ) : (
                        <>
                          {errorPay && <MessageBox>{errorPay}</MessageBox>}
                          {loadingPay && <LoadingBox></LoadingBox>}

                          <PayPalButton
                            amount={order.totalPrice}
                            onSuccess={successPaymentHandler}
                          ></PayPalButton>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
