import React from 'react';
import classes from './DishModal.module.css'
const DishModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.DishModal]

    if(visible){
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>

            <div className={classes.main}>
                <div className={classes.dishImg}>

                </div>
                <div className={classes.dishDescription}>
                    <h1>Borsch</h1>
                    <p>Борщ - традиционное восточнославянское блюдо, которое готовится со свеклой, что придаёт ему характерный насыщенный цвет. В отличие от обычных супов он густой.   Борщ считается национальным украинским первым блюдом, хотя он имеет место в кулинарном фонде России, Литвы, Польши, Румынии, Молдовы.
                    </p>
                    <a onClick={()=>alert("receipt")}>Как приготовит борщ? (рецепт)</a>
                    <button onClick={()=>alert("adresses where to buy")}>Места где можно покушат борщ</button>
                </div>
                <div className={classes.dishOrderAddresses}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <h1>Studio</h1>
                        <h2>GastroBar</h2>
                    </div>
                    <p>Светланская улица, 18а1, 2 этаж</p>
                    <p>Фрунзенский район, Владивосток, 690091</p>

                    {/*если строчка не последняя, то ставим черту*/}
                    <hr align="right" width="465" size = "1"/>
                </div>
            </div>

        </div>
    );
};

export default DishModal;