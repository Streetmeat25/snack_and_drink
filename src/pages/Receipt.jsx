import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {dishApi} from "../services/DishService"

const Receipt = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    return (
        <div>

        </div>
    );
};

export default Receipt;