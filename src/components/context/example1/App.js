import React, { useState, useContext } from "react";
import Page from "../../common/Page";

const MyContext = React.createContext("defaultValue");

class Class2L3 extends React.Component {
  static contextType = MyContext;

  render() {
    const value = this.context;
    console.log("Class2L3 render");
    return <div>Class2L3: {value}</div>;
  }
}

class ClassL3 extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {value => {
          console.log("ClassL3 render");
          return <div>ClassL3: {value}</div>;
        }}
      </MyContext.Consumer>
    );
  }
}

function FunctionL3() {
  const value = useContext(MyContext);
  console.log("FunctionL3 render");
  return <div>FunctionL3: {value}</div>;
}

function SomethingL2() {
  console.clear();
  return (
    <>
      <FunctionL3 />
      <ClassL3 />
      <Class2L3 />
    </>
  );
}

function ContextE1(props) {
  const [input1, setInput1] = useState("default");
  return (
    <Page {...props}>
      <h1>Context basic usage</h1>
      <input value={input1} onChange={event => setInput1(event.target.value)} />
      <MyContext.Provider value={input1}>
        <SomethingL2 />
      </MyContext.Provider>
    </Page>
  );
}

export default ContextE1;
