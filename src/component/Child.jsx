import { forwardRef, useImperativeHandle } from "react";


const Child = forwardRef((props,ref) =>{
    useImperativeHandle(ref,()=>({
        getALert(){
            alert("good day to u");
        }
        
    }))
    return (
        <h1>Child Component</h1>
    )
})

export default Child;