import React, { useState, useCallback, useMemo } from "react";
import Page from "../../common/Page";

function memoDoSomething(message = "default") {
  console.log("memo updated, message: " + message);
  return "hi from memo, message: " + message;
}

function callbackDoSomething(message = "default") {
  console.log("callback called, message: " + message);
}

function SomethingL2(props) {
  const callback = useCallback(callbackDoSomething, [props.input1]); // callbackDoSomething function is stored in callback and updated on input1 change
  const callback2 = useCallback(() => callbackDoSomething(props.input1), [
    props.input1
  ]); // callbackDoSomething function is stored in callback2 and updated on input1 change
  
  // useCallback(fn, deps) is equivalent to useMemo(() => fn, deps) 
  
  const memo = useMemo(memoDoSomething, [props.input1]); // memoDoSomething function is executed and result is stored in memo and updated on input1 change
  const memo2 = useMemo(() => memoDoSomething(props.input1), [props.input1]); // memoDoSomething function is executed and result is stored in memo2 and updated on input1 change

  return (
    <div>
      <hr/>
      <button onClick={() => callback()}>callback</button>
      <button onClick={() => callback2()}>callback2 with input1 value</button>
      <hr/>
      <button onClick={() => console.log(memo)}>memo</button>
      <button onClick={() => console.log(memo2)}>memo2 with input1 value</button>
    </div>
  );
}

function Example(props) {
  const [input1, setInput1] = useState("input1");
  const [input2, setInput2] = useState("input2");

  return (
    <Page {...props}>
      <h1>useCallback and useMemo basic usage</h1>
      <input value={input1} onChange={event => setInput1(event.target.value)} />
      <input value={input2} onChange={event => setInput2(event.target.value)} />
      <SomethingL2 input1={input1} input2={input2} />
    </Page>
  );
}

export default Example;
