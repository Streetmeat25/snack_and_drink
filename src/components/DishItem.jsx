import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import NextButton from "./UI/buttons/DishNavigationButtons/Next/NextButton";
import PreviousButton from "./UI/buttons/DishNavigationButtons/Previous/PreviousButton";
import DishModal from "./modals/dishModal/DishModal";
import {Button, Modal} from "@mui/material";
import classes from "./modals/dishModal/DishModal.module.css";

const DishItem = ({dish, dishNumber}) => {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate();


    return (
        <div className="dish-card">

            <Link to={"/dish"} state={dish}>
                <div className="dish-card-img"
                     style={{cursor: 'pointer', background: `#d6d6d6  url(${process.env.PUBLIC_URL + dish?.imgPath})`}}>
                </div>
            </Link>
            <div className="dish-buttons">

                <PreviousButton/>
                <NextButton/>
            </div>

            <div className="dish-card-info">
                <p className="dish-name">{dish?.name} </p>
                <p className="dish-category">{dish?.category}</p>
            </div>

            {/*<MyModal visible={modal} setVisible={setModal}>*/}
            {/*    <DishModal dish={dish}>*/}
            {/*    </DishModal>*/}
            {/*</MyModal>*/}

        </div>);
};

export default DishItem;