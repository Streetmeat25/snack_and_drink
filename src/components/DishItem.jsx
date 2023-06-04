import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyModal from "./modals/MyModal/MyModal";
import {Link, useNavigate} from "react-router-dom";
const DishItem = ({dish, dishNumber}) => {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate();
    return (
        <div className="dish-card">
            <div className="dish-number">{dishNumber}</div>
            <div className="dish-card-img" style={{cursor:'pointer'}} onClick={()=> setModal(true)}></div>
            <div className="dish-card-info">
                <p className="dish-text-title">{dish?.title} </p>
                <p className="dish-text-body">{dish?.description}</p>
            </div>
            <div className="dish-card-footer">

                    <MyButton onClick={() => navigate('receipt', {state: dish})}>
                        Показать рецепт
                    </MyButton>

                    <MyButton onClick={()  => navigate( "buy", {state: dish} )}>
                        Заказать блюдо
                    </MyButton>

            </div>
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