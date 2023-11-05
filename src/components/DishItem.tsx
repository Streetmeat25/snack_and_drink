import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const DishItem = ({dish}) => {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate();


    return (
        <div className="dish-card">
            <Link to={"/dish"} state={dish}>
                <div className="dish-card-img"
                     style={{cursor: 'pointer', backgroundImage:`url(${dish?.imgPath})`}}>
                </div>
            </Link>

            <div className="dish-card-info">
                <p className="dish-name">{dish?.name} </p>
                <p className="dish-category">{dish?.category}</p>
            </div>


        </div>);
};

export default DishItem;