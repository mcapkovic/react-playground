import React, { useState, useMemo } from "react";
import Page from "../../common/Page";

const alphabet = ["a", "b", "c", "d", "e", "f", 'g', 'h'];

function reducer1(accumulator, currentValue) {
  console.log('generating initialState1')
  return accumulator + currentValue;
}

function reducer2(accumulator, currentValue) {
  console.log('rgenerating initialState2')
  return accumulator + currentValue;
}

function ChildLevel2(props) {
  const initialState1 = alphabet.reduce(reducer1,''); // initialState1 is generated on every rerender
  const initialState2 = useMemo(() => alphabet.reduce(reducer2,''), []); // initialState2 is generated only once

  const [someState1, setSomeState1] = useState(initialState1);
  const [someState2, setSomeState2] = useState(initialState2);

  return <div>alphabet from initialState1: {someState1}<br/>alphabet from initialState2: {someState2}</div>;
}

function Example(props) {
  const [input1, setInput1] = useState("input1");

  return (
    <Page {...props}>
      <h1>Expensive initial state</h1>
      <input value={input1} onChange={event => setInput1(event.target.value)} />
      <ChildLevel2 input1={input1} />
    </Page>
  );
}

export default Example;
