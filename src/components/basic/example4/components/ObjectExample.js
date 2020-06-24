import React, { useState, useReducer } from "react";

import "prismjs/themes/prism-okaidia.css";
import PrismCode from "../../../common/PrismCode";

const person = {
  name: "Spike Mclellan",
  info: {
    age: 22,
    height: "170cm",
  },
};

const person2 = person;
const person3 = { ...person };

function ObjectExample() {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const jsExapmple = `
const person = {
name: '${person.name}',
info: {
    age: ${person.info.age},
    height: '170cm',
  }
}
const person2 = person;
const person3 = {...person};





// orange values are editable
    `;

  const jsExapmple2 = `
// person object 
// {
//  name: '${person.name}',
//  info: {
//    age: ${person.info.age},
//    height: '170cm',
//  }
// }

// person2 object 
// {
//  name: '${person2.name}',
//  info: {
//    age: ${person2.info.age},
//    height: '170cm',
//  }
// }

// person3 object {
//  name: '${person3.name}',
//  info: {
//    age: ${person3.info.age},
//    height: '170cm',
//  }
// }
      `;
  return (
    <div className="object-example">
      <div className="code">
        <PrismCode code={jsExapmple} language="js" plugins={["line-numbers"]} />
        <code className="code__editable-parts">
          <div>
            person.name ={" "}
            <input
              value={person.name}
              onChange={(e) => {
                person.name = e.target.value;
                forceUpdate();
              }}
            />
          </div>
          <div>
            person2.name ={" "}
            <input
              value={person2.name}
              onChange={(e) => {
                person2.name = e.target.value;
                forceUpdate();
              }}
            />
          </div>

          <div>
            person3.name ={" "}
            <input
              value={person3.name}
              onChange={(e) => {
                person3.name = e.target.value;
                forceUpdate();
              }}
            />
          </div>

          <div>
            person.info.age ={" "}
            <input
            type='number'
              value={person.info.age}
              onChange={(e) => {
                person.info.age = e.target.value;
                forceUpdate();
              }}
            />
          </div>
        </code>
      </div>

      <div className="result">
        <PrismCode
          code={jsExapmple2}
          language="js"
          plugins={["line-numbers"]}
        />
      </div>
    </div>
  );
}

export default ObjectExample;
