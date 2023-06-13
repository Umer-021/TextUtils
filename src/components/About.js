import React, { useState } from "react";

export const About = () => {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [text, setText] = useState("Enable dark mode");
  const toggleColor = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setText("Enable light mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setText("Enable dark mode");
    }
  };
  return (
    <div className="container my-4" style={myStyle}>
      <h1>About Us</h1>
      <button onClick={toggleColor} className="btn btn-primary my-2">
        {text}
      </button>
    </div>
  );
};
