import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import DishService from "../API/DishService";
import DishItem from "./DishItem";
import Loader from "./UI/Loader/Loader";

const DishList = () => {
    const [dishes, setDish] = useState([])

    const [fetchPosts, isDishesLoading] = useFetching(async () => {
        const response = await DishService.getAll()
        setDish([...dishes, ...response])
        console.log(isDishesLoading)
        console.log(response)
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            {isDishesLoading ?
                <div style={{display:'flex', justifyContent:'center', marginTop: 50}}>
                    <Loader/>
                </div>:
                dishes.map((dish, index) =>
                        <DishItem dish={dish} key = {index+1}/>
                    )
            }

        </div>
    );
};

export default DishList;