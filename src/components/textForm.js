import React, { useState } from 'react'

export default function TextForm(props) {
    const [Text , setText] = useState("enter text here"); 
    const handleUpClick = () =>{
        console.log("uppercase was clicked" + Text);
        let newText = Text.toUpperCase()
        setText(newText);
        

    }
    const handleLoClick = () =>{
        console.log("uppercase was clicked" + Text);
        let newText = Text.toLowerCase()
        setText(newText);
       

    }
    const handleClearClick = () =>{
      
        let newText = "";
        setText(newText);

    }
    const handle = (event) =>{
        console.log("onchange")
        setText(event.target.value)
    }
    // Text = "new text"  wrong way to change the state
    // setText('new text') correct way to change the state
  return (
    <>
 
<div className="container">
  <h1>{props.heading} </h1>
  <textarea className="form-control" value={Text} onChange={handle}  style = {{ backgroundColor : props.mode==='dark'? 'grey' : 'white'}}  id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className={`btn btn-primary  mx-2` }onClick={handleUpClick } >convert to upperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear text</button>
</div>
<div className="container">
  <h2>your text summary</h2>
  <p>{Text.split(" ").length}word and {Text.length}characters</p>
  <h1>preview</h1>
  <p>{Text}</p>
</div>
</>
      

  )
}

