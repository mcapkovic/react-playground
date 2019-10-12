import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../common/Header";
import Expample1 from "./example1/App";
import Expample2 from "./example2/App";
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
            useCallback <span className="card__content--vs"> vs </span> useMemo
          </Content>
        </Card>
        <Card to={`${match.url}/expample2`}>
          <Content>Expensive initial state </Content>
        </Card>
        <Card to={`${match.url}/template`}>
          <Content>Empty</Content>
        </Card>
      </Dashboard>
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
        <Route path={`${match.path}/expample2`} component={Expample2} />
        <Route path={`${match.path}/template`} component={Template} />
      </Switch>
    </>
  );
}

export default Hooks;
