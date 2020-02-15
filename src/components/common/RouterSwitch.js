import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./dashboard/DashboardPage";

function RouterSwitch(props){
  const {match, contentConfig} = props;
    return(
        <Switch>
          <Route
            exact
            path={match.path}
            component={props => (
              <DashboardPage {...props} contentConfig={contentConfig} />
            )}
          />
          {contentConfig.map(example => (
            <Route
              key={example.key}
              path={`${match.path}/${example.path}`}
              component={example.component}
            />
          ))}
        </Switch>
    )
}

export default RouterSwitch;