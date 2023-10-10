import React from 'react';
import classes from "./Cart.module.css"
import DishCard from "./DishCard/DishCard";

const Cart = () => {
    return (
        <div className={classes.main}>
            <div className={classes.navBar}>
                <p>Вы выбрали</p>
                <p>История</p>
            </div>
            <div className={classes.dishList}>
                <DishCard isLiked={true}/>
                <DishCard isLiked={false}/>
            </div>
        </div>
    );
};

export default Cart;