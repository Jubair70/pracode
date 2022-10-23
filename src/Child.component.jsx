import { forwardRef, useImperativeHandle } from "react";

const Child = forwardRef((props,ref)=>{
    useImperativeHandle(ref,()=>({
        getMessage(){
            alert(" From Child Component ");
        }
    }))
    return <h1>Child Component</h1>
})

export default Child;