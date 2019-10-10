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
  const callback = useCallback(callbackDoSomething, [props.input1]); // callbackDoSomething function is stored in callback
  const callback2 = useCallback(() => callbackDoSomething(props.input1), [
    props.input1
  ]); // callbackDoSomething function is stored in callback2

  const memo = useMemo(memoDoSomething, [props.input1]); // memoDoSomething function is executed and result is stored in memo
  const memo2 = useMemo(() => memoDoSomething(props.input1), [props.input1]); // memoDoSomething function is executed and result is stored in memo2
  // useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)

  return (
    <div>
      <button onClick={() => callback()}>callback</button>
      <button onClick={() => callback2()}>callback2</button>
      <button onClick={() => console.log(memo)}>memo</button>
      <button onClick={() => console.log(memo2)}>memo2</button>
    </div>
  );
}

function ContextE1(props) {
  const [input1, setInput1] = useState("input1");
  const [input2, setInput2] = useState("input2");

  return (
    <Page {...props}>
      <input value={input1} onChange={event => setInput1(event.target.value)} />
      <input value={input2} onChange={event => setInput2(event.target.value)} />
      <SomethingL2 input1={input1} input2={input2} />
    </Page>
  );
}

export default ContextE1;
