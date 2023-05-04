import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
const DishItem = ({dish}) => {
    const [modal, setModal] = useState(false)
    return (
        <div className="card">
            <div className="card-img"></div>
            <div className="card-info">
                <p className="text-title">{dish?.title} </p>
                <p className="text-body">{dish?.description}</p>
            </div>
            <div className="card-footer">

                    <MyButton onClick={() => setModal(true)}>
                        Посмотреть блюдо
                    </MyButton>

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