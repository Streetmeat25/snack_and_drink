import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dishReducer from './reducers/dishSlice'
import filterReducer from './reducers/filterSlice'
import cartReducer from './reducers/cartSlice'
import {dishApi} from "../services/DishService";


const rootReducer = combineReducers({
    filterReducer,
    dishReducer,
    cartReducer,
    [dishApi.reducerPath]: dishApi.reducer
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(dishApi.middleware)

    })
}
