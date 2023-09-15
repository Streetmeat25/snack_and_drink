import React, {useState} from 'react';
import MyButton from "./UI/buttons/MyButton";
import MyModal from "./modals/MyModal/MyModal";
import {Link, useNavigate} from "react-router-dom";
import dishPic from './borsch.png'
import NextButton from "./UI/buttons/DishNavigationButtons/Next/NextButton";
import PreviousButton from "./UI/buttons/DishNavigationButtons/Previous/PreviousButton";
const DishItem = ({dish, dishNumber}) => {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate();
    return (
        <div className="dish-card">
            <div className="dish-card-img" style={{cursor:'pointer'}} onClick={()=> setModal(true)}>
                <PreviousButton/>
                <NextButton/>
            </div>

            <div className="dish-card-info">
                <p className="dish-name">{dish?.title} </p>
                {/*<p className="dish-category">{dish?.description}</p>*/}
                <p className="dish-category">Супы</p>

            </div>
            {/*<div className="dish-card-footer">*/}

            {/*        <MyButton onClick={() => navigate('receipt', {state: dish})}>*/}
            {/*            Показать рецепт*/}
            {/*        </MyButton>*/}

                    {/*<MyButton onClick={()  => navigate( "buy", {state: dish} )}>*/}
                    {/*    Заказать блюдо*/}
                    {/*</MyButton>*/}

            {/*</div>*/}
            <MyModal visible={modal} setVisible={setModal}>
                <strong>{dish?.title}</strong>
                <div>
                    {dish?.description}
                </div>
            </MyModal>
        </div>
    );
};

export default DishItem;