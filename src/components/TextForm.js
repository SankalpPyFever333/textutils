import React, { useState } from "react";
import PropTypes from "prop-types";

// {useState} is a hook.
// const [text, setText]: it is array destructuring syntax.

export default function TextForm(props) {
  // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState(""); //Remember the syntax.
  //   Here, we are saying that whatever the values written in the inside the useState, that set to the text variable.And it is default value of text.
  // And whenever we update the value of the text variable , we do use the function named: setText
  // For updating the text variable , text="text" like this. It is not allowed in React. For that , we need to use function which we specify in dclaration, in this case it is setText.

  //text= "New text" //It is wrong way to change the state of component. You must use the function which you have define.
  // setText("NewText");

  const handleUpCase = () => {
    // console.log("UpperCase has been fired!!",text);
    // setText("You have clicked on UpperCase button!")
    //this change the value of text to this value we provided inside the setText.
    //This is the correct way to change the state.
    let newText = text.toUpperCase();
    setText(newText);
    // alert("converted to UpperCase");
  };
  const handleLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // alert("converted to LowerCase");
  };
  const handleClearText = () => {
    let text = "";
    setText(text);
    // alert("Text get cleared");
  };
  // Copy text to clipBoard
  const handleCopy= ()=>{
    let text= document.getElementById("MyBox");
    text.select(); //it will select the all the text present in the textarea
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    alert(`you have copied ${text.value}`) //Giving alert mesaage on text copied.
  }
  const handleExtraSpaces=()=>{
    let text= document.getElementById("MyBox");
    let newtext= text.value.split(/[" "]+/); //splitting using RegEx
    setText(newtext.join(" "));

  }

  const handleonChange = (event) => {
    // console.log("Onchange has been fired!!");
    // Now, if you type something from keyboard in the textarea, you cannot type in it but this function runs everytime when you press a key from keyboard.

    // so hwen you listening to any events, like in textarea , we are listening to onChange, so when it listen , you get a 'event' object also.
    setText(event.target.value);
    // Now , its mean that by using setText function, we are setting the value in the textarea which is equal to the text. And we know that text is a state variable.
    // So, now by this, event.target.value, we setting the text entered by the user using setText function.
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="MyBox" className="form-label">
          {props.heading}
        </label> */}
          <textarea
            className="form-control"
            id="MyBox"
            rows="8"
            onChange={handleonChange}
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          copy
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          RemoveExtraSpaces
        </button>
      </div>

      <div className="container my-4">
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read </p>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: PropTypes.string.isRequired };
TextForm.defaultProps = { heading: "This is a TextArea" };

// all component must have a state. For using states, we have to import {usestates}
