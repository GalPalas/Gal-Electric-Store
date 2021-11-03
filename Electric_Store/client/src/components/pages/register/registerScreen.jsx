import LoadingBox from "components/shared/loadingBox";
import MessageBox from "components/shared/messageBox";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserRegisterInfo, register } from "store/userRegister";

const RegisterScreen = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector(getUserRegisterInfo());
  const { user, loading, error } = userRegister;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (user) {
      props.history.push(redirect);
    }
  }, [user, props.history, redirect]);
  return (
    <div className="container p-5 h-100">
      <div className="row justify-content-center ">
        <div className="col-8">
          <h2 className="mb-3">Create Account</h2>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox>{error}</MessageBox>}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
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
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa fa-key" aria-hidden="true"></i>
                </span>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Enter confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button className="btn btn-success w-100 my-3 shadow-none">
                Register
              </button>
            </div>
            <div>
              <p>
                Already have an account?{" "}
                <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
