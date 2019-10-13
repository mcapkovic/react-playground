import React from "react";
import Page from "../../common/Page";
import "prismjs/themes/prism-okaidia.css";
import PrismCode from "../../common/PrismCode";

const jsExapmple = `
// Set variables
let myBankBalance = 0;
let output = "";

// Do the 'while' loop
while (myBankBalance <= 10) {
  output += "My bank balance is now $" + myBankBalance;
  myBankBalance ++;
}

const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);`;

const cssExample = `color: #000;
vertical-align: middle;
visibility: hidden;`;

const scssExample = `a {
  text-decoration: none;
  margin-left: 0.5em;
  font-size: 1.5em;

  /* unvisited link */
  &:link {
    color: white;
  }

  /* visited link */
  &:visited {
    color: white;
  }

  /* mouse over link */
  &:hover {
    color: rgba(255, 255, 255, 0.705);
  }
}`;

const htmlExample = `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>

<p>My first paragraph.</p>

</body>
</html>`;

function Example(props) {
  return (
    <Page {...props}>
      <h1>Sintax highlight with Prismjs</h1>

      <h2>javascript</h2>
      <PrismCode code={jsExapmple} language="js" plugins={["line-numbers"]} />

      <h2>css</h2>
      <PrismCode code={cssExample} language="css" />

      <h2>html</h2>
      <PrismCode code={htmlExample} language="html" />
    </Page>
  );
}

export default Example;
