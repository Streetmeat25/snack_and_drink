import React, {useEffect, useState} from 'react';
import DishItem from "./DishItem";

const DishList = ({dishes}) => {

    return (
        <div className="dish-list">
            <DishItem dish={dishes[Math.floor(Math.random() * dishes.length)]} dishNumber="FirstDish"/>
            <DishItem dish={dishes[Math.floor(Math.random() * dishes.length)]} dishNumber="SecondDish"/>
            <DishItem dish={dishes[Math.floor(Math.random() * dishes.length)]} dishNumber="Drink"/>
        </div>
    );
};

export default DishList;