import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import NextButton from "./UI/buttons/DishNavigationButtons/Next/NextButton";
import PreviousButton from "./UI/buttons/DishNavigationButtons/Previous/PreviousButton";
import DishModal from "./modals/dishModal/DishModal";
import {Button, IconButton, Modal} from "@mui/material";
import classes from "./modals/dishModal/DishModal.module.css";
import {useDispatch, useSelector} from "react-redux";

const DishItem = ({dish, dishNumber}) => {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate();

    const dishes = useSelector(state => {
        return state.dishReducer.dishes
    })

    return (
        <div className="dish-card">
            <Link to={"/dish"} state={dish}>
                <div className="dish-card-img"
                     style={{cursor: 'pointer', background: `#d6d6d6  url(${process.env.PUBLIC_URL + dish?.imgPath})`}}>
                </div>
            </Link>
            <div className="dish-buttons">
                {/*<IconButton onClick={()=>console.log("clcik")}>*/}
                {/*    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">*/}

                {/*        <rect width="50" height="50" rx="24.8718" fill="white"/>*/}
                {/*        <path d="M45.8718 47.3974L49.8718 43.8974L45.8718 40.3974" transform="translate(-23,-19)"*/}
                {/*              stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}

                {/*    </svg>*/}
                {/*</IconButton>*/}
                <PreviousButton>
                    <IconButton onClick={()=>dish = dishes[Math.floor(Math.random() * dishes?.length)]}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <rect width="50" height="50" rx="24.8718" fill="#F5F5F5"/>
                        <path d="M49.8718 40.3974L45.8718 43.8974L49.8718 47.3974" transform="translate(-24,-19)"
                              stroke="#595959" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>

                    </svg>
                    </IconButton>
                </PreviousButton>
                <NextButton>
                    <IconButton onClick={()=> {
                                dish = dishes[Math.floor(Math.random() * dishes?.length)];
                                console.log(dish);
                                }}
                    >
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <rect width="50" height="50" rx="24.8718" fill="white"/>
                            <path d="M45.8718 47.3974L49.8718 43.8974L45.8718 40.3974" transform="translate(-23,-19)"
                                  stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                        </svg>
                    </IconButton>

                </NextButton>
            </div>

            <div className="dish-card-info">
                <p className="dish-name">{dish?.name} </p>
                <p className="dish-category">{dish?.category}</p>
            </div>


        </div>);
};

export default DishItem;