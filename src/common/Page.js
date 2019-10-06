import React from "react";
import Header from "./Header";

function Page(props) {
  return (
    <>
      <Header {...props} />
      <div className="page">{props.children}</div>
    </>
  );
}

export default Page;
