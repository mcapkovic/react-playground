import React from "react";
import Header from "../../common/Header";
import Dashboard from '../../common/dashboard/Dashboard';
import Card from "../../common/dashboard/Card";
import Content from "../../common/dashboard/Content";
import logo from "../../../logo.svg";

function DashboardPage(props) {
    const { match } = props;
    return (
      <>
        <Header {...props} />
        <Dashboard>
          {props.contentConfig.map(example => (
            <Card key={example.key} to={`${match.url}/${example.path}`}>
              <Content>
                {example.title}
              </Content>
            </Card>
          ))}
        </Dashboard>
        <img src={logo} className="logo" alt="logo" />
      </>
    );
  }
  
  export default DashboardPage;