import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase !", "Success")

    //setText('you have clicked on handleUpClick')

  }
  const handleLoClick = () => {
    // console.log('Lowercase was clicked'+text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted To Lowercase !", "Success")
  }
  const handleCopy = () => {

    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text Copied !", "Success")
  }
  const handleClearClick = () => {
    // console.log(' ');
    let newText = ' ';
    setText(newText)
    props.showAlert("Text Cleared!", "Success")
  }
  const handleExtraSpace = () => {

    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert("Cleared Extra Space!", "Success")
  }

  const handleOnChange = (event) => {
    console.log('On change');
    setText(event.target.value);

  }

  const [text, setText] = useState('Enter text here......');
  // text ='new text'; this is the wrong way to set text
  // setText('new text'); this is the right way to set text
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>{props.heading} </h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="7"></textarea>
          {/* here rows is the no. of rows of text box */}
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Text Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
        <h3>Here is your text summary</h3>
        <p>you have typed {text.split(' ').length} words and {text.length} letters</p>
        <p>Above text can be read in {0.008 * text.split(' ').length} minutes</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter Your Text To Preview Here"}</p>
      </div>
    </>
  )
}
