import React from "react";
import Page from "../../common/Page";
import "prismjs/themes/prism-okaidia.css";
import PrismCode from "../../common/PrismCode";

// const ADMIN = 0;
// const USER = 1;
enum Role {
  ADMIN,
  USER
}

type Combinable = number | string; // type alias
type User = { name: string; age: number }; // type alias

const user: User = {
  name: "John",
  age: 33
};
const person: {
  name: string; // string
  age: number; // number
  hobbies: string[]; // array
  position: [number, string]; // tuple
  role: number; // enum
  random: number | string; // union types
  specific: "string1" | "string2"; // literal types
  input1: Combinable; // type alias
} = {
  name: "Matej",
  age: 55,
  hobbies: ["swimming", "run"],
  position: [1, "developer"],
  role: Role.ADMIN,
  random: 22,
  specific: "string1",
  input1: "value"
};

const test = `
enum Role {
  ADMIN,
  USER
}

const person: {
  name: string; // string
  age: number; // number
  hobbies: string[]; // array
  position: [number, string]; // tuple
  role: number; // enum
} = {
  name: "Matej",
  age: 55,
  hobbies: ["swimming", "run"],
  position: [1, "developer"],
  role: Role.ADMIN
};`;

function printResult(number: number): void {
  console.log(number);
}

function printResult2(number: number) {
  console.log(number);
}

function printResult3(number: number): undefined {
  console.log(number);
  return;
}

function add(n1:number, n2:number){
  return n1 + n2;
}

const combineValues: Function = add; //function as a type
const combineValues2: (a: number, b:number)=> number = add; //function as a type

// function with callback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

function Example(props: any) {
  printResult(3);
  printResult2(4);
  printResult3(5);
  console.log(combineValues(1,2))
  console.log(combineValues2(2,2))

  addAndHandle(10, 20, (result) => {
    console.log(result);
  })

  return (
    <Page {...props}>
      <h1>{props.title}</h1>
      <PrismCode code={test} language="html" />
    </Page>
  );
}

export default Example;
