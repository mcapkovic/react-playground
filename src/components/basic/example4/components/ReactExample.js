import React, { useState, useReducer } from "react";
import "prismjs/themes/prism-okaidia.css";
import PrismCode from "../../../common/PrismCode";

function CodeExample({ source, result, editableParts, editablePartsStyle={} }) {
  return (
    <div className="object-example">
      <div className="code">
        <PrismCode code={source} language="js" plugins={["line-numbers"]} />
        {editableParts && (
          <code className="code__editable-parts" style={editablePartsStyle}>{editableParts}</code>
        )}
      </div>
      <div className="result">
        <PrismCode code={result} language="js" plugins={["line-numbers"]} />
      </div>
    </div>
  );
}


// function FirstChild(props) {
//   const firstChildPerson = props.person;
//   firstChildPerson.name = 'test';
//   return <div>{/* your code */}</div>;
// }


const personDefault = {
  name: "Spike Mclellan",
  info: {
    age: 22,
    height: "170cm",
  },
};

function FirstChild(props) {
  const { forceUpdate } = props;
  const firstChildPerson = props.person;
  // firstChildPerson.name = "test";

  const jsExapmple = `
// orange value is editable
function FirstChild(props) {
    const firstChildPerson = props.person;


    return <div>{/* your code */}</div>;
}
    `;
  const jsExapmple2 = `
// firstChildPerson object 
// {
//  name: '${firstChildPerson.name}',
//  info: {
//    age: ${firstChildPerson.info.age},
//    height: '170cm',
//  }
// }
`;
  return (
    <CodeExample
      source={jsExapmple}
      editableParts={
        <div>
          firstChildPerson.name ={" "}
          <input
            value={firstChildPerson.name}
            onChange={(e) => {
              firstChildPerson.name = e.target.value;
              forceUpdate();
            }}
          />
        </div>
      }
      editablePartsStyle={{top: '80px', left: '38px'}}
      result={jsExapmple2}
    />
  );
}

function SecondChild(props) {
  const secondChildPerson = props.person;

  const jsExapmple = `
function SecondChild(props) {
    const secondChildPerson = props.person;

    return <div>{/* your code */}</div>;
}
    `;
  const jsExapmple2 = `
// secondChildPerson object 
// {
//  name: '${secondChildPerson.name}',
//  info: {
//    age: ${secondChildPerson.info.age},
//    height: '170cm',
//  }
// }
`;
  return (
    <CodeExample
      source={jsExapmple}
      result={jsExapmple2}
    />
  );
}

function ReactExample() {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [person, setPerson] = useState(personDefault);

  const sourceCode = `
const personDefault = {
  name: '${person.name}',
  info: {
      age: ${person.info.age},
      height: '170cm',
    }
  }

function Parent(){
  const [person, setPerson] = useState(personDefault);

  return(
    <>
      <FirstChild person={person} />
      <SecondChild person={person} />
    </>
  )
}
`;

  const resultCode = `
// person state 
// {
//  name: '${person.name}',
//  info: {
//    age: ${person.info.age},
//    height: '170cm',
//  }
// }
      `;
  return (
    <>
      <CodeExample
        source={sourceCode}
        result={resultCode}
      />
      <br />
      <FirstChild person={person} forceUpdate={forceUpdate} />
      <SecondChild person={person}/>
    </>
  );
}

export default ReactExample;
