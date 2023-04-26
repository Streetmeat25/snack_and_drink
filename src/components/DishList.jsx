import React, {useEffect, useState} from 'react';
import DishItem from "./DishItem";

const DishList = ({dishes}) => {

    return (
        <div>
            <DishItem dish={dishes[Math.floor(Math.random() * dishes.length)]}/>
            <DishItem dish={dishes[Math.floor(Math.random() * dishes.length)]}/>
        </div>
    );
};

export default DishList;