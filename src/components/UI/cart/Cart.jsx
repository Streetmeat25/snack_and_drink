import React from 'react';
import classes from "./Cart.module.css"

const Cart = () => {
    return (
        <div className={classes.main}>
            <div className={classes.navBar}>
                <p>Вы выбрали</p>
                <p>История</p>
            </div>
        </div>
    );
};

export default Cart;