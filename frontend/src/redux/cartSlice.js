import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[], // will be storing only ids and image(cropped)
    },
    reducers:{
        add: (state, action) => {
            state.products = [...state.products, ...action.payload];
        },
      
        remove: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload);
        }
    }
});
export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;