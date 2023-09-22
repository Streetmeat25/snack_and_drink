import React, {useEffect, useState} from 'react';
import DishItem from "./DishItem";
import UpdateButton from "./UI/buttons/UpdateButton/UpdateButton";

const DishList = ({dishes}) => {

    return (
        <div className="dish-list">
            <DishItem dish={dishes[Math.floor(Math.random() * dishes?.length)]} dishNumber="FirstDish"/>
            {/*<DishItem dish={dishes[Math.floor(Math.random() * dishes.length)]} dishNumber="SecondDish"/>*/}
            {/*<DishItem dish={dishes[Math.floor(Math.random() * dishes.length)]} dishNumber="Drink"/>*/}
            <UpdateButton onClick={() => console.log("update dish")}>
                Обновить
            </UpdateButton>
        </div>
    );
};

export default DishList;