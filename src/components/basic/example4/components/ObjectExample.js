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
  const [deleteCheckbox, setDeleteCheckbox] = useState(false);

  if(deleteCheckbox){
    delete person.info.height;
  }else{
    person.info.height = '170cm'
  }

  const jsExapmple = `
// orange values are editable
const person = {
name: '${person.name}',
info: {
    age: ${person.info.age},
    ${person.info.height?`height: '170cm',`:'' }
  }
}
const person2 = person;
const person3 = {...person};




  ${deleteCheckbox?'': '//'}delete person.info.height
    `;

  const jsExapmple2 = `
// person object 
// {
//  name: '${person.name}',
//  info: {
//    age: ${person.info.age},
//    ${person.info.height?`height: '170cm',`:'' }
//  }
// }

// person2 object 
// {
//  name: '${person2.name}',
//  info: {
//    age: ${person2.info.age},
//    ${person2.info.height?`height: '170cm',`:'' }
//  }
// }

// person3 object {
//  name: '${person3.name}',
//  info: {
//    age: ${person3.info.age},
//    ${person3.info.height?`height: '170cm',`:'' }
//  }
// }
      `;
  return (
    <div className="object-example">
      <div className="code">
        <PrismCode code={jsExapmple} language="js" plugins={["line-numbers"]} />
        <code className="code__editable-parts">
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
            // type='number'
              value={person.info.age}
              onChange={(e) => {
                person.info.age = e.target.value;
                forceUpdate();
              }}
            />
          </div>

          <div>
          <input
            type='checkbox'
              value={deleteCheckbox}
              onChange={() => {
                setDeleteCheckbox(!deleteCheckbox);
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
