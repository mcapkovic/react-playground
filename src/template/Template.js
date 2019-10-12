import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../common/Header";
import TemplateExample from "./exampleX/App";
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
        <Card to={`${match.url}/template`}>
          <Content>Empty</Content>
        </Card>
      </Dashboard>
      <img src={logo} className="logo" alt="logo" />
    </>
  );
}

function Template({ match }) {
  return (
    <>
      <Switch>
        <Route exact path={match.path} component={Default} />
        <Route path={`${match.path}/template`} component={TemplateExample} />
      </Switch>
    </>
  );
}

export default Template;
