import React from "react";
import { useState } from "react";

export const Form = (props) => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.changeAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.changeAlert("Converted to lowercase", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.changeAlert("Text cleared", "success");
  };
  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <div className="container my-2">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#181f70" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button
            className="btn btn-success  my-2 mx-3"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-success  my-2 mx-3"
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button className="btn btn-success my-2 mx-3" onClick={handleClear}>
            Clear text
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Your text Summary</h2>
        <p>
          <b>{text.split(" ").length}</b> words <b>{text.length}</b> characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
