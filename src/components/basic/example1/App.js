import React from "react";
import Page from "../../common/Page";
import MarkdownElement from '../../common/MarkdownElement';
import demoPage from './markdown/demoPage.md';

function Example(props) {

  return (
    <Page {...props}>
      <MarkdownElement markdown={demoPage} />
    </Page>
  );
}

export default Example;
