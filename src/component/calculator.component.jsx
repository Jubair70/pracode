import React, { useState } from 'react'
import './calculator.styles.scss'

const AddTwoNumbers = () =>{
    const [number1,setNumber1] = useState(0);
    const [number2,setNumber2] = useState(0);
    const [sum,setSum] = useState(0);
    const setterNumber1 = (num) =>{
        setNumber1(num);
    }
    const setterNumber2 = (num) =>{
        // + sign automatically convert string to number
        setNumber2(num);
    }
    const addition = () => {
            setSum(number1+number2);
    }
    return (
        <div>
            <h1>Adding Two Numbers</h1>
            <input type="number" value={number1} onChange={(e)=>setterNumber1(+e.target.value)} />
            <input type="number" value={number2} onChange={(e)=>setterNumber2(+e.target.value)}/>
            <button onClick={()=>addition()}>Add Item</button>
            <div>
                <h3>
                    {sum.toString()}
                </h3>
            </div>
        </div>
        
    )
}

export default AddTwoNumbers;
