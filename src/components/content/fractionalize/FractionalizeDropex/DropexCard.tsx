import React from 'react';
import style from './style.module.scss';
import CardIcons from "./CardIcons";
import flame from "../../../../assets/image/fractionalize/flame.png";

function DropexCard() {
    return (
        <div className={style.card}>
            <div className={style.card_title}>
                <div className={style.card_title__image}>
                    <CardIcons/>
                    <span>
                    DPX
                </span>
                </div>
                <div className={style.card_flame}>
                    <img src={flame} alt="flame"/>
                    <span>
2 K
                    </span>
                </div>
            </div>

        </div>
    );
}

export default DropexCard;