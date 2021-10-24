import React from "react";

const MessageBox = (props) => {
  return (
    <div className="alert alert-danger alert-massage mt-1 p-1" role="alert">
      <p className="lead">{props.children}</p>
    </div>
  );
};

export default MessageBox;
