import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "../common/Header";
import Expample1 from "./example1/App";
import logo from "../logo.svg";

function Default(props) {
  const { match } = props;
  return (
    <>
      <Header
        {...props}
        headerRender={
          <>
            Examples:
            <Link to={`${match.url}/expample1`}>example1</Link>
            {/* <Link to={`${match.url}/expample2`}>example2</Link> */}
          </>
        }
      />
      <img src={logo} className="logo" alt="logo" />
    </>
  );
}

function Hooks({ match }) {
  return (
    <>
      <Switch>
        <Route exact path={match.path} component={Default} />
        <Route path={`${match.path}/expample1`} component={Expample1} />
        {/* <Route path={`${match.path}/expample2`} component={Expample1} /> */}
      </Switch>
    </>
  );
}

export default Hooks;
