import React from 'react';
import classes from "./UpdateButton.module.css";

const UpdateButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.updateButton}>
            {children}
        </button>
    );
};

export default UpdateButton;