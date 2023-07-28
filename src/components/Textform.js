import React, {useState} from 'react';

export default function Textform(props) {
    const handleUpClick=()=>{
        console.log.apply("UpperCase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted to UpperCase","Success");
    }
    const handleLoClick=()=>{
      console.log.apply("UpperCase was clicked"+text);
      let newText=text.toLowerCase();
      setText(newText);
      props.ShowAlert("Converted to LowerCase","Success");
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.ShowAlert("Text Copied","Success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.ShowAlert("Extra Space Removed","Success");
  }
  const handleClear=()=>{
    let newText="";
    setText(newText);
    props.ShowAlert("Cleared Text Area","Success");
  }
    const handleOnChange=(Event)=>{
        setText(Event.target.value);
    }
    const [text,setText] = useState(' ');
  return (
    <>
    <div className="container">
        <h1 className="mb-3">{props.Heading}</h1>
      <div className="mb-3 ">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="10"         
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn-btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase </button>
      <button disabled={text.length===0} className="btn-btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase </button>
      <button disabled={text.length===0} className="btn-btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text </button>
      <button disabled={text.length===0} className="btn-btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
      <button disabled={text.length===0} className="btn-btn-primary mx-2 my-1" onClick={handleClear}>Clear </button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((Element)=>{return Element.length!==0}).length} words and {text.length>0?text.length:0} characters</p>
      <p>{0.008 * text.split(" ").filter((Element)=>{return Element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
     </>
  );
}
