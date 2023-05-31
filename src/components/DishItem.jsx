import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
const DishItem = ({dish}) => {
    const [modal, setModal] = useState(false)
    return (
        <div className="dish-card">
            <div className="dish-number">First Dish</div>
            <div className="dish-card-img" style={{cursor:'pointer'}} onClick={()=> setModal(true)}></div>
            <div className="dish-card-info">
                <p className="dish-text-title">{dish?.title} </p>
                <p className="dish-text-body">{dish?.description}</p>
            </div>
            <div className="dish-card-footer">

                    <MyButton onClick={() => alert("show receipt of " + dish?.title)}>
                        Показать рецепт
                    </MyButton>

                    <MyButton onClick={() => alert("order " + dish?.title)}>
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