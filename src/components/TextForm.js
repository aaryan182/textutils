import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!",'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase!",'success')
    }

    const handleClnClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("All the text has been cleared!",'success')
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div>
                    <h1>{props.heading}</h1>
                    <div className='mb-3'>
                        <textarea className='form-control' value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#010893' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8" placeholder='Enter your text here ...'></textarea>
                    </div>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClnClick}>Clear All</button>
                </div>
                <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h1>Your text summary</h1>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Mintues read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Nothing to preview  here..."}</p>
                </div>
            </div>
        </>
    ) 
}
