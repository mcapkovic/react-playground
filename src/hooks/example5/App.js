import React, { useState } from "react";
import Page from "../../common/Page";
import stall from "../../utils/stall";

function doSomething() {
  let sum = 0;
  for (let index = 0; index < 5000000000; index++) {
    sum += index;
  }
  return sum;
}

function ChildLevel2(props) {
  const [slowState, setSlowState] = useState(doSomething);

  return <div> {slowState && <div>{slowState}</div>}</div>;
}

function Example(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Page {...props}>
      <h1>{props.title}</h1>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>open slow state</button>
      </div>
      {isOpen && <ChildLevel2 />}
    </Page>
  );
}

export default Example;
