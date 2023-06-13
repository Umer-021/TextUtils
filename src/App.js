import { useState } from "react";
import { About } from "./components/About";
// import { Form } from "./components/Form";
import { Navbar } from "./components/Navbar";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        home="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Form heading="Enter your text here" /> */}
      <About />
    </>
  );
}

export default App;
