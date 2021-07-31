import React, {useState} from 'react';
import style from "./style.module.scss";
import {getActiveClassName} from "../../../../../utils/lib/getActiveClassName";


function FractionalizeCard() {
    const [active, setActive] = useState(false)
    return (
        <div className={getActiveClassName(style, "card", active)} onClick={() => setActive(!active)}>
            <button className={style.card_button}>
                <span>Sea world between fishes</span>
            </button>
        </div>
    );
}

export default FractionalizeCard;