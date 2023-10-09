import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const Buy = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(-1)}> Вернуться назад</button>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1>Заказать {state.title}</h1>

            </div>

        </div>
    );
};

export default Buy;