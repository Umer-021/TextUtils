import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}!</strong>: {props.alert.msg}
        {/* <button
          type="button"
          className="close"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          X
        </button> */}
      </div>
    )
  );
};

export default Alert;
