import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "store/userSignIn";
import { getCartItems, saveShippingAddress } from "store/cart";
import CheckoutSteps from "components/shared/checkoutSteps";

const ShippingAddressScreen = (props) => {
  const userSignIn = useSelector(getUserInfo());
  const { user } = userSignIn;

  const cart = useSelector(getCartItems());
  const { shippingAddress } = cart;

  if (!user) {
    props.history.push("/signin");
  }

  const dispatch = useDispatch();
  const [fullName, setFullName] = useState(shippingAddress.fullName || "");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push("/payment");
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="col-8">
            <h2 className="mb-3">Shipping Address</h2>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={fullName}
                  placeholder="Enetr Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={address}
                  placeholder="Enetr Address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={city}
                  placeholder="Enetr City"
                  onChange={(e) => setCity(e.target.value)}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="postalcode" className="form-label">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="postalcode"
                  value={postalCode}
                  placeholder="Enetr Postal Code"
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  value={country}
                  placeholder="Enetr Country"
                  onChange={(e) => setCountry(e.target.value)}
                  required
                ></input>
              </div>
              <button type="submit" className="btn btn-warning w-100">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressScreen;
