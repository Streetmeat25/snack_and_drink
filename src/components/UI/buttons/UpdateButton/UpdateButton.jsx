import React from 'react';
import classes from "./UpdateButton.module.css";

const UpdateButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.updateButton}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8462 12.9232L18.7692 12.1924L19.5 15.1155" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.7692 12.1924C18.1201 14.0319 16.9409 15.6381 15.3804 16.8085C13.8198 17.9789 11.9477 18.6612 10 18.7693C8.19955 18.7696 6.44264 18.2158 4.9679 17.1829C3.49316 16.1501 2.37208 14.6883 1.75692 12.9962M4.15385 7.07701L1.23077 7.80778L0.5 4.8847" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.23076 7.8077C2.45845 4.44616 6.22922 1.23077 9.99999 1.23077C11.8092 1.23586 13.5726 1.80042 15.0483 2.84706C16.5241 3.89369 17.64 5.37117 18.2431 7.07693" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {children}
        </button>
    );
};

export default UpdateButton;