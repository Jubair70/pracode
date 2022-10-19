import React, { useState,useContext } from "react";
import "./component.styles.scss";
import CartComponent from "./cart.component";
import TotalComponent from './total.component';
import TotalContext from '../store/total-context';

const PurchaseComponent = () => {
  const products = [
    { pName: "Apple", price: 20 },
    { pName: "Banana", price: 3 },
    { pName: "Orange", price: 10 },
    { pName: "Grapes", price: 8 },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [total,setTotal] = useState(0);
  const value = {total,setTotal,cartItems, setCartItems}
  const cartItemHandler = (e) =>{
    const selectedItem = {
        pName: e.target.options[e.target.selectedIndex].text,
        price: e.target.value
    }
    setCartItems([...cartItems,selectedItem])
    setTotal(total + parseInt(e.target.value));
  }
  return (
    <>
      <div className="customDiv">
        <h2>Purchase Component</h2>
        <hr />
        <select onChange={(e)=>cartItemHandler(e)}>
          {products.map((product) => {
            return (
              <option value={product.price}>
                {product.pName} - {product.price}
              </option>
            );
          })}
        </select>
      </div>
      
      <TotalContext.Provider value = {value}>
        <CartComponent/>
        <TotalComponent/>
      </TotalContext.Provider>
    </>
  );
};

export default React.memo(PurchaseComponent);
