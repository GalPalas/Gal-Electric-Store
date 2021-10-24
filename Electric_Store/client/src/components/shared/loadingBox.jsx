import React from "react";

const LoadingBox = () => {
  return (
    <div className="text-center p-5">
      <div
        className="spinner-border text-warning"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div>
        <strong>Loading...</strong>
      </div>
    </div>
  );
};

export default LoadingBox;
