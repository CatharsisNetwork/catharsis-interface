import React from 'react';
import style from "../style.module.scss";
import {FooterBtnType} from "./CardFooter";


function FooterBtn({button}: { button: FooterBtnType }) {
    return (
        <div className={style[`card_footer__${button.style}`]}>
            <button>{button.value}</button>
        </div>
    );
}

export default FooterBtn;