import React from "react";

const MessageBox = (props) => {
  return (
    <div className="alert alert-danger mb-0 mt-5" role="alert">
      <h5 className="mt-2">{props.children}</h5>
    </div>
  );
};

export default MessageBox;
