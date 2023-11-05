import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state,action) => {
            state.cart.push(action.payload);
        },
        deleteFromCart:(state,action) => {
            console.log(action.payload)

            let index = state.cart.indexOf(action.payload)
            state.cart = state.cart.splice(index , 1)
        },
    }
})

export default cartSlice.reducer;