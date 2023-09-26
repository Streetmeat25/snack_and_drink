import React from 'react';
import classes from './Filter.module.css'
import MyButton from "../buttons/MyButton";
import {useDispatch, useSelector} from "react-redux";
import {filterSlice} from "../../../store/reducers/filterSlice";

const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => {
        return {time: state.filterReducer.timeOfDay, category: state.filterReducer.dishCategory}
    })

    const {applyCategory, applyTOD} = filterSlice.actions

    return (
        <div className={classes.filter}>
            <div className={classes.mealTime}>
                <button className={filter.time == 'Завтрак' ? classes.mealTimeButtonActive : classes.mealTimeButton} onClick={() => {
                    dispatch(applyTOD('Завтрак'));

                }}>Завтрак
                </button>
                <button className={filter.time == 'Обед' ? classes.mealTimeButtonActive : classes.mealTimeButton} onClick={() => {
                    dispatch(applyTOD('Обед'))
                }}>Обед
                </button>
                <button className={filter.time == 'Ужин' ? classes.mealTimeButtonActive : classes.mealTimeButton} onClick={() => {
                    dispatch(applyTOD('Ужин'))
                }}>Ужин
                </button>
                <button className={filter.time == 'Перекус' ? classes.mealTimeButtonActive : classes.mealTimeButton} onClick={() => {
                    dispatch(applyTOD('Перекус'))
                }}>Перекус
                </button>
            </div>
            <div className={classes.mealType}>
                <button className={classes.mealTypeButton} onClick={() => {
                    dispatch(applyCategory("meat"))
                }}>
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <rect width="70" height="70" rx="20" fill="white" fill-opacity="0.2"/>
                        <path
                            d="M54.1739 24.0468C52.1219 22.4114 49.2256 21.0725 45.5655 20.0674C38.5263 18.1343 30.5882 17.9257 27.502 17.9257C19.5056 17.9257 13 24.4313 13 32.4278V38.5722C13 46.5688 19.5056 53.0744 27.502 53.0744C31.1893 53.0744 33.9585 51.9193 36.8903 50.6964C39.9221 49.4317 43.0571 48.1241 47.4662 48.1241C53.2746 48.1241 58 43.3986 58 37.5903V31.4459C58 28.5596 56.7127 26.0702 54.1739 24.0468ZM53.4337 39.0721C53.7665 39.4256 54.3227 39.4423 54.6762 39.1096C55.2722 38.5483 55.7966 37.923 56.2422 37.2496V37.5903C56.2422 42.4295 52.3053 46.3663 47.4662 46.3663C42.7052 46.3663 39.4051 47.7428 36.2136 49.074C33.4488 50.2272 30.8374 51.3165 27.502 51.3165C20.7503 51.3165 15.2089 46.0384 14.7849 39.3917C17.2529 43.8806 22.0279 46.9297 27.502 46.9297C31.1893 46.9297 33.9585 45.7747 36.8903 44.5518C39.9221 43.2871 43.0571 41.9795 47.4662 41.9795C47.7938 41.9795 48.1247 41.964 48.4499 41.9336C48.9332 41.8883 49.2883 41.4599 49.243 40.9766C49.1978 40.4933 48.7688 40.1383 48.286 40.1835C48.015 40.2088 47.7393 40.2218 47.4662 40.2218C42.7052 40.2218 39.4051 41.5983 36.2136 42.9295C33.4488 44.0827 30.8374 45.172 27.502 45.172C20.4748 45.172 14.7578 39.455 14.7578 32.4279C14.7578 25.4007 20.4748 19.6836 27.502 19.6836C30.517 19.6836 38.267 19.8861 45.1 21.7625C52.4934 23.7929 56.2422 27.0508 56.2422 31.4459C56.2422 33.8449 55.2321 36.1717 53.4712 37.8296C53.1178 38.1624 53.101 38.7186 53.4337 39.0721Z"
                            fill="#424141"/>
                        <path
                            d="M52.711 39.633C52.5043 39.1939 51.9805 39.0053 51.5415 39.2121C51.5352 39.215 51.5269 39.2191 51.5206 39.2222C51.0865 39.4393 50.9106 39.9672 51.1276 40.4013C51.2816 40.7093 51.592 40.8873 51.9145 40.8873C52.0447 40.8873 52.1769 40.8582 52.3015 40.797C52.7324 40.5867 52.9159 40.0684 52.711 39.633Z"
                            fill="#424141"/>
                        <path
                            d="M33.8466 21.6891L33.8014 21.6854C33.3167 21.6476 32.8939 22.0078 32.8553 22.4917C32.8167 22.9755 33.1777 23.3991 33.6615 23.4377L33.7064 23.4412C33.7303 23.4432 33.7539 23.4441 33.7775 23.4441C34.2311 23.4441 34.6158 23.0952 34.6527 22.6353C34.6913 22.1514 34.3305 21.7278 33.8466 21.6891Z"
                            fill="#424141"/>
                        <path
                            d="M53.9355 29.0781C53.0638 27.3551 51.124 25.866 48.17 24.6525C45.7798 23.6704 43.1659 23.0501 41.3939 22.7025C40.3319 22.4943 39.2191 22.3083 38.0861 22.1499C37.6056 22.0821 37.1613 22.4178 37.0939 22.8987C37.0267 23.3794 37.3619 23.8236 37.8427 23.8908C38.944 24.0448 40.0249 24.2254 41.0556 24.4275C47.0928 25.6115 51.2157 27.5958 52.3671 29.8715C52.6089 30.3497 52.7265 30.8646 52.7265 31.4458C52.7265 34.3463 50.3667 36.706 47.4662 36.706C44.5334 36.706 41.6855 37.1853 38.7597 38.1714C37.4995 38.5961 36.2759 39.1039 35.0926 39.595C34.3099 39.9198 33.5006 40.2557 32.6973 40.56C30.6701 41.3284 29.1163 41.6562 27.502 41.6562C22.4133 41.6562 18.2733 37.5163 18.2733 32.4277C18.2733 27.339 22.4133 23.199 27.502 23.199C28.4947 23.199 29.5026 23.2178 30.4973 23.2549C30.6662 23.2611 30.8352 23.2679 31.0043 23.2754C31.4888 23.2974 31.8997 22.921 31.9211 22.436C31.9425 21.9511 31.5667 21.5406 31.0818 21.5192C30.9086 21.5116 30.7355 21.5046 30.5627 21.4982C29.5463 21.4604 28.5164 21.4412 27.5019 21.4412C21.444 21.4412 16.5154 26.3697 16.5154 32.4277C16.5154 38.4856 21.4439 43.414 27.5019 43.414C29.3419 43.414 31.082 43.0521 33.3202 42.2038C34.1491 41.8896 34.9712 41.5485 35.7664 41.2184C36.9224 40.7387 38.1178 40.2426 39.321 39.8371C42.063 38.913 44.7273 38.4638 47.4662 38.4638C51.336 38.4639 54.4843 35.3156 54.4843 31.4459C54.4843 30.5826 54.3048 29.8081 53.9355 29.0781Z"
                            fill="#424141"/>
                        <path
                            d="M28.3438 24.9373C25.8867 24.9373 23.8877 26.75 23.8877 28.9782C23.8877 31.2064 25.8867 33.0192 28.3438 33.0192C30.801 33.0192 32.8 31.2064 32.8 28.9782C32.8 26.75 30.801 24.9373 28.3438 24.9373ZM28.3438 31.2613C26.8559 31.2613 25.6455 30.2371 25.6455 28.9781C25.6455 27.7193 26.8559 26.695 28.3438 26.695C29.8317 26.695 31.0421 27.7192 31.0421 28.9781C31.0421 30.2371 29.8317 31.2613 28.3438 31.2613Z"
                            fill="#424141"/>
                    </svg>
                </button>
                <button className={classes.mealTypeButton} onClick={() => {
                    dispatch(applyCategory("fish"))
                }}>
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="70" height="70" rx="20" fill="white" fill-opacity="0.2"/>
                        <path
                            d="M52.2718 33.4096C52.1331 33.4096 51.9961 33.44 51.8705 33.499L48.0322 35.2982V33.0343C48.0322 30.8546 46.2589 29.0813 44.0792 29.0813H37.7878C37.7641 29.0813 37.7405 29.0824 37.7171 29.0842C35.5501 28.059 33.1448 27.4994 30.7586 27.4994C24.3178 27.4994 18.8837 31.5159 17.2867 36.9558H15.6913C14.2139 36.9558 13.0119 38.1578 13.0119 39.6352V40.8959C13.0119 42.3732 14.2139 43.5752 15.6913 43.5752H17.2867C18.8836 49.0151 24.3177 53.0316 30.7586 53.0316C33.1448 53.0316 35.5501 52.472 37.7171 51.4469C37.7405 51.4486 37.7641 51.4498 37.7878 51.4498H44.0792C46.2589 51.4498 48.0322 49.6764 48.0322 47.4967V45.2328L51.8705 47.0321C51.9961 47.0909 52.1331 47.1214 52.2718 47.1214C54.9231 47.1214 57 44.11 57 40.2655C57 36.4211 54.923 33.4096 52.2718 33.4096ZM16.8969 41.684H15.6913C15.2567 41.684 14.9032 41.3305 14.9032 40.8959V39.6352C14.9032 39.2006 15.2567 38.8471 15.6913 38.8471H16.8969C16.8404 39.313 16.8104 39.7861 16.8104 40.2655C16.8104 40.745 16.8403 41.218 16.8969 41.684ZM44.0792 30.9726C45.216 30.9726 46.1408 31.8975 46.1408 33.0343V36.1847L45.0316 36.7047C44.301 34.653 42.9405 32.7583 41.0276 31.1782C40.9435 31.1087 40.8585 31.0403 40.7728 30.9726H44.0792ZM30.7585 51.1403C24.1102 51.1403 18.7015 46.2619 18.7015 40.2654C18.7015 34.269 24.1102 29.3906 30.7585 29.3906C37.685 29.3906 43.761 34.4722 43.761 40.2654C43.761 46.0587 37.6851 51.1403 30.7585 51.1403ZM46.1409 47.4967H46.1408C46.1408 48.6336 45.216 49.5585 44.0792 49.5585H40.773C40.8587 49.4908 40.9437 49.4224 41.0277 49.3529C42.9406 47.7727 44.301 45.8781 45.0317 43.8263L46.1409 44.3464V47.4967ZM52.4586 45.219L45.5131 41.9632C45.554 41.714 45.5869 41.4633 45.6097 41.2111H47.0866C47.6088 41.2111 48.0322 40.7877 48.0322 40.2655C48.0322 39.7434 47.6088 39.3199 47.0866 39.3199H45.6097C45.5869 39.0678 45.554 38.8171 45.5131 38.5678L52.4586 35.3121C53.9134 35.487 55.1088 37.6842 55.1088 40.2655C55.1088 42.8469 53.9134 45.0441 52.4586 45.219Z"
                            fill="#424141"/>
                        <path
                            d="M25.2106 38.8466C25.7328 38.8466 26.1562 38.4233 26.1562 37.901C26.1562 37.3788 25.7328 36.9554 25.2106 36.9554C24.6884 36.9554 24.265 37.3788 24.265 37.901C24.265 38.4233 24.6884 38.8466 25.2106 38.8466Z"
                            fill="#424141"/>
                        <path
                            d="M36.9962 36.9106C36.7866 36.7548 36.5217 36.6925 36.2649 36.7391L31.1159 37.666C30.6019 37.7585 30.2602 38.2503 30.3528 38.7642C30.4453 39.2783 30.937 39.6198 31.451 39.5273L36.1563 38.6803C36.5723 39.1078 36.8068 39.6743 36.81 40.2822C36.8131 40.8753 36.5946 41.4289 36.2002 41.8492L31.399 40.985C30.8849 40.8929 30.3932 41.2343 30.3008 41.7481C30.2083 42.2622 30.55 42.7539 31.064 42.8463L36.317 43.7919C36.3728 43.8019 36.4288 43.8068 36.4845 43.8068C36.6894 43.8068 36.8906 43.7401 37.0563 43.6143C38.1087 42.8153 38.7082 41.5972 38.7013 40.2719C38.694 38.9353 38.0727 37.7099 36.9962 36.9106Z"
                            fill="#424141"/>
                        <path
                            d="M18.1466 28.9557C18.1466 27.261 16.768 25.8823 15.0733 25.8823C13.3786 25.8823 12 27.261 12 28.9557C12 30.6504 13.3787 32.029 15.0734 32.029C16.7681 32.029 18.1466 30.6504 18.1466 28.9557ZM13.8913 28.9557C13.8913 28.3039 14.4216 27.7736 15.0734 27.7736C15.7252 27.7736 16.2554 28.3039 16.2554 28.9557C16.2554 29.6075 15.7252 30.1377 15.0734 30.1377C14.4215 30.1377 13.8913 29.6074 13.8913 28.9557Z"
                            fill="#424141"/>
                        <path
                            d="M19.6456 23.74C21.7882 23.74 23.5315 21.9968 23.5315 19.8542C23.5315 17.7116 21.7882 15.9684 19.6456 15.9684C17.503 15.9684 15.7598 17.7116 15.7598 19.8543C15.7598 21.997 17.5029 23.74 19.6456 23.74ZM19.6456 17.8597C20.7454 17.8597 21.6401 18.7544 21.6401 19.8543C21.6401 20.9541 20.7454 21.8489 19.6456 21.8489C18.5459 21.8489 17.6511 20.9541 17.6511 19.8543C17.6511 18.7544 18.5459 17.8597 19.6456 17.8597Z"
                            fill="#424141"/>
                        <path
                            d="M50.8458 39.3198H50.7512C50.2291 39.3198 49.8056 39.7433 49.8056 40.2654C49.8056 40.7876 50.2291 41.2111 50.7512 41.2111H50.8458C51.3679 41.2111 51.7914 40.7876 51.7914 40.2654C51.7914 39.7433 51.368 39.3198 50.8458 39.3198Z"
                            fill="#424141"/>
                    </svg>
                </button>
                <button className={classes.mealTypeButton} onClick={() => {
                    dispatch(applyCategory("drink"))
                }}>
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="70" height="70" rx="20" fill="white" fill-opacity="0.2"/>
                        <g clip-path="url(#clip0_12_884)">
                            <path
                                d="M32.1607 18.4428C31.9026 18.1849 31.4844 18.1848 31.2265 18.4428L30.8236 18.8456C30.5656 19.1036 30.5656 19.5218 30.8236 19.7798C30.9526 19.9087 31.1216 19.9732 31.2907 19.9732C31.4597 19.9732 31.6288 19.9087 31.7578 19.7798L32.1607 19.377C32.4185 19.119 32.4186 18.7008 32.1607 18.4428Z"
                                fill="#424141"/>
                            <path
                                d="M32.9952 21.3918H32.4257C32.0609 21.3918 31.7651 21.6876 31.7651 22.0524C31.7651 22.4172 32.0609 22.713 32.4257 22.713H32.9952C33.3601 22.713 33.6558 22.4172 33.6558 22.0524C33.6558 21.6876 33.3601 21.3918 32.9952 21.3918Z"
                                fill="#424141"/>
                            <path
                                d="M28.5509 16.9476C28.186 16.9476 27.8903 17.2434 27.8903 17.6082V18.1777C27.8903 18.5426 28.186 18.8383 28.5509 18.8383C28.9157 18.8383 29.2115 18.5426 29.2115 18.1777V17.6082C29.2115 17.2434 28.9157 16.9476 28.5509 16.9476Z"
                                fill="#424141"/>
                            <path
                                d="M44.0743 17.502H36.7438C36.3622 16.7378 35.8555 16.0207 35.2191 15.3844C32.0404 12.2057 26.8678 12.2051 23.6883 15.3831C23.5644 15.507 23.4948 15.675 23.4948 15.8502C23.4948 16.0255 23.5644 16.1935 23.6882 16.3174L25.9983 18.6274C25.9765 18.7269 25.9645 18.8289 25.9645 18.9328V31.0611C25.9645 31.426 26.2603 31.7217 26.6251 31.7217C26.9899 31.7217 27.2857 31.426 27.2857 31.0611V28.3604L30.8784 30.5905C31.0436 30.693 31.2301 30.7458 31.4199 30.7458C31.4986 30.7458 31.578 30.7367 31.6567 30.7183C31.703 30.7074 31.7475 30.6925 31.7911 30.6759V35.5998C31.7911 36.168 32.2534 36.6302 32.8216 36.6302H38.0319C38.6 36.6302 39.0623 36.168 39.0623 35.5998V31.2395C39.258 31.5383 39.5859 31.7062 39.9239 31.7062C40.0987 31.7062 40.2755 31.6618 40.4373 31.5683L44.1843 29.405V51.1348C44.1843 52.2469 43.2794 53.1517 42.1673 53.1517H29.3025C28.1903 53.1517 27.2856 52.2468 27.2856 51.1348V34.1348C27.2856 33.77 26.9898 33.4742 26.625 33.4742C26.2602 33.4742 25.9644 33.77 25.9644 34.1348V54.3472C25.9644 56.3614 27.6031 58 29.6172 58H41.8523C43.8665 58 45.5052 56.3614 45.5052 54.3472V18.9328C45.5052 18.1438 44.8633 17.502 44.0743 17.502ZM25.6688 16.4297L25.1119 15.8727C27.7935 13.6636 31.7787 13.8123 34.2849 16.3185C34.9074 16.941 35.384 17.6549 35.7156 18.4171C35.7176 18.4217 35.7198 18.426 35.7218 18.4305C36.7181 20.7347 36.3878 23.4798 34.7306 25.4915L34.1737 24.9346C34.9895 23.8594 35.4229 22.5489 35.4027 21.1811C35.3795 19.5936 34.7482 18.1009 33.6252 16.9779C32.5023 15.855 31.0096 15.2237 29.4221 15.2004C28.0563 15.1814 26.7444 15.614 25.6688 16.4297ZM26.613 17.3737C28.4771 16.0635 31.0307 16.2515 32.6913 17.9121C34.352 19.5728 34.5399 22.1264 33.2296 23.9905L26.613 17.3737ZM28.8808 21.5099H27.2855V19.9147L28.8808 21.5099ZM27.2855 24.5452V22.8311H28.3495L27.2855 24.5452ZM31.328 29.3146L27.3952 26.8736L29.8364 22.9407L31.0892 23.7184L32.8115 25.4407C32.8115 25.4407 32.8115 25.4407 32.8116 25.4408L33.3798 26.009L31.328 29.3146ZM33.1121 35.3091V30.6802H37.7409V35.3091H33.1121ZM32.8553 29.3592V29.3591L34.3417 26.9644C34.4581 27.0572 34.6029 27.1087 34.7532 27.1087C34.9284 27.1087 35.0964 27.039 35.2203 26.9151C36.3802 25.7548 37.1146 24.3286 37.4277 22.8311H41.0283L36.8015 25.2715C36.3095 25.5555 36.1404 26.1869 36.4244 26.6791L37.9718 29.3592H32.8553ZM40.0283 30.2789L37.7138 26.2702L41.7225 23.9558L44.037 27.9645L40.0283 30.2789ZM44.1841 25.577L42.7214 23.0435C42.6759 22.9646 42.6203 22.894 42.5578 22.8311H44.1841V25.577ZM44.1841 21.5099H37.5949C37.6345 20.6062 37.5255 19.697 37.2667 18.823H44.0743C44.1349 18.823 44.1841 18.8722 44.1841 18.9327V21.5099ZM44.1841 54.3472C44.1841 55.6329 43.138 56.6789 41.8523 56.6789H29.6173C28.3316 56.6789 27.2856 55.6329 27.2856 54.3472V53.793C27.8462 54.2195 28.5453 54.4729 29.3025 54.4729H42.1672C42.9244 54.4729 43.6234 54.2195 44.1841 53.793V54.3472Z"
                                fill="#424141"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_12_884">
                                <rect width="45" height="45" fill="white" transform="translate(12 13)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <button className={classes.mealTypeButton} onClick={() => {
                    dispatch(applyCategory("desert"))
                }}>
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="70" height="70" rx="20" fill="white" fill-opacity="0.2"/>
                        <path
                            d="M56.156 25.5165C55.9744 25.2009 55.5713 25.0923 55.2558 25.2741C54.9403 25.4556 54.8317 25.8587 55.0134 26.1742C56.1205 28.0973 56.6817 30.2881 56.6817 32.6859V49.2694C56.6817 50.3629 55.792 51.2526 54.6986 51.2526H15.4523C14.8271 51.2526 14.3184 50.7438 14.3184 50.1186C14.3184 49.4933 14.8271 48.9847 15.4523 48.9847H20.5217C20.8857 48.9847 21.1809 48.6896 21.1809 48.3255C21.1809 47.9615 20.8857 47.6663 20.5217 47.6663H16.1115V42.958H52.7999C53.1987 42.958 53.5232 43.2824 53.5232 43.6813V46.943C53.5232 47.3419 53.1988 47.6663 52.7999 47.6663H23.1584C22.7944 47.6663 22.4992 47.9614 22.4992 48.3254C22.4992 48.6895 22.7944 48.9846 23.1584 48.9846H52.7999C53.9256 48.9846 54.8416 48.0687 54.8416 46.943V43.6813C54.8416 42.5555 53.9257 41.6397 52.7999 41.6397H15.4523C14.8271 41.6397 14.3184 41.131 14.3184 40.5057C14.3184 39.8805 14.8271 39.3717 15.4523 39.3717H52.7999C53.9256 39.3717 54.8416 38.4559 54.8416 37.3301V34.0684C54.8416 32.9426 53.926 32.0268 52.8006 32.0268H15.5104C15.4962 32.0259 15.482 32.0251 15.4677 32.0249C15.4651 32.0248 15.4625 32.0251 15.4599 32.025C14.843 32.0065 14.3344 31.5203 14.3189 30.9237C14.3065 30.4531 14.5783 30.0308 15.0112 29.8477C16.2437 29.3263 30.9505 22.4628 36.7725 19.7434C36.9342 20.0703 37.0667 20.4313 37.168 20.8282C35.3455 21.1862 33.9662 22.7954 33.9662 24.7211C33.9662 26.9091 35.7461 28.6891 37.9341 28.6891C40.122 28.6891 41.902 26.9091 41.902 24.7211C41.902 22.7305 40.4284 21.0781 38.5149 20.7961C38.3869 20.2061 38.2047 19.6677 37.9693 19.1843C38.5876 18.8954 38.9849 18.7098 39.0938 18.6588C40.478 18.0049 42.0461 17.8729 43.5094 18.2871C46.4991 19.1336 50.6647 20.8305 53.5317 24.1073C53.7715 24.3813 54.1878 24.4091 54.4619 24.1694C54.7359 23.9296 54.7637 23.5132 54.5239 23.2392C51.4443 19.7194 47.0297 17.9137 43.8686 17.0187C42.0986 16.5176 40.2029 16.6768 38.5332 17.4657C38.5015 17.4804 38.0342 17.6988 37.2501 18.0652C36.6144 17.3039 35.7833 16.7608 34.7714 16.4571C34.4227 16.3524 34.0553 16.5503 33.9506 16.899C33.846 17.2477 34.0439 17.6153 34.3925 17.7198C35.0249 17.9096 35.5586 18.222 35.9948 18.6515C30.0571 21.4245 15.679 28.1338 14.4977 28.6334C13.5618 29.0292 12.9743 29.9418 13.001 30.9581C13.0292 32.0356 13.7844 32.9481 14.7932 33.2439V38.1441C13.7602 38.4328 13 39.3818 13 40.5057C13 41.6296 13.7602 42.5785 14.7931 42.8673V47.757C13.7602 48.0458 13 48.9948 13 50.1186C13 51.4708 14.1001 52.5709 15.4523 52.5709H54.6985C56.519 52.5709 58 51.0898 58 49.2694V32.6859C58 30.0543 57.3796 27.6422 56.156 25.5165ZM16.1115 33.3452H52.8006V33.3451C53.1741 33.3451 53.4823 33.6303 53.5194 33.9945C53.5219 34.0187 53.5231 34.0434 53.5231 34.0683V37.3301C53.5231 37.729 53.1987 38.0534 52.7999 38.0534H16.1115V33.3452ZM37.903 22.0724C37.9217 22.074 37.9405 22.0749 37.9595 22.0749C37.9682 22.0749 37.977 22.0732 37.9858 22.0729C39.4229 22.1006 40.5836 23.2774 40.5836 24.7211C40.5836 26.1821 39.3951 27.3707 37.9341 27.3707C36.4731 27.3707 35.2845 26.1821 35.2845 24.7211C35.2845 23.2706 36.4564 22.0892 37.903 22.0724Z"
                            fill="#424141"/>
                    </svg>
                </button>
                <button className={classes.mealTypeButton} onClick={() => {
                    dispatch(applyCategory("salad"))
                }}>
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="70" height="70" rx="20" fill="white" fill-opacity="0.2"/>
                        <path
                            d="M30.3992 30.4785C30.0202 30.0635 29.4804 29.8205 28.9185 29.8118C27.7884 29.7973 26.8534 30.6984 26.8342 31.8277C26.8281 32.1917 27.1182 32.4918 27.4822 32.4979C27.486 32.498 27.4897 32.498 27.4936 32.498C27.8524 32.498 28.1463 32.2102 28.1524 31.8499C28.1592 31.4466 28.4907 31.123 28.8979 31.13C29.1012 31.1332 29.2887 31.2175 29.4259 31.3677C29.6714 31.6365 30.0885 31.6553 30.3571 31.4097C30.6259 31.1643 30.6448 30.7472 30.3992 30.4785Z"
                            fill="#424141"/>
                        <path
                            d="M33.9062 32.6268C33.7041 32.1518 33.3108 31.777 32.8268 31.5983C31.8535 31.2393 30.7685 31.7382 30.4079 32.7104C30.2812 33.0517 30.4554 33.4311 30.7966 33.5577C30.8722 33.5858 30.9496 33.599 31.0258 33.599C31.2936 33.599 31.5453 33.4347 31.6439 33.1689C31.7522 32.8769 32.0785 32.7275 32.3703 32.8352C32.517 32.8893 32.6316 32.9986 32.6929 33.1427C32.8353 33.4777 33.2226 33.6339 33.5574 33.4914C33.8926 33.3489 34.0486 32.9618 33.9062 32.6268Z"
                            fill="#424141"/>
                        <path
                            d="M38.1547 26.7887C37.897 26.5314 37.4796 26.5319 37.2226 26.7896L36.6012 27.4122C36.344 27.6699 36.3444 28.0873 36.6021 28.3444C36.7307 28.4728 36.8992 28.537 37.0677 28.537C37.2366 28.537 37.4055 28.4725 37.5343 28.3434L38.1557 27.7208C38.4129 27.4631 38.4124 27.0457 38.1547 26.7887Z"
                            fill="#424141"/>
                        <path
                            d="M34.0537 35.2986H33.1752C32.811 35.2986 32.516 35.5937 32.516 35.9578C32.516 36.3218 32.811 36.6169 33.1752 36.6169H34.0537C34.4178 36.6169 34.7129 36.3218 34.7129 35.9578C34.7129 35.5937 34.4178 35.2986 34.0537 35.2986Z"
                            fill="#424141"/>
                        <path
                            d="M40.7899 35.2986H39.9113C39.5471 35.2986 39.2521 35.5937 39.2521 35.9578C39.2521 36.3218 39.5472 36.6169 39.9113 36.6169H40.7899C41.1539 36.6169 41.4491 36.3218 41.4491 35.9578C41.4491 35.5937 41.1539 35.2986 40.7899 35.2986Z"
                            fill="#424141"/>
                        <path
                            d="M57.9788 47.1842L57.8072 46.2577C57.6977 45.6657 57.1808 45.236 56.5779 45.236C56.5023 45.236 56.426 45.2429 56.3509 45.2567L52.8564 45.8987L54.4389 44.8407C54.8537 44.5635 55.0633 44.0677 54.9729 43.5757C54.9477 43.441 54.9006 43.3117 54.8324 43.1907L54.3535 42.3426C54.1894 42.0513 53.9096 41.8348 53.5866 41.749C53.4284 41.7068 53.263 41.6974 53.1016 41.7184C53.2778 40.7458 53.3687 39.7525 53.3687 38.7413C53.3687 38.2926 53.0989 37.9065 52.7135 37.7351C53.2171 36.5373 53.2515 35.166 52.7537 33.9103C52.7133 33.8081 52.6534 33.717 52.5758 33.6393C52.4988 33.5623 52.4087 33.5028 52.3065 33.4618C51.71 33.2242 51.083 33.1038 50.4431 33.1038C50.3613 33.1038 50.2798 33.1059 50.1986 33.1098C50.1073 31.2699 48.5846 29.8012 46.7257 29.8012C46.4809 29.8012 46.2422 29.8272 46.0117 29.8757C46.1718 28.9177 46.0775 27.9155 45.7044 26.9746C45.6643 26.8711 45.6041 26.7783 45.5223 26.6952C45.4436 26.6164 45.3512 26.5557 45.2487 26.515C44.6061 26.2591 43.9308 26.1293 43.2414 26.1293C42.2029 26.1293 41.2094 26.4213 40.3518 26.9641C40.0385 26.0565 39.5218 25.2044 38.7998 24.4808C38.5884 24.269 38.3071 24.1522 38.0079 24.1522C37.7086 24.1522 37.4273 24.269 37.2156 24.481L34.0241 27.6798C33.4334 27.153 32.6562 26.8381 31.8127 26.8381C31.6212 26.8381 31.428 26.8549 31.2382 26.8879C30.5506 27.0076 29.9179 27.3442 29.4328 27.837C28.8108 27.5369 28.0983 27.4345 27.4136 27.5537C27.2629 27.5799 27.1168 27.6168 26.9749 27.6618V25.1968C26.9749 23.4993 25.6106 22.1158 23.9229 22.0866V20.6887C24.4395 20.5993 24.834 20.149 24.834 19.6073V16.4398C24.834 15.834 24.3412 15.3412 23.7354 15.3412H18.3748C17.769 15.3412 17.2762 15.834 17.2762 16.4398V19.6073C17.2762 20.149 17.6707 20.5993 18.1873 20.6887V22.0865C16.4996 22.1156 15.1354 23.499 15.1354 25.1966V44.4355C13.8193 45.624 13 47.2824 13 49.1163C13 52.7239 16.1662 55.6589 20.0582 55.6589L46.4417 55.6512C47.3422 55.6508 48.1892 55.255 48.7652 54.5654C49.3263 53.8941 49.5647 53.0222 49.4274 52.1623L54.697 53.1093C54.7699 53.1224 54.8447 53.1291 54.9187 53.1291C55.1815 53.1291 55.4333 53.0484 55.6466 52.896C55.9207 52.7001 56.1062 52.397 56.1557 52.0645L56.2984 51.1068C56.319 50.9696 56.3167 50.8314 56.2917 50.696C56.201 50.2063 55.8281 49.8177 55.3416 49.7063L53.4842 49.2802L56.9753 48.6388C57.3045 48.5784 57.5902 48.3935 57.7797 48.1183C57.9688 47.8439 58.0395 47.5122 57.9788 47.1842ZM50.4431 34.422C50.8399 34.422 51.2301 34.4848 51.6052 34.6086C51.9404 35.6294 51.8149 36.7304 51.29 37.6399H49.5143L50.0809 37.0719C50.3381 36.8142 50.3375 36.3969 50.0798 36.1397C49.822 35.8825 49.4046 35.883 49.1476 36.1407L48.8478 36.4412C48.7073 35.9785 48.4619 35.5642 48.1393 35.2243C48.7936 34.7048 49.5967 34.422 50.4431 34.422ZM46.7257 31.1194C47.9162 31.1194 48.8846 32.0908 48.8846 33.2847C48.8846 33.3069 48.8836 33.3288 48.883 33.3508C48.1881 33.5767 47.5476 33.9542 47.0014 34.4669C46.9145 34.4339 46.8263 34.4033 46.7358 34.3783C46.543 33.3366 45.841 32.5016 44.9137 32.1117C45.2985 31.5154 45.9663 31.1194 46.7257 31.1194ZM43.2413 27.4475C43.689 27.4475 44.129 27.5199 44.553 27.6632C44.8937 28.6764 44.8241 29.7647 44.3899 30.7075C44.033 31.0326 43.7434 31.4307 43.5455 31.8782C43.4278 31.8851 43.3101 31.8981 43.1938 31.9183C42.6773 32.0082 42.1957 32.2323 41.7926 32.5574C41.6551 32.306 41.4868 32.0741 41.294 31.8652L42.8056 30.3502C43.0628 30.0925 43.0623 29.6751 42.8045 29.418C42.5468 29.1608 42.1294 29.1613 41.8722 29.4191L40.2201 31.075C39.9057 30.9264 39.5659 30.823 39.2088 30.7747C39.363 29.9881 39.7448 29.2469 40.3352 28.655C41.1121 27.8763 42.1442 27.4475 43.2413 27.4475ZM38.1902 37.6399H37.6189C37.5226 37.395 37.2847 37.2214 37.0056 37.2214C36.7266 37.2214 36.4887 37.3951 36.3924 37.6399H35.7203C35.8763 37.3857 35.8448 37.0489 35.6245 36.829C35.3668 36.5718 34.9494 36.5723 34.6922 36.83L34.0709 37.4526C34.0151 37.5085 33.9722 37.5722 33.9407 37.6399H32.599C32.0965 36.8688 31.7899 35.9587 31.7536 34.9796H42.2113C42.175 35.9587 41.8684 36.8688 41.3659 37.6399H39.9697C39.9383 37.5722 39.8952 37.5084 39.8395 37.4525L39.2183 36.8299C38.961 36.5723 38.5438 36.5716 38.2861 36.8288C38.0656 37.0487 38.0341 37.3856 38.1902 37.6399ZM36.6572 33.6613C36.9056 32.7404 37.7456 32.061 38.741 32.061C39.7366 32.061 40.5765 32.7405 40.825 33.6613H36.6572ZM38.0051 25.5559C38.6321 26.2336 39.0467 27.0381 39.25 27.8838C38.9135 28.2495 38.6339 28.6536 38.4134 29.0837C38.3133 29.0223 38.1959 28.9864 38.07 28.9864H37.1916C36.8276 28.9864 36.5324 29.2815 36.5324 29.6456C36.5324 30.0096 36.8276 30.3047 37.1916 30.3047H37.9622C37.9188 30.4868 37.8852 30.671 37.8607 30.8566C37.599 30.9253 37.349 31.0232 37.1151 31.1479C36.6757 30.3896 35.9482 29.8246 35.0861 29.5979C35.0859 29.5961 35.0855 29.5942 35.0852 29.5924C35.0335 29.2941 34.9433 29.0111 34.8203 28.748L38.0051 25.5559ZM26.0891 31.504C26.0505 31.3959 26.0212 31.285 26.002 31.1737C25.8129 30.0838 26.5477 29.0425 27.6395 28.8524C27.7547 28.8323 27.8717 28.8221 27.9871 28.8221C28.4214 28.8221 28.8364 28.9606 29.1872 29.2226C29.3323 29.3311 29.5158 29.3749 29.6944 29.344C29.873 29.313 30.0309 29.2099 30.1311 29.0588C30.4406 28.592 30.9141 28.2823 31.4643 28.1865C31.5797 28.1664 31.6969 28.1563 31.8127 28.1563C32.7893 28.1563 33.6193 28.855 33.7861 29.8178C33.8053 29.9281 33.8151 30.0431 33.8153 30.1595C33.8159 30.5007 34.0769 30.7851 34.4168 30.815C35.1538 30.8798 35.7812 31.3436 36.072 31.997C35.6826 32.4643 35.4127 33.0349 35.3102 33.6613H31.551C31.0836 33.6613 30.6826 33.9498 30.5153 34.3582C29.6883 33.7949 28.7136 33.4914 27.6921 33.4914C27.0522 33.4914 26.4252 33.6119 25.8283 33.8495C25.727 33.89 25.6365 33.9496 25.5593 34.0268C25.4811 34.105 25.4211 34.1967 25.3817 34.2972C25.23 34.6798 25.1289 35.0731 25.0742 35.4689C24.8379 35.2 24.6715 34.8655 24.6064 34.4902C24.4514 33.5959 24.9196 32.7054 25.7446 32.3246C26.0547 32.1815 26.2042 31.8254 26.0891 31.504ZM28.0542 37.4596L28.234 37.6399H26.6509C26.2954 36.8153 26.2415 35.8767 26.53 34.9964C26.9056 34.8724 27.2956 34.8096 27.6921 34.8096C28.6853 34.8096 29.6197 35.1979 30.3229 35.9026C30.4164 35.9964 30.5035 36.0947 30.5854 36.1962C30.6971 36.7019 30.8687 37.1851 31.0898 37.6398H30.0964L28.9875 36.5283C28.7303 36.2707 28.3129 36.27 28.0553 36.5273C27.7976 36.7845 27.797 37.2019 28.0542 37.4596ZM25.247 37.6399H22.8971C23.0018 37.0014 23.3859 36.4571 23.919 36.1361C24.2347 36.5589 24.6466 36.9008 25.1212 37.1324C25.1548 37.3034 25.196 37.473 25.247 37.6399ZM18.5946 16.6595H23.5156V19.3875H18.5946V16.6595ZM22.6046 20.7059V22.0852H19.5057V20.7059H22.6046ZM16.4538 27.8699H20.7343C21.0985 27.8699 21.3935 27.5748 21.3935 27.2107C21.3935 26.8467 21.0985 26.5516 20.7343 26.5516H16.4538V25.1966C16.4538 24.2079 17.2557 23.4035 18.2414 23.4035H23.8689C24.8546 23.4035 25.6566 24.2079 25.6566 25.1966V26.5516H24.4257C24.0616 26.5516 23.7666 26.8467 23.7666 27.2107C23.7666 27.5748 24.0616 27.8699 24.4257 27.8699H25.6566V28.455C24.9013 29.1955 24.5091 30.2814 24.7028 31.3984C24.7031 31.4006 24.7036 31.4028 24.7039 31.4051C23.6464 32.1307 23.0829 33.4205 23.3073 34.7154C23.3204 34.791 23.3369 34.8654 23.3548 34.9389C23.0255 35.1205 22.7297 35.355 22.4762 35.6294H16.4538V27.8699ZM16.4537 36.9477H21.7108C21.6408 37.1698 21.5915 37.4011 21.5674 37.6399H21.4563C20.8496 37.6399 20.3559 38.1339 20.3559 38.7411C20.3559 39.7878 20.4532 40.8154 20.6417 41.8207C20.4523 41.8054 20.2581 41.7973 20.0605 41.7973C19.2633 41.7973 18.5038 41.9237 17.922 42.1535C17.0321 42.5049 16.7861 43.0038 16.7324 43.3491C16.6381 43.396 16.5455 43.4456 16.4537 43.4963V36.9477ZM24.8008 45.0454C25.0382 45.2354 25.1833 45.3968 25.2674 45.5133C25.2595 45.5134 25.2512 45.5134 25.2429 45.5134C24.8698 45.5134 24.1994 45.3631 23.4371 44.9411C23.1533 44.7839 22.8919 44.6062 22.6809 44.4276C22.435 44.2192 22.0744 44.2194 21.8287 44.4277C21.6177 44.6065 21.3563 44.784 21.0728 44.9409C20.3104 45.3631 19.64 45.5134 19.267 45.5134C19.2585 45.5134 19.2503 45.5134 19.2423 45.5133C19.3263 45.3968 19.4714 45.2353 19.7089 45.0453C19.9164 44.8791 20.0039 44.6046 19.9307 44.3491C19.8574 44.0935 19.6378 43.9069 19.3737 43.876C18.7304 43.8006 18.3237 43.6368 18.1332 43.5176C18.3719 43.369 18.9751 43.1156 20.0608 43.1156C20.9599 43.1156 21.617 43.3047 21.9322 43.4817C22.1327 43.5942 22.3771 43.5942 22.5776 43.4818C22.8929 43.3048 23.5502 43.1157 24.4493 43.1157C25.535 43.1157 26.1382 43.3692 26.3767 43.5177C26.1864 43.637 25.7795 43.8006 25.1361 43.8761C24.872 43.9071 24.6523 44.0936 24.5791 44.3493C24.5056 44.6048 24.5931 44.8794 24.8008 45.0454ZM23.4821 53.0686L23.5048 53.1908C23.5832 53.6141 23.7485 54.0027 23.9795 54.3405H20.0582C16.8933 54.3405 14.3184 51.997 14.3184 49.1163C14.3184 47.1477 15.5214 45.4307 17.2929 44.5403C17.4964 44.6922 17.75 44.8232 18.051 44.9288C17.9316 45.1326 17.8485 45.3518 17.8289 45.5804C17.8029 45.8843 17.8958 46.173 18.091 46.3932C18.3487 46.6843 18.7444 46.8319 19.267 46.8319C19.9635 46.8319 20.8773 46.5562 21.7113 46.0944C21.9034 45.9881 22.085 45.8759 22.2549 45.7587C22.4248 45.8758 22.6064 45.9881 22.7985 46.0945C23.6326 46.5562 24.5464 46.8318 25.2429 46.8319H25.2429C25.7654 46.8319 26.161 46.6843 26.4187 46.3933C26.6139 46.1731 26.707 45.8844 26.6809 45.5804C26.6613 45.3518 26.5782 45.1326 26.4588 44.9288C26.7598 44.8231 27.0135 44.6921 27.217 44.5403C28.6219 45.2464 29.6687 46.4726 30.042 47.9318L25.3799 49.7029C24.0152 50.2215 23.2171 51.6369 23.4821 53.0686ZM47.7534 53.7202C47.4284 54.1094 46.95 54.3326 46.4411 54.3328L45.7492 54.3331L45.317 51.9991C45.2506 51.6412 44.9069 51.4045 44.5487 51.471C44.1909 51.5373 43.9543 51.8812 44.0206 52.2392L44.4086 54.3335L42.1405 54.3344L41.8482 52.7561C41.7819 52.3982 41.438 52.1617 41.08 52.228C40.7221 52.2943 40.4856 52.6382 40.5518 52.9962L40.7997 54.3349L35.5241 54.3369L35.127 52.1935C35.0605 51.8355 34.7169 51.5991 34.3587 51.6654C34.0008 51.7317 33.7643 52.0757 33.8306 52.4337L34.1833 54.3375L26.4803 54.3404C26.4801 54.3404 26.4799 54.3404 26.4797 54.3404C25.656 54.3404 24.9501 53.756 24.8009 52.9504L24.7782 52.8282C24.6292 52.0235 25.079 51.2275 25.8478 50.9353L28.4385 49.9511L28.6315 50.9928C28.6903 51.3102 28.9674 51.532 29.2789 51.532C29.3188 51.532 29.3592 51.5283 29.3998 51.5208C29.7577 51.4545 29.9941 51.1106 29.9278 50.7526L29.6911 49.4753L33.5367 48.0144C33.877 47.8851 34.0481 47.5043 33.9189 47.164C33.7896 46.8236 33.4084 46.6526 33.0686 46.7819L31.2791 47.4617C30.777 45.6843 29.4873 44.1996 27.7771 43.349C27.7234 43.0037 27.4774 42.5048 26.5876 42.1534C26.0058 41.9237 25.2463 41.7972 24.4491 41.7972C23.9005 41.7972 23.3766 41.8577 22.9141 41.968V41.5699C22.9141 41.2059 22.6191 40.9107 22.2549 40.9107C22.101 40.9107 21.9599 40.9638 21.8477 41.0522C21.7437 40.3647 21.6855 39.6663 21.6758 38.9581H43.1464C43.5105 38.9581 43.8055 38.6629 43.8055 38.2989C43.8055 37.9348 43.5105 37.6397 43.1464 37.6397H42.8766C43.2964 36.7752 43.5335 35.806 43.5335 34.7816C43.5335 34.2 43.0885 33.7209 42.5215 33.6665C42.7684 33.4337 43.0765 33.2767 43.42 33.2169C43.5206 33.1994 43.6227 33.1905 43.7236 33.1905C44.5747 33.1905 45.2978 33.7993 45.4431 34.638C45.4599 34.7351 45.4685 34.8353 45.4686 34.9359C45.469 35.2773 45.7301 35.5619 46.0701 35.5918C46.8579 35.6609 47.5024 36.2534 47.6375 37.0325C47.6733 37.2396 47.6688 37.4441 47.6329 37.6397H46.9256C46.5615 37.6397 46.2665 37.9348 46.2665 38.2989C46.2665 38.6629 46.5615 38.9581 46.9256 38.9581H52.049C52.0326 40.1673 51.8769 41.3484 51.5864 42.4944L48.014 44.6033C47.7955 43.8428 47.2877 43.1978 46.588 42.8062C45.8032 42.367 44.8706 42.2983 44.0295 42.6178L36.6721 45.4129C36.3317 45.5422 36.1607 45.9229 36.29 46.2632C36.4192 46.6036 36.8003 46.7745 37.1402 46.6454L38.1095 46.2772L38.4104 47.902C38.4692 48.2194 38.7462 48.4413 39.0578 48.4413C39.0976 48.4413 39.138 48.4376 39.1786 48.4302C39.5365 48.3639 39.773 48.02 39.7068 47.662L39.3622 45.8014L44.4975 43.8505C44.9733 43.6698 45.5005 43.7085 45.9441 43.9568C46.3869 44.2046 46.6936 44.6317 46.7857 45.1285L48.1193 52.328C48.2112 52.8245 48.0779 53.3319 47.7534 53.7202ZM50.1053 48.5605C49.7978 48.617 49.5724 48.8818 49.5654 49.1944C49.5586 49.507 49.7723 49.7814 50.077 49.8513L54.9848 50.977L54.8622 51.7995L49.1727 50.7771L48.2834 45.9753L53.239 43.05L53.6518 43.781L49.4719 46.5751C49.212 46.7488 49.1099 47.0812 49.2275 47.3709C49.345 47.6606 49.65 47.8279 49.9574 47.7714L56.5234 46.5653L56.6696 47.3546L50.1053 48.5605Z"
                            fill="#424141"/>
                    </svg>
                </button>


            </div>
        </div>
    );
};

export default Filter;