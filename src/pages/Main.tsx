import React, {FC, useEffect, useState} from 'react';
import MyButton from "../components/UI/buttons/MyButton";
import DishList from "../components/DishList";
import Loader from "../components/UI/Loader/Loader";
import DishItem from "../components/DishItem";
import {useFetching} from "../hooks/useFetching";
// import DishService from "../services/DishService";
import Filter from "../components/UI/Filter/Filter";
import {dishApi} from "../services/DishService"
import UpdateButton from "../components/UI/buttons/UpdateButton/UpdateButton";
import {useDispatch} from "react-redux";
import {filterSlice} from "../store/reducers/filterSlice";
import {dishSlice} from "../store/reducers/dishSlice";
import Cart from "../components/UI/cart/Cart";
import data from '../../db.json'

const Main = () => {
    // const {data: dishes, error, isLoading} = dishApi.useFetchAllDishesQuery('')
    const isLoading=false;
    const error = false;
    const dispatch = useDispatch()
    const {setDishes} = dishSlice.actions
    const dishes = data.dishes;

    useEffect(() => {
        dispatch(setDishes(dishes))
    }, [])


    return (
        <div className="main">

            {/*<Cart/>*/}

            <Filter/>
            {isLoading ? (
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                    <Loader/>
                </div>
            ) : error ? (
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                        Ошибка загрузки данных
                    </div>
                )
                : (
                    <DishList dishes={dishes}/>


                )


            }

        </div>
    );
};

export default Main;