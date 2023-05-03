import React from 'react';
import classes from "./Navbar.module.css"
const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar_main}>
                <p>Snacks And Drinks</p>
            </div>
        </div>
    );
};

export default Navbar;