import React, { useState } from "react";
import Page from "../../common/Page";

// Import the LitElement base class and html helper function
import { LitElement, html } from "lit-element";

// Extend the LitElement base class
class MyElement extends LitElement {
  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render() {
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <!-- template content -->
      <p>A paragraph from custom web component</p>
    `;
  }
}
// Register the new element with the browser.
customElements.define("my-element", MyElement);

class MyElement2 extends LitElement {
  static get properties() {
    return { myProp: String, myProp2: String };
  }
  render() {
    return html`
      <p>${this.myProp}: ${this.myProp2}</p>
    `;
  }
}
customElements.define("my-element2", MyElement2);

class MyElement3 extends LitElement {
  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}
customElements.define("my-element3", MyElement3);

function Example(props) {
  const [input1, setInput1] = useState("input1");

  return (
    <Page {...props}>
      <h1>LitElement examples</h1>
      <input value={input1} onChange={event => setInput1(event.target.value)} />
      <hr />
      <my-element />
      <hr />
      <my-element2 myProp="input1" myProp2={input1} />
      <hr />
      <my-element3>
        <p>Render me</p>
        <p>Me too</p>
        <p>Me three</p>
        <p>Input1: {input1}</p>
      </my-element3>
    </Page>
  );
}

export default Example;
