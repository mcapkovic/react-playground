import React, { useState, useCallback, useMemo } from "react";
import Page from "../../common/Page";

function memoDoSomething(message = "default") {
  console.log( 'memo updated, message: '+ message);
  return 'hi from memo, message: ' + message
}

function callbackDoSomething(message = "default") {
  console.log('callback called, message: '+ message);
}

function SomethingL2(props) {
  const memo = useMemo(memoDoSomething, [props.input1]);
  const memo2 = useMemo(() => memoDoSomething(props.input1), [props.input1]);
  
  const callback = useCallback(callbackDoSomething, [props.input1]);
  const callback2 = useCallback(() => callbackDoSomething(props.input1), [props.input1]);

  return (
    <div>
      <button onClick={() => console.log(memo)}>memo</button>
      <button onClick={() => console.log(memo2)}>memo2</button>
      <button onClick={() => callback()}>callback</button>
      <button onClick={() => callback2()}>callback2</button>
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
      <SomethingL2 input1={input1} input2={input2}/>
    </Page>
  );
}

export default ContextE1;
