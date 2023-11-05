import React, {useState} from 'react';
import classes from './DishModal.module.css'
import {Link, useLocation} from "react-router-dom";
import {Button, IconButton, SvgIcon} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
const DishModal = ({dish}) => {

    const [isAddressesVisible, setAddressesVisible] = useState(false);
    const [isReceiptVisible, setReceiptVisible] = useState(false);
    const location = useLocation()

    dish = location?.state
    return (
        <div>
            <Link to={`/`}>
                <Button startIcon={<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.33333 2.70831L1.625 5.41665L4.33333 8.12498" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.625 5.41663H5.95833C8.94996 5.41663 11.375 7.84167 11.375 10.8333V11.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                }>
                    Вернуться
                </Button>
            </Link>
            <div className={classes.dishImg}>
            </div>
            {
                isReceiptVisible ?
                    <div className={classes.main}>

                        <div className={classes.dishReceipt}>
                            <h1>Рецепт приготовления</h1>
                            <p>{dish?.receiptStory}</p>
                            <h2> Ингредиенты </h2>
                            <p>{dish?.receiptIngredients}</p>

                            <h2>Приготовление</h2>
                            <p>{dish?.receiptCooking}</p>

                        </div>
                    </div>
                    :
                    <div className={classes.main}>

                        <div className={classes.dishDescription}>
                            <h1>{dish?.name}</h1>
                            <p>{dish?.description}</p>
                            <a onClick={()=> setReceiptVisible(!isReceiptVisible)}>Как приготовит борщ? (рецепт)</a>
                            <button onClick={()=> setAddressesVisible(!isAddressesVisible)}>Места где можно покушат борщ</button>
                        </div>
                        { isAddressesVisible &&
                            dish?.orderAddresses?.map(adr =>
                                <div className={classes.dishOrderAddresses} key={adr.id}>

                                        <div className={classes.restaurantName}>
                                            <h1>{adr?.name}</h1>
                                            <h2>{adr?.type}</h2>
                                        </div>
                                        <p>{adr?.addressStreet}</p>
                                        <p>{adr?.addressRegion}</p>

                                        <hr align="right" width="465" size = "1" />


                                </div>
                            )

                        }
                    </div>
            }
        </div>
    );
};

export default DishModal;