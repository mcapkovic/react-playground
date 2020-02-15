import React, { useState, useEffect } from "react";
import Page from "../../common/Page";

function ChildLevel2(props) {
  const {number, setNumber} = props;
  useEffect(() => {
    console.log(`child number: ${number}`);
    setNumber(5);
  }, [number, setNumber]);
  return <p>current state: {number}</p>;
}

function Example(props) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(`parent number: ${number}`);
  },[number]);

  return (
    <Page {...props}>
      <h1>{props.title}</h1>
      <p>parent with useEffect and state change in child element</p>
      <p>initial state: 0</p>

      <ChildLevel2 number={number} setNumber={setNumber} />
    </Page>
  );
}

export default Example;
