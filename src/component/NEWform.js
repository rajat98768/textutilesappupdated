import React, { useState } from "react";

export default function NEWform(probs) {
  const [text, setText] = useState("enter the text");
  const [word, newword] = useState("Number of words: 0");

  let uppercase = () => {
    setText(text.toUpperCase());
    probs.showAlert("Converted to upper case!");
  };

  let changecontent = (e) => {
    const val = e.target.value;
    setText(val);
    const trimmed = val.trim();
    const count = trimmed ? trimmed.split(/\s+/).length : 0;
    newword("Number of words: " + count);
  };
  let copy = () => {
    let text2 = document.getElementById("exampleFormControlTextarea1");
    text2.select();
    navigator.clipboard.writeText(text2.value);
    probs.showAlert("Text Copied !");
  };
  let Lowercase = () => {
    setText(text.toLowerCase());
    probs.showAlert("Coverted to lowercase !");
  };
  return (
    <div>
      <h1>Enter the text : </h1>
      <div className="mb-3">
        <textarea
          className="form2"
          id="exampleFormControlTextarea1"
          onChange={changecontent}
          value={text}
          placeholder="ENTER THE TEXT"
          rows="3"
        ></textarea>
      </div>
      <div id="grid">
        <button disabled={text.length === 0} id="UPPER" onClick={uppercase}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} id="UPPER" onClick={Lowercase}>
          Convert to lowercase
        </button>
        <button disabled={text.length === 0} id="UPPER" onClick={copy}>
          Click to copy text
        </button>
      </div>
      <h1>{word}</h1>
      <p onChange={changecontent}>
        <b>Preview :</b>
        {text}
      </p>
    </div>
  );
}
