import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import React, { useState } from 'react'
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light")
  const [msg, setMsg] = useState(null)

  const showMsg = (message, type) => {
    setMsg({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setMsg("")
    }, 1500);
  }

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#49538a";
      showMsg("Dark Mode Enable", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showMsg("Light Mode Enable", "success")
    }
  }

  const CobaltMode = () => {
    if (Mode === "light") {
      setMode("cobalt")
      document.body.style.backgroundColor = "#193549";
      showMsg("Cobalt Mode Enable", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showMsg("Light Mode Enable", "success")
    }
  }

  const ToggleLabels = () => {
    if (Mode === "light") {
      return "black"
    }
    else {
      return "white"
    }
  }

  return (
    <Router>
      <div className="App">
        <NavBar title="TextUtilities" toggle={toggleMode} Mode={Mode} toggleLabel={ToggleLabels()} cobaltMode={CobaltMode} />
        <Alert alert={msg} />
        <Switch>
          <Route exact path="/about">
            <About toggleLabel={ToggleLabels()} />
          </Route>
          <Route exact path="/">
            <TextArea title="Enter Your Text" toggleLabel={ToggleLabels()} showAlert={showMsg} />
          </Route>
        </Switch>
      </div >
    </Router>
  );
}

export default App;
