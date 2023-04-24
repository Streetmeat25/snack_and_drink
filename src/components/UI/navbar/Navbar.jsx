import React from 'react';
import classes from "./Navbar.module.css"
const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar_main}>
                <h1>Snack And Drinks</h1>
            </div>
        </div>
    );
};

export default Navbar;