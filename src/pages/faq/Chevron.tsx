import React from "react";
import caret_up from "../../img/faq_image/caret_up.svg";
import caret_down from "../../img/faq_image/caret_down.svg";
import style from './style.module.scss';
type Props = {
    setActive: string
}

function Chevron(props: Props) {

    return (
        <>
            {props.setActive === "active"
                ? <div className={style.image}>
                    <img className={style.icon} src={caret_up}/>
                </div>
                : <div className={`${style.image} ${style.container}`}>
                    <img className={`${style.icon} ${style.rotate}`} src={caret_down}/>
                </div>}
        </>
    );
}

export default Chevron;