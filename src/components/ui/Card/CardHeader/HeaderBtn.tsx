import React from 'react';
import style from "../style.module.scss";
import rectangle from "../../../../assets/image/gallery/rectangle.png";

function HeaderBtn({value}: { value: string }) {
    return (
        <div className={style.card_header__amount}>
            <img src={rectangle} alt="rectangle"/>
            <span>{value}</span>
        </div>
    );
}

export default HeaderBtn;