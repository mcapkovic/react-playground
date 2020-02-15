import React, { useState, useRef, useCallback } from "react";
import stall from "../../utils/stall";
import SyncChild from "./SyncChild";
import AsyncChild from "./AsyncChild";

const SYNC = "sync";
const ASYNC = "async";

var gatData = async () => {
  await stall(1000);
  return { data: Math.floor(Math.random() * 100) };
};

function AsyncParent(props) {
  const dataFromChild = useRef(0);
  const renderCount = useRef(0);
  const [state, setState] = useState({ data: 0, loading: false });

//   const fetchData = async () => {
//     console.log(
//       ` -------- parent data fetch - child data: ${dataFromChild.current} -------- `
//     );
//     setState({ ...state, loading: true });
//     const result = await gatData();
//     setState({ ...state, data: result.data, loading: false });
//   };

  const fetchData = useCallback(async () => {
    console.log(
        ` -------- parent data fetch - child data: ${dataFromChild.current} -------- `
      );
      setState({ ...state, loading: true });
      const result = await gatData();
      setState({ ...state, data: result.data, loading: false });
  }, [ state]);


  const onChildChange = useCallback(data => {
    dataFromChild.current = data;
    fetchData();
  }, []);

  console.log(`parent render ${renderCount.current}`);
  renderCount.current += 1;

  return (
    <>
      {state.loading && <div>loading parent</div>}
      {!state.loading && (
        <div>
          parent:{state.data}, data from child: {dataFromChild.current}{" "}
        </div>
      )}
      <button
        onClick={() => {
          fetchData();
        }}
      >
        reload parent
      </button>
      {props.mode === SYNC && <SyncChild onChildChange={onChildChange} />}
      {props.mode === ASYNC && <AsyncChild onChildChange={onChildChange} />}
    </>
  );
}

export default AsyncParent;
