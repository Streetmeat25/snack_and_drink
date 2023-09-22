import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dishReducer from './reducers/dishSlice'
import {dishApi} from "../services/DishService";


const rootReducer = combineReducers({
    dishReducer,
    [dishApi.reducerPath]: dishApi.reducer
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(dishApi.middleware)

    })
}
