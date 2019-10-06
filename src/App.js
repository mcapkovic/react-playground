import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { elastic as Menu } from "react-burger-menu";
import Context from "./context/Context";
import Header from "./common/Header";
import logo from "./logo.svg";

function Home(props) {
  return (
    <>
      <Header {...props} />
      <img src={logo} className="logo" alt="logo" />
    </>
  );
}

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app">
      <Router>
        <Menu
          isOpen={toggleMenu}
          onStateChange={state => setToggleMenu(state.isOpen)}
        >
          <Link to="/" onClick={() => setToggleMenu(false)}>
            Home
          </Link>
          <Link to="/context" onClick={() => setToggleMenu(false)}>
            Context
          </Link>
        </Menu>

        <Switch>
          <Route path="/context" component={Context} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
