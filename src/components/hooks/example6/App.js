import React, { useState, useEffect } from "react";
import Page from "../../common/Page";
import stall from "../../utils/stall";

var gatData = async () => {
  await stall(1000);
  return { data: Math.floor(Math.random() * 100) };
};

function Example(props) {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true)
    const result = await gatData();
    setData(result.data);
    setLoading(false)
  };

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <Page {...props}>
      <h1>{props.title}</h1>
      {loading && <div>loading</div>}
      {!loading && <div>{data}</div>}
      <button onClick={()=>{fetchData()}}>load</button>
    </Page>
  );
}

export default Example;
