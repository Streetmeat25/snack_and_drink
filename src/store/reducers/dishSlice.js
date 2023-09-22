import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dishes: [],
    isLoading: false,
    error: '',
}

export const dishSlice = createSlice({
    name:'dish',
    initialState,
    reducers: {},

})

export default dishSlice.reducer