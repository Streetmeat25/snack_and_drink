import React, {useState} from 'react';
import MyButton from "./UI/buttons/MyButton";
import MyModal from "./modals/MyModal/MyModal";
import {Link, useNavigate} from "react-router-dom";
import dishPic from './borsch.png'
import NextButton from "./UI/buttons/DishNavigationButtons/Next/NextButton";
import PreviousButton from "./UI/buttons/DishNavigationButtons/Previous/PreviousButton";
import DishModal from "./modals/dishModal/DishModal";
import Navbar from "./UI/navbar/Navbar";

const DishItem = ({dish, dishNumber}) => {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate();
    console.log(dish, process.env.PUBLIC_URL)
    return (
        <div className="dish-card">
            <div className="dish-card-img" style={{cursor: 'pointer', background:`#d6d6d6  url(${process.env.PUBLIC_URL + dish?.imgPath})`}} onClick={() => setModal(true)}>

            </div>
            <div className="dish-buttons">

                <PreviousButton/>
                <NextButton/>
            </div>

            <div className="dish-card-info">
                <p className="dish-name">{dish?.name} </p>
                <p className="dish-category">{dish?.category}</p>
            </div>

            <MyModal visible={modal} setVisible={setModal}>
                <DishModal dish={dish}>
                </DishModal>
            </MyModal>

        </div>);
};

export default DishItem;