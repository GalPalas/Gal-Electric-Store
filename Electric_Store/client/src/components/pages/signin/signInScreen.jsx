import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, signIn } from "store/userSignIn";
import LoadingBox from "components/shared/loadingBox";
import MessageBox from "components/shared/messageBox";

const SignInScreen = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignIn = useSelector(getUserInfo());
  const { user, loading, error } = userSignIn;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };

  useEffect(() => {
    if (user) {
      props.history.push(redirect);
    }
  }, [user, props.history, redirect]);
  return (
    <div className="container p-5 h-100">
      <div className="row justify-content-center">
        <div className="col-8">
          <h2 className="mb-3">Sign In</h2>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox>{error}</MessageBox>}
          <form onSubmit={handleSubmit}>
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
                New customer?{" "}
                <Link to={`/register?redirect=${redirect}`}>
                  Create your account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
