import React, { useState, useReducer } from "react";
import Page from "../../common/Page";
import "prismjs/themes/prism-okaidia.css";
import PrismCode from "../../common/PrismCode";
import "./app.css";
import  ReactExample from './components/ReactExample';
import ObjectExample from './components/ObjectExample';


function Example(props) {

  return (
    <Page {...props}>
      <h2>Edit object </h2>
      <p>orange values are editable</p>
      <ObjectExample />
      <hr/>
      <h2>Edit object from react props</h2>
      <p>orange values are editable</p>
      <ReactExample/>
    </Page>
  );
}

export default Example;
