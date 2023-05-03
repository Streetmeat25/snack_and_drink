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
                <span className="text-title">$499.49</span>
                <div className="card-button">
                    <MyButton onClick={() => setModal(true)}>
                        Посмотреть блюдо
                    </MyButton>
                </div>
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