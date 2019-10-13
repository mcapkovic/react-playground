import React, { useState, useEffect } from "react";
import { Remarkable } from "remarkable";

import hljs from "highlight.js";

const md = new Remarkable({
  html: false, // Enable HTML tags in source
  xhtmlOut: false, // Use '/' to close single tags (<br />)
  breaks: false, // Convert '\n' in paragraphs into <br>
  langPrefix: "language-", // CSS language prefix for fenced blocks

  // Enable some language-neutral replacement + quotes beautification
  typographer: false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: "“”‘’",

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
  //   highlight: function(/*str, lang*/) {
  //     return "";
  //   }
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}

    return ""; // use external default escaping
  }
});

function MarkdownElement({ markdown }) {
  const [mdString, setMdString] = useState("");
  useEffect(() => {
    fetch(markdown)
      .then(res => res.text())
      .then(post => setMdString(post))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="markdown-body-bg">
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: md.render(mdString) }}
      />
    </div>
  );
}

export default MarkdownElement;
