



import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../common/Header";
import Expample1 from "./example1/App";
import Template from "./exampleX/App";
import logo from "../logo.svg";
import Dashboard from "../common/dashboard/Dashboard";
import Card from "../common/dashboard/Card";
import Content from "../common/dashboard/Content";

function Default(props) {
  const { match } = props;
  return (
    <>
      <Header {...props} />
      <Dashboard>
        <Card to={`${match.url}/expample1`}>
          <Content>
          Context basic usage
          </Content>
        </Card>
        <Card to={`${match.url}/template`}>
          <Content>Empty</Content>
        </Card>
      </Dashboard>
      <img src={logo} className="logo" alt="logo" />
    </>
  );
}

function Context({ match }) {
  return (
    <>
      <Switch>
        <Route exact path={match.path} component={Default} />
        <Route path={`${match.path}/expample1`} component={Expample1} />
        <Route path={`${match.path}/template`} component={Template} />
      </Switch>
    </>
  );
}

export default Context;
