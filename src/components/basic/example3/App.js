import React, { useState, useEffect } from "react";
import Page from "../../common/Page";

const url =
  "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Doctor_Who_diamond_logo.png/220px-Doctor_Who_diamond_logo.png";

function BlobPlaceholder() {
  return (
    <div style={{ height: "216px", width: "220px", backgroundColor: "gray" }} />
  );
}
function ChildLevel2(props) {
  const [blobUrl, setBlobUrl] = useState(null);
  const [toggle, setToggle] = useState(true);

  const load = () => {
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        setBlobUrl(window.URL.createObjectURL(blob));
      });
  };

  const revoke = () => {
    window.URL.revokeObjectURL(blobUrl);
  };

  return (
    <>
      <button onClick={load}>load blob</button>
      <button onClick={revoke}>revoke url</button>
      <button onClick={() => setToggle(!toggle)}>toggle img</button>
      <button onClick={() => setBlobUrl(null)}>reset state</button>

      {toggle && (
        <div>{blobUrl ? <img src={blobUrl} /> : <BlobPlaceholder />}</div>
      )}
    </>
  );
}

function Example3(props) {
  return (
    <Page {...props}>
      <h1>Load blob</h1>
      <ChildLevel2 />
    </Page>
  );
}

export default Example3;
