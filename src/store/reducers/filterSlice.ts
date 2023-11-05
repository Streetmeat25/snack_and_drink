import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    timeOfDay: '',
    dishCategory: '',
}
export const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers: {
        applyTOD: (state, action) => {
            state.timeOfDay = action.payload;
        },
        applyCategory: (state, action) => {
            state.dishCategory = action.payload;
        }
    }
})


export default filterSlice.reducer;