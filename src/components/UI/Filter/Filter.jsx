import React from 'react';
import classes from './Filter.module.css'
import MyButton from "../button/MyButton";

const Filter = () => {
    return (
        <div className={classes.filter}>
            <input/>
            <label>
                <input type="checkbox"/>
                Vegan
            </label>
            <label>
                <input type="checkbox"/>
                Время суток
            </label>
            <MyButton>Применить</MyButton>

        </div>
    );
};

export default Filter;