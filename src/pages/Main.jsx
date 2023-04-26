import React, {useEffect, useState} from 'react';
import MyButton from "../components/UI/button/MyButton";
import DishList from "../components/DishList";
import Loader from "../components/UI/Loader/Loader";
import DishItem from "../components/DishItem";
import {useFetching} from "../hooks/useFetching";
import DishService from "../API/DishService";

const Main = () => {
    const [dishes, setDish] = useState([])

    const [fetchPosts, isDishesLoading] = useFetching(async () => {
        const response = await DishService.getAll()
        setDish([...dishes, ...response])
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="main">
            <MyButton>Подобрать блюдо</MyButton>
            {isDishesLoading ?
                <div style={{display:'flex', justifyContent:'center', marginTop: 50}}>
                    <Loader/>
                </div>: <DishList dishes={dishes}/>
            }
        </div>
    );
};

export default Main;