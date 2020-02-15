import React, { useState, useEffect, useCallback } from "react";
import stall from "../../utils/stall";

var gatData = async () => {
  await stall(1000);
  return { data: Math.floor(Math.random() * 100) };
};

function AsyncChild(props) {
    const { onChildChange } = props;
  const [state, setState] = useState({ data: 0, loading: false });

  const fetchData = useCallback(async () => {
    console.log(" -------- child data fetch -------- ");
    setState({ ...state, loading: true });
    const result = await gatData();
    console.log(`result: ${result.data}`);
    setState({ ...state, data: result.data, loading: false });
    onChildChange(result.data);
  }, [onChildChange, state]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {state.loading && <div>loading child</div>}
      {!state.loading && <div>child:{state.data}</div>}
      <button
        onClick={() => {
          fetchData();
        }}
      >
        reload child
      </button>
    </div>
  );
}

export default AsyncChild;
