import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyModal from "./UI/MyModal/MyModal";
const DishItem = ({dish}) => {
    const [modal, setModal] = useState(false)

    return (
        <div className="dish">
            <div className="dish__content">
                <strong>{dish.title}</strong>
                <div>
                    description
                </div>
            </div>
            <div className="dish__buttons">
                <MyButton onClick={() => setModal(true)}>
                    Посмотреть блюдо
                </MyButton>
            </div>
            <MyModal visible={modal} setVisible={setModal}>
                fdsfdsfdfsdf
            </MyModal>
        </div>
    );
};

export default DishItem;