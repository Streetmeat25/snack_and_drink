import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const Receipt = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(-1)}> Вернуться назад</button>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1> Рецепт {state.title} </h1>
                <div className="dish-card-img" style={{cursor:'pointer'}} ></div>
                <p className="dish-text-body">{state?.description}</p>
                <div>
                    <h2> Шаг 1</h2>
                    Описание первых шагов
                    <div className="dish-card-img" style={{cursor:'pointer'}} ></div>

                    <h2> Шаг 2</h2>
                    Дальнейшее описание
                    <div className="dish-card-img" style={{cursor:'pointer'}} ></div>

                    <h2> Шаг 3</h2>
                    Дальнейшее описание
                    <div className="dish-card-img" style={{cursor:'pointer'}} ></div>

                    <h2> Шаг 4</h2>
                    Дальнейшее описание
                    <div className="dish-card-img" style={{cursor:'pointer'}} ></div>

                </div>
            </div>
        </div>
    );
};

export default Receipt;