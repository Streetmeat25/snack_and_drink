import React, {useEffect, useState} from 'react';
import MyButton from "../components/UI/buttons/MyButton";
import DishList from "../components/DishList";
import Loader from "../components/UI/Loader/Loader";
import DishItem from "../components/DishItem";
import {useFetching} from "../hooks/useFetching";
// import DishService from "../services/DishService";
import Filter from "../components/UI/Filter/Filter";
import {dishApi} from "../services/DishService"

const Main = () => {
    // const [dishes, setDish] = useState([])

    // const [fetchPosts, isDishesLoading] = useFetching(async () => {
    //     const response = await DishService.getAll()
    //     setDish([...dishes, ...response])
    // })
    const { data: dishes, error, isLoading} = dishApi.useFetchAllDishesQuery('')


    useEffect(() => {
        // fetchPosts()
    }, [])

    return (
        <div className="main">

            {/*<MyButton>Подобрать блюдо</MyButton>*/}

            <Filter />
            {isLoading ? (
                <div style={{display:'flex', justifyContent:'center', marginTop: 50}}>
                    <Loader/>
                </div>
            ) : error ? (
                <div style={{display:'flex', justifyContent:'center', marginTop: 50}}>
                    Ошибка загрузки данных
                </div>
                )
                : (
                <DishList dishes={dishes}/>
                )

            }

        </div>
    );
};

export default Main;