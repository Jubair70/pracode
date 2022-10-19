import React,{useContext, useState} from "react";
import TotalContext from "../store/total-context";
import PurchaseComponent from "./purchase.component";
import TotalComponent from "./total.component";

const CartComponent = () => {
    const {total,setTotal,cartItems, setCartItems} = useContext(TotalContext)

  const deleteItem = (e) =>{
    setTotal(total-parseInt(e.target.value));
    let cartList = cartItems.filter((item)=>item.price!=e.target.value)
    setCartItems(cartList) 
  }
  return (
    <div className="customDiv">
      <h2>Cart Component</h2>
      <hr />
      <ul >
        {
            cartItems.map((prop,index)=>{
                return(
                    <li value={prop.price} key={index} onClick={(e)=>deleteItem(e)}>{prop.pName}</li>
                )
            })
        }
      </ul>
    </div>
    
  );
};

export default React.memo(CartComponent);
