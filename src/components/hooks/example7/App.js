import React, { useState, useEffect, useRef } from "react";
import Page from "../../common/Page";
import AsyncParent from './AsyncParent';
const SYNC = "sync";
const ASYNC = "async";

function Example(props) {
  const [tab, setTab] = useState(SYNC);

  return (
    <Page {...props}>
      <h1>{props.title}</h1>
      <button disabled={tab === SYNC} onClick={() => setTab(SYNC)}>WithSynchronousChild</button>
      <button disabled={tab === ASYNC} style={{marginLeft: '0.5em'}} onClick={() => setTab(ASYNC)}>WithAsyncChild</button>
      <hr />
      {tab === SYNC && <AsyncParent mode={SYNC} />}
      {tab === ASYNC && <AsyncParent mode={ASYNC} />}
    </Page>
  );
}

export default Example;
