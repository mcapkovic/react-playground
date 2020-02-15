import React from "react";
import Example1 from "./example1/App";
import Example2 from "./example2/App";
import Example3 from "./example3/App";
import Example4 from "./example4/App";
import Example5 from "./example5/App";
import Example6 from "./example6/App";
import Example7 from "./example7/App";
import Template from "./exampleX/App";
import RouterSwitch from "../common/RouterSwitch";

const contentConfig = [
  {
    key: 0,
    path: "Example1",
    title: (
      <>
        useCallback <span className="card__content--vs"> vs </span> useMemo
      </>
    ),
    component: Example1
  },
  {
    key: 1,
    path: "Example2",
    title: "Expensive initial state",
    component: Example2
  },
  {
    key: 2,
    path: "Example3",
    title: "Call multiple setState",
    component: Example3
  },
  {
    key: 3,
    path: "Example4",
    title: "State change during mounting",
    component: props =>
      Example4({ ...props, title: "State change during mounting" })
  },
  {
    key: 4,
    path: "Example5",
    title: "Slow initial state",
    component: props => Example5({ ...props, title: "Slow initial state" })
  },
  {
    key: 5,
    path: "Example6",
    title: "Simulate fetch",
    component: props => Example6({ ...props, title: "Simulate fetch" })
  },
  {
    key: 6,
    path: "Example7",
    title: "Simulate a parent fetch with data from a child",
    component: props =>
      Example7({
        ...props,
        title: "Simulate a parent fetch with data from a child"
      })
  },
  {
    key: 7,
    path: "template",
    title: "Empty",
    component: Template
  }
];

function Hooks({ match }) {
  return <RouterSwitch match={match} contentConfig={contentConfig} />;
}

export default Hooks;
