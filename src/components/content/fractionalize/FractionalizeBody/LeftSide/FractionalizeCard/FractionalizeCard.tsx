import React, {useState} from 'react';
import style from "./style.module.scss";
import {getActiveClassName} from "../../../../../../utils/lib/getActiveClassName";
import bg from "../../../../../../assets/image/fractionalize/bg_fractionalize.png"

function FractionalizeCard() {
    const [active, setActive] = useState(false)
    return (
        <div className={getActiveClassName(style, "card", active)} onClick={() => setActive(!active)}>
            <span>
                <img src={bg} alt="bg"/>
            </span>
            <button className={style.card_button}>
                <span>Sea world between fishes</span>
            </button>
        </div>
    );
}

export default FractionalizeCard;