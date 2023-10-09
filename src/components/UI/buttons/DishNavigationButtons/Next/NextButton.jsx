import React from 'react';
import classes from './NextButtons.module.css'

const NextButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.nextButton}>
            {/*<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">*/}

            {/*    <rect width="50" height="50" rx="24.8718" fill="white"/>*/}
            {/*    <path d="M45.8718 47.3974L49.8718 43.8974L45.8718 40.3974" transform="translate(-23,-19)"*/}
            {/*          stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>*/}

            {/*</svg>*/}

            {children}
        </button>
    );
};

export default NextButton;