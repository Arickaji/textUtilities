import React, { useState } from 'react'

function TextArea(props) {
    const [text, setText] = useState("")

    const Capitalize = () => {
        setText(text.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))))
        props.showAlert("Capitalize Successfully", "success")
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy into Clipboard", "success")
        document.getSelection().removeAllRanges();
    }

    return (
        <div className="container">
            <h2 className={`my-2 text-${props.toggleLabel}`}>{props.title}</h2>
            <textarea className="form-control" id="Text" rows="3" value={text} onChange={(event) => { setText(event.target.value) }}></textarea>

            <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={() => {
                setText(text.toUpperCase())
                props.showAlert("Converted to Uppercase", "success")
            }}>To UpperCase</button>

            <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={Capitalize}>Capitalize</button>

            <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={() => {
                setText(text.replace(/\s+/g, ' '))
                props.showAlert("Remove White space", "success")
            }}>Remove White Space</button>

            <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={copyText}>Copy Text</button>

            <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={() => {
                setText("")
                props.showAlert("Clear Text Successfully", "success")
            }}>Clear Text</button>
            <p className={`text-${props.toggleLabel} mx-1`}>Total Character : {text.length}</p>
            <p className={`text-${props.toggleLabel} mx-1`}>Total Words : {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</p>
            <h4 className={`text-${props.toggleLabel} mx-1`}>Preview</h4>
            <p className={`text-${props.toggleLabel} mx-1`}>{text.length > 0 ? text : "Nothing To preview"}</p>
        </div >
    )
}

export default TextArea