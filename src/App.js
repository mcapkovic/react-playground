import React, { useState } from "react";
import "./styles/all.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { elastic as Menu } from "react-burger-menu";
import logo from "./logo.svg";
import Context from "./components/context/Context";
import Hooks from "./components/hooks/Hooks";
import Header from "./components/common/Header";
import Template from "./components/template";
import WebComponents from "./components/web-components/WebComponents";
import Dashboard from "./components/common/dashboard/Dashboard";
import Card from "./components/common/dashboard/Card";
import Content from "./components/common/dashboard/Content";
import Basic from './components/basic/Basic';
import Typescript from './components/typescript'

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
        <Card to={`/web-components`}>
          <Content>Web Components</Content>
        </Card>
        <Card to={`/typescript`}>
          <Content>Typescript</Content>
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
          <Link to="/basic" onClick={() => setToggleMenu(false)}>
          Basic
          </Link>
          <Link to="/context" onClick={() => setToggleMenu(false)}>
            Context
          </Link>
          <Link to="/hooks" onClick={() => setToggleMenu(false)}>
            Hooks
          </Link>
          <Link to="/web-components" onClick={() => setToggleMenu(false)}>
          Web Components
          </Link>
          <Link to="/typescript" onClick={() => setToggleMenu(false)}>
          Typescript
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
          <Route path="/web-components" component={WebComponents} />
          <Route path="/typescript" component={Typescript} />

          <Route path="/template" component={Template} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
