import React, { useState } from "react";
import Page from "../../common/Page";

function ChildLevel2(props) {
  return <div></div>;
}

function Example(props) {
  const [input1, setInput1] = useState("input1");
  const [input2, setInput2] = useState("input2");

  return (
    <Page {...props}>
      <h1>template</h1>
      <input value={input1} onChange={event => setInput1(event.target.value)} />
      <input value={input2} onChange={event => setInput2(event.target.value)} />
      <ChildLevel2 input1={input1} input2={input2} />
    </Page>
  );
}

export default Example;
