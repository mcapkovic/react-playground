import React from "react";
// import Example1 from "./example1/App";
// import Example2 from "./example2/App";
// import Example3 from "./example3/App";
// import Example4 from "./example4/App";
// import Example5 from "./example5/App";
// import Example6 from "./example6/App";
// import Example7 from "./example7/App";
import Template from "./exampleX/App";
import RouterSwitch from "../common/RouterSwitch";

const contentConfig = [
    {
      key: 0,
      path: "template",
      title: "Empty",
      component: Template
    }
];

function Typescript({ match }) {
  return <RouterSwitch match={match} contentConfig={contentConfig} />;
}

export default Typescript;
