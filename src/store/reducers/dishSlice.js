import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dishes: [],
}

export const dishSlice = createSlice({
    name:'dish',
    initialState,
    reducers: {},

})

export default dishSlice.reducer