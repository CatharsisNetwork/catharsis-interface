import React from 'react';
import style from "../style.module.scss";
import Calendar from "./Calendar/Calendar";
import flame from "../../../../../assets/image/fractionalize/flame.png";


function RightSide() {
    return (
        <div className={style.content_right}>
            <div className={style.title}>
                <span>Date of auction</span>
            </div>
            <Calendar/>
        </div>
    );
}

export default RightSide;