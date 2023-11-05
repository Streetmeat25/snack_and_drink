import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dishes: [],
}

export const dishSlice = createSlice({
    name:'dish',
    initialState,
    reducers: {
        setDishes:(state,action) => {
            state.dishes = action.payload;
        }
    },

})

export default dishSlice.reducer