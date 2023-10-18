import React from 'react';
import classes from "./Cart.module.css"
import DishCard from "./DishCard/DishCard";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {cartSlice} from "../../../store/reducers/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const {addToCart, deleteFromCart} = cartSlice.actions
    const {cart} = useSelector(state => state.cartReducer)

    return (
        <div className={classes.main}>
            <div className={classes.navBar}>
                <p>Вы выбрали</p>
                <p>История</p>
            </div>
            <div className={classes.dishList}>
                {
                    cart.map((el, index) =>
                    <DishCard key={index} dish={el} isLiked={true}/>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;