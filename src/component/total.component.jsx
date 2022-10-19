import React,{useContext} from 'react'
import TotalContext from '../store/total-context';

const TotalComponent = () =>{

const {total,setTotal} = useContext(TotalContext);
    return (
        <div className="customDiv">
        <h2>Total</h2>
                    <hr/>
               {total}     
        </div>
    )
}

export default React.memo(TotalComponent);