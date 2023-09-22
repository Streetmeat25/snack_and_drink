import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import Counter from "../features/counter/Counter";
import {dishApi} from "../services/DishService"

const Receipt = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const {data: posts, error, isLoading} = dishApi.useFetchAllDishesQuery('')
    console.log(posts)
    return (
        <div>
            {isLoading && <h1>LOADING...</h1>}
            {error && <h1>Error while loading data</h1>}
            {posts && <p> loaded</p>}

        </div>
    );
};

export default Receipt;