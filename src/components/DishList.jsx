import React, {useEffect, useState} from 'react';
import DishItem from "./DishItem";
import UpdateButton from "./UI/buttons/UpdateButton/UpdateButton";

const DishList = ({dishes}) => {
    const [randomDishNumber, setRandomDishNumber] = useState(Math.floor(Math.random() * dishes?.length))
    return (
        <div className="dish-list">
            <DishItem dish={dishes[randomDishNumber]} dishNumber="FirstDish"/>
            {/*<DishItem dish={dishes[Math.floor(Math.random() * dishes.length)]} dishNumber="SecondDish"/>*/}
            {/*<DishItem dish={dishes[Math.floor(Math.random() * dishes.length)]} dishNumber="Drink"/>*/}
            <UpdateButton onClick={() => setRandomDishNumber(Math.floor(Math.random() * dishes?.length) )}>
                Обновить
            </UpdateButton>
        </div>
    );
};

export default DishList;