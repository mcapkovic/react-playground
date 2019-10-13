import React, { useState } from "react";
import "./styles/all.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { elastic as Menu } from "react-burger-menu";
import Context from "./context/Context";
import Hooks from "./hooks/Hooks";
import Header from "./common/Header";
import Template from "./template/Template";
import logo from "./logo.svg";
import Dashboard from "./common/dashboard/Dashboard";
import Card from "./common/dashboard/Card";
import Content from "./common/dashboard/Content";
import Basic from './basic/Basic';

function Home(props) {
  return (
    <>
      <Header {...props} />
      <Dashboard>
        <Card to={`/basic`}>
          <Content>Basic</Content>
        </Card>
        <Card to={`/context`}>
          <Content>Context</Content>
        </Card>
        <Card to={`/hooks`}>
          <Content>Hooks</Content>
        </Card>
      </Dashboard>
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
          <Link to="/hooks" onClick={() => setToggleMenu(false)}>
            Hooks
          </Link>
          <Link to="/basic" onClick={() => setToggleMenu(false)}>
          Basic
          </Link>
          <Link to="/template" onClick={() => setToggleMenu(false)}>
            Template
          </Link>
        </Menu>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/context" component={Context} />
          <Route path="/hooks" component={Hooks} />
          <Route path="/basic" component={Basic} />
          <Route path="/template" component={Template} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
