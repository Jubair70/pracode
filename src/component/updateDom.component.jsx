import React,{useState} from "react";
import './updateDom.style.scss'

const ShowText=()=>{
    const [text,setText] = useState("");
    return (
        <div>
            <h1>Update Data from an input</h1>
            <p>Searched Keyword: {text}</p>
            <input 
                type="text" 
                onChange={(e)=>setText(e.target.value)}
            />
        </div>
    )
}

export default ShowText;