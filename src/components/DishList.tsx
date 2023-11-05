import React, {useEffect, useState} from 'react';
import DishItem from "./DishItem";
import UpdateButton from "./UI/buttons/UpdateButton/UpdateButton";
import {IconButton} from "@mui/material";
import {useDispatch} from "react-redux";
import {cartSlice} from "../store/reducers/cartSlice";

const DishList = ({dishes}) => {
    const [dishNumber, setDishNumber] = useState(0)
    const dispatch = useDispatch()
    const {addToCart, deleteFromCart} = cartSlice.actions

    return (
        <div className="dish-list">
            <DishItem dish={dishes[dishNumber]}/>
            <IconButton
                onClick={() => {
                    if (dishNumber == 0) return
                    setDishNumber(i => i - 1);
                }}
                style={{position: "absolute", top: "30%", left: "-6%", background: "transparent"}}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <rect width="50" height="50" rx="24.8718" fill="#F5F5F5"/>
                    <path d="M49.8718 40.3974L45.8718 43.8974L49.8718 47.3974" transform="translate(-24,-19)"
                          stroke="#595959" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>

                </svg>
            </IconButton>
            <IconButton
                onClick={() => {
                    if (dishNumber == dishes.length - 1) return
                    setDishNumber(i => i + 1);
                }}
                style={{position: "absolute", top: "30%", left: "94%"}}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="transparent" xmlns="http://www.w3.org/2000/svg">

                    <rect width="50" height="50" rx="24.8718" fill="white"/>
                    <path d="M45.8718 47.3974L49.8718 43.8974L45.8718 40.3974" transform="translate(-23,-19)"
                          stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                </svg>
            </IconButton>

            <UpdateButton onClick={()=> dispatch(addToCart(dishes[dishNumber]))}>
                + Добавить
            </UpdateButton>
        </div>
    );
};

export default DishList;