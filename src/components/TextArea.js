import React, { useState } from 'react'

function TextArea(props) {
    const [text, setText] = useState("")

    const Capitalize = () => {
        setText(text.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))))
        props.showAlert("Capitalize Successfully", "success")
    }

    const copyText = () => {
        let textValue = document.getElementById("Text");
        textValue.select();
        navigator.clipboard.writeText(textValue.value);
        props.showAlert("Copy into Clipboard", "success")
    }

    return (
        <div className="container">
            <h2 className={`my-2 text-${props.toggleLabel}`}>{props.title}</h2>
            <textarea className="form-control" id="Text" rows="3" value={text} onChange={(event) => { setText(event.target.value) }}></textarea>

            <button className="btn btn-primary my-4 mx-1" onClick={() => {
                setText(text.toUpperCase())
                props.showAlert("Converted to Uppercase", "success")
            }}>To UpperCase</button>

            <button className="btn btn-primary my-4 mx-1" onClick={Capitalize}>Capitalize</button>

            <button className="btn btn-primary my-4 mx-1" onClick={() => {
                setText(text.replace(/\s+/g, ' '))
                props.showAlert("Remove White space", "success")
            }}>Remove White Space</button>

            <button className="btn btn-primary my-4 mx-1" onClick={copyText}>Copy Text</button>

            <button className="btn btn-primary my-4 mx-1" onClick={() => {
                setText("")
                props.showAlert("Clear Text Successfully", "success")
            }}>Clear Text</button>
            <p className={`text-${props.toggleLabel}`}>Total Character : {text.length}</p>
            <p className={`text-${props.toggleLabel}`}>Total Words : {text === "" ? 0 : text.endsWith(" ") ? text.split(" ").length - 1 : text.split(" ").length}</p>
            <h4 className={`text-${props.toggleLabel}`}>Preview</h4>
            <p className={`text-${props.toggleLabel}`}>{text}</p>
        </div >
    )
}

export default TextArea