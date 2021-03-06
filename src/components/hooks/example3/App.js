import React, { useState, useEffect } from "react";
import Page from "../../common/Page";
import { DisplayState } from "react-display-state";

function changeState(setState) {
  const randomValue = Math.random();
  setState(randomValue);
}

function ChildLevel2(props) {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [input3, setInput3] = useState("input3");

  useEffect(() => {
    // console.log('useEffect called')
    setValue1(props.input1);
    setValue2(props.input1);
    setValue3(props.input1);
    setValue4(props.input1);
    changeState(setValue5);
  }, [props.input1, input3]);

  const random = () => {
    // console.log("random called");
    const randomValue = Math.random();
    setValue1(randomValue);
    setValue2(randomValue);
    setValue3(randomValue);
    setValue4(randomValue);
    changeState(setValue5);
  };

  console.log("ChildLevel2 render");
  return (
    <div>
      <input value={input3} onChange={event => setInput3(event.target.value)} />
      <button onClick={random}>update on click</button>
      <DisplayState title='State title' state={{ value1, value2, value3, value4, value5 }} renderCount theme='dark' />
    </div>
  );
}

function Example3(props) {
  const [input1, setInput1] = useState("input1");

  return (
    <Page {...props}>
      <h1>Multiple setState call</h1>
      <p>24.11.2019 React currently will batch state updates if they're triggered from within a React-based event, like a button click or input change. It will not batch updates if they're triggered outside of a React event handler, like a setTimeout().</p>
      <input value={input1} onChange={event => setInput1(event.target.value)} />
      <ChildLevel2 input1={input1} />
    </Page>
  );
}

export default Example3;
