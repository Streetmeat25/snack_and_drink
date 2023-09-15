import React from 'react';
import classes from './PreviousButton.module.css'
const PreviousButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.previousButton}>
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_4_559)">
                    <rect x="23" y="68.7692" width="49.7436" height="49.7436" rx="24.8718" transform="rotate(-90 23 68.7692)" fill="#F5F5F5"/>
                    <path d="M49.8718 40.3974L45.8718 43.8974L49.8718 47.3974" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                    <filter id="filter0_d_4_559" x="0" y="0.0256386" width="95.7436" height="95.7436" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_559"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="11"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_559"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_559" result="shape"/>
                    </filter>
                </defs>
            </svg>


            {children}
        </button>
    );
};

export default PreviousButton;