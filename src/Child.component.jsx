import { useState } from "react";
const Child = (props) =>{
    const [parentcnt,setparentCnt] = useState(0);
    console.log(props);
    return (
        
        <div>
            <h1>Child: {parentcnt}</h1>
            
        </div>
    )
}

export default Child