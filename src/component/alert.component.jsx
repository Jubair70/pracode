import React,{useState} from 'react';
import './alert.styles.scss'

const Alert = () =>{
    const [text,setText] = useState("");

    if(text.toLowerCase() === 'hello') alert("Passed")

    return (
        <div>
            <h1>Whats the secret phrase</h1>
            <input
                type="text"
                placeholder='Enter a secret'
                onChange={(e)=>{
                    setText(e.target.value)
                }}
            />

        </div>
    )
}

export default Alert;