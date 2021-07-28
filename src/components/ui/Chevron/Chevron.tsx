import React from 'react';
import style from './style.module.scss';
import caret_down from "../../../assets/image/faq/caret_down.png";
import caret_up from "../../../assets/image/faq/caret_up.png";


function Chevron({active, customStyle}: { active: boolean, customStyle?: string }) {
    return <img className={active ? style.icon_down : style.icon_up}
                src={active ? caret_down : caret_up} alt={"caret"}/>

}

export default Chevron;