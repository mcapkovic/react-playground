import React, { useState, useEffect, useCallback } from "react";

function SyncChild(props) {
  const [data, setData] = useState(0);
  const { onChildChange } = props;

  const fetchData = useCallback(() => {
    console.log(" -------- child data load -------- ");
    const result = { data: Math.floor(Math.random() * 100) };
    console.log(`result: ${result.data}`);
    setData(result.data);
    onChildChange(result.data);
  }, [onChildChange]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div>{data}</div>
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

export default SyncChild;
