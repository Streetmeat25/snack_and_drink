import React from 'react';
import classes from './Filter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {filterSlice} from "../../../store/reducers/filterSlice";

const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => {
        return {time: state.filterReducer.timeOfDay, category: state.filterReducer.dishCategory}
    })
    const {applyCategory, applyTOD} = filterSlice.actions
    const date = new Date()
    const time = date.getHours();
    let timeOfDay = 'Ужин'

    if (time < 11 && time > 6) timeOfDay = ' Завтрака'
    if (time >= 11 && time < 15) timeOfDay = ' Обеда'
    if (time >= 15 && time < 24) timeOfDay = ' Ужина'
    if (time >= 0 && time <= 6) timeOfDay = ' Ужина'
    //еще один иф или вообще все переписать

    return (
        <div className={classes.filter}>
            <div className={classes.mealTime}> <p>Сейчас время для</p>
                <button className={classes.mealTimeButton}>{timeOfDay}</button>
            </div>

            <div className={classes.mealType}>
                <button className={classes.mealTypeButton} onClick={() => {
                    dispatch(applyCategory("meat"))
                }}>
                    Мясо
                </button>
                <button className={classes.mealTypeButton} onClick={() => {
                    dispatch(applyCategory("fish"))
                }}>
                    Рыба
                </button>
                <button className={classes.mealTypeButton} onClick={() => {
                    dispatch(applyCategory("drink"))
                }}>
                    Напиток
                </button>
                <button className={classes.mealTypeButton} onClick={() => {
                    dispatch(applyCategory("desert"))
                }}>
                    Десерт
                </button>
                <button className={classes.mealTypeButton} onClick={() => {
                    dispatch(applyCategory("salad"))
                }}>
                    Салат
                </button>
                <select style={{
                    border: 0,
                    background: "transparent",
                    fontFamily: 'Roboto',
                    fontSize: "15px",
                    fontStyle:"normal",
                    fontWeight: 400,
                    cursor: "pointer"
                }}>
                    <option value='test'>Ещё</option>
                    <option value='test0'>Еще</option>
                    <option value='test1'>Еще1</option>
                    <option value='test2'>Еще2</option>
                </select>

            </div>
        </div>
    );
};

export default Filter;