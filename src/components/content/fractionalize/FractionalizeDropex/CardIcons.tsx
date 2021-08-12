import React from 'react';
import ellipse_1 from "../../../../assets/image/fractionalize/ellipse_1.png";
import ellipse_2 from "../../../../assets/image/fractionalize/ellipse_2.png";
import style from './style.module.scss';
function CardIcons() {
    return (
        <div className={style.dropex_icon}>
            <img src={ellipse_1} alt="" />
            <img src={ellipse_2} alt="" />
        </div>
    );
}

export default CardIcons;