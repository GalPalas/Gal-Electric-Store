import React from "react";

const MessageBox = (props) => {
  return props.custom ? (
    <div className={props.custom}>
      <p className="lead m-1">{props.children}</p>
    </div>
  ) : (
    <div className="alert alert-danger alert-massage mt-1 p-1" role="alert">
      <p className="lead m-1">{props.children}</p>
    </div>
  );
};

export default MessageBox;
