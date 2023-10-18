import React from 'react';
import classes from './DishCard.module.css'
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {cartSlice} from "../../../../store/reducers/cartSlice";

const DishCard = ({dish,isLiked}) => {
    const dispatch = useDispatch()
    const { deleteFromCart} = cartSlice.actions

    return (
        <div className={classes.main}>
            <img className={classes.dishImg} src={process.env.PUBLIC_URL + dish.imgPath}/>
            <div className={classes.cardInfo}>
                <h1>{dish.name}</h1>
                <h2>{dish.category}</h2>
                <p>Посмотреть рецепт</p>
                <button>Где найти?</button>
            </div>
            {isLiked ?
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"
                onClick={()=>dispatch(deleteFromCart(dish))}
            >
                <path d="M15.9998 7.33335L15.2798 8.02668C15.3731 8.12346 15.485 8.20044 15.6087 8.25302C15.7324 8.3056 15.8654 8.3327 15.9998 8.3327C16.1343 8.3327 16.2673 8.3056 16.391 8.25302C16.5147 8.20044 16.6266 8.12346 16.7198 8.02668L15.9998 7.33335ZM12.5678 24.4293C10.5465 22.836 8.33717 21.28 6.58384 19.3067C4.8665 17.3707 3.6665 15.112 3.6665 12.1827H1.6665C1.6665 15.7373 3.1465 18.4493 5.08917 20.6347C6.99584 22.7813 9.42784 24.5013 11.3292 26L12.5692 24.4293H12.5678ZM3.6665 12.1827C3.6665 9.31601 5.2865 6.91068 7.49851 5.89868C9.64784 4.91601 12.5358 5.17601 15.2798 8.02668L16.7198 6.64135C13.4665 3.25868 9.68517 2.70001 6.6665 4.08001C3.7145 5.43068 1.6665 8.56668 1.6665 12.1827H3.6665ZM11.3292 26C12.0132 26.5387 12.7465 27.112 13.4892 27.5467C14.2318 27.98 15.0798 28.3333 15.9998 28.3333V26.3333C15.5865 26.3333 15.1012 26.1733 14.4985 25.82C13.8945 25.468 13.2692 24.9827 12.5678 24.4293L11.3292 26ZM20.6705 26C22.5718 24.5 25.0038 22.7827 26.9105 20.6347C28.8532 18.448 30.3332 15.7373 30.3332 12.1827H28.3332C28.3332 15.112 27.1332 17.3707 25.4158 19.3067C23.6625 21.28 21.4532 22.836 19.4318 24.4293L20.6705 26ZM30.3332 12.1827C30.3332 8.56668 28.2865 5.43068 25.3332 4.08001C22.3145 2.70001 18.5358 3.25868 15.2798 6.64001L16.7198 8.02668C19.4638 5.17735 22.3518 4.91601 24.5012 5.89868C26.7132 6.91068 28.3332 9.31468 28.3332 12.1827H30.3332ZM19.4318 24.4293C18.7305 24.9827 18.1052 25.468 17.5012 25.82C16.8985 26.172 16.4132 26.3333 15.9998 26.3333V28.3333C16.9198 28.3333 17.7678 27.98 18.5105 27.5467C19.2545 27.112 19.9865 26.5387 20.6705 26L19.4318 24.4293Z" fill="#BBBBBB"/>
                <path d="M31 11.3036C31 20.6786 17.0996 28.267 16.5076 28.5804C16.3516 28.6643 16.1772 28.7082 16 28.7082C15.8228 28.7082 15.6484 28.6643 15.4924 28.5804C14.9004 28.267 1 20.6786 1 11.3036C1.00248 9.10209 1.87812 6.99149 3.4348 5.4348C4.99148 3.87812 7.10209 3.00248 9.30357 3C12.0692 3 14.4906 4.18929 16 6.19955C17.5094 4.18929 19.9308 3 22.6964 3C24.8979 3.00248 27.0085 3.87812 28.5652 5.4348C30.1219 6.99149 30.9975 9.10209 31 11.3036Z" fill="#FF5A5A"/>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M15.9998 7.33333L15.2798 8.02666C15.3731 8.12345 15.485 8.20043 15.6087 8.25301C15.7324 8.30559 15.8654 8.33269 15.9998 8.33269C16.1343 8.33269 16.2673 8.30559 16.391 8.25301C16.5147 8.20043 16.6266 8.12345 16.7198 8.02666L15.9998 7.33333ZM12.5678 24.4293C10.5465 22.836 8.33717 21.28 6.58384 19.3067C4.8665 17.3707 3.6665 15.112 3.6665 12.1827H1.6665C1.6665 15.7373 3.1465 18.4493 5.08917 20.6347C6.99584 22.7813 9.42784 24.5013 11.3292 26L12.5692 24.4293H12.5678ZM3.6665 12.1827C3.6665 9.316 5.2865 6.91066 7.49851 5.89866C9.64784 4.916 12.5358 5.176 15.2798 8.02666L16.7198 6.64133C13.4665 3.25866 9.68517 2.7 6.6665 4.08C3.7145 5.43066 1.6665 8.56666 1.6665 12.1827H3.6665ZM11.3292 26C12.0132 26.5387 12.7465 27.112 13.4892 27.5467C14.2318 27.98 15.0798 28.3333 15.9998 28.3333V26.3333C15.5865 26.3333 15.1012 26.1733 14.4985 25.82C13.8945 25.468 13.2692 24.9827 12.5678 24.4293L11.3292 26ZM20.6705 26C22.5718 24.5 25.0038 22.7827 26.9105 20.6347C28.8532 18.448 30.3332 15.7373 30.3332 12.1827H28.3332C28.3332 15.112 27.1332 17.3707 25.4158 19.3067C23.6625 21.28 21.4532 22.836 19.4318 24.4293L20.6705 26ZM30.3332 12.1827C30.3332 8.56666 28.2865 5.43066 25.3332 4.08C22.3145 2.7 18.5358 3.25866 15.2798 6.64L16.7198 8.02666C19.4638 5.17733 22.3518 4.916 24.5012 5.89866C26.7132 6.91066 28.3332 9.31466 28.3332 12.1827H30.3332ZM19.4318 24.4293C18.7305 24.9827 18.1052 25.468 17.5012 25.82C16.8985 26.172 16.4132 26.3333 15.9998 26.3333V28.3333C16.9198 28.3333 17.7678 27.98 18.5105 27.5467C19.2545 27.112 19.9865 26.5387 20.6705 26L19.4318 24.4293Z" fill="#BBBBBB"/>
            </svg>
            }
        </div>
    );
};

export default DishCard;