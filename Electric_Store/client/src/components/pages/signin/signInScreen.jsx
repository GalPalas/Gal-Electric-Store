import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubit = (e) => {
    e.preventDefault();
    console.log("submited");
  };
  return (
    <div className="container p-5 h-100">
      <div className="row justify-content-center ">
        <div className="col-8">
          <h2 className="mb-3">Sign In</h2>
          <form onSubmit={handleSubit}>
            <div>
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa fa-key" aria-hidden="true"></i>
                </span>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button className="btn btn-success w-100 my-3 shadow-none">
                Sign In
              </button>
            </div>
            <div>
              <p>
                New customer? <Link to="/register">Create your account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
