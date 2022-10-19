import { createContext } from 'react'

const TotalContext =  createContext({
    total:0,
    setTotal:()=>{},
    cartItems:[], setCartItems:()=>{},
})

export default TotalContext;