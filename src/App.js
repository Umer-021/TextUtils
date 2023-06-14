import { useState } from "react";
// import { About } from "./components/About";
import { Form } from "./components/Form";
import { Navbar } from "./components/Navbar";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#181f70";
      changeAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      changeAlert("Light mode is enabled", "success");
    }
  };

  const changeAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        about="About"
        home="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} changeAlert={changeAlert} />

      {/* <Switch>
          <Route path="/about">
            <About />
          </Route> */}
      {/* <Route exact path="/"> */}
      <Form
        heading="Enter your text here"
        mode={mode}
        changeAlert={changeAlert}
        alert={alert}
      />
      {/* </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
