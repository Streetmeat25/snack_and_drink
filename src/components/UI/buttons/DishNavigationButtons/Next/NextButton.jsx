import React from 'react';
import classes from './NextButtons.module.css'
const NextButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.nextButton} >
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_4_557)">
                    <rect x="72.7436" y="19.0256" width="49.7436" height="49.7436" rx="24.8718" transform="rotate(90 72.7436 19.0256)" fill="white"/>
                    <path d="M45.8718 47.3974L49.8718 43.8974L45.8718 40.3974" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                    <filter id="filter0_d_4_557" x="0" y="0.0256386" width="95.7436" height="95.7436" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_4_557"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="11"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_557"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_557" result="shape"/>
                    </filter>
                </defs>
            </svg>

            {children}
        </button>
    );
};

export default NextButton;