import React, { useState, useReducer } from "react";
import Page from "../../common/Page";
import "prismjs/themes/prism-okaidia.css";
import PrismCode from "../../common/PrismCode";
import "./app.css";

const person = {
  name: "Spike Mclellan",
  info: {
    age: 22,
    height: "170cm",
  },
};

const person2 = person;
const person3 = {...person};

function Example(props) {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const jsExapmple = `
const person = {
  name: '${person.name}',
  info: {
    age: 22,
    height: '170cm',
  }
}
const person2 = person;
const person3 = {...person};

person.name = 
person2.name = 
person3.name = 

// person = {
//  name: '${person.name}',
//  info: {
//    age: 22,
//    height: '170cm',
//  }
// }

// person2 = {
//  name: '${person2.name}',
//  info: {
//    age: 22,
//    height: '170cm',
//  }
// }

// person3 = {
//  name: '${person3.name}',
//  info: {
//    age: 22,
//    height: '170cm',
//  }
// }
  `;
  return (
    <Page {...props}>
      <div className="code">
        <PrismCode code={jsExapmple} language="js" plugins={["line-numbers"]} />
        <input
          className="code__input1"
          value={person.name}
          onChange={(e) => {
            person.name = e.target.value;
            forceUpdate();
          }}
        />
        <input
          className="code__input2"
          value={person2.name}
          onChange={(e) => {
            person2.name = e.target.value;
            forceUpdate();
          }}
        />
         <input
          className="code__input3"
          value={person3.name}
          onChange={(e) => {
            person3.name = e.target.value;
            forceUpdate();
          }}
        />
      </div>
    </Page>
  );
}

export default Example;
