import {createSlice} from '@reduxjs/toolkit';

const initialState = {
products:[
    { pName: "Apple", price: 20 },
    { pName: "Banana", price: 3 },
    { pName: "Orange", price: 10 },
    { pName: "Grapes", price: 8 },
],
cart:[],
total:0
};

const purchaseSlice = createSlice({
    name:'purchase',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            state.cart = [...state.cart,action.payload];
            state.total = state.total + parseInt(action.payload.price);
        },
        deleteItem:(state,action)=>{
            state.cart = state.cart.filter((item,index)=>index!==action.payload.index)
            state.total = state.total - action.payload.price;
        }
    }
})

export const {addItem,deleteItem} = purchaseSlice.actions;
export default purchaseSlice.reducer;