import React, {Dispatch, SetStateAction} from 'react';
import style from "./style.module.scss";
import circle_wavy_check from "../../../assets/image/fractionalize/circle_wavy_check.png";
import {getClassNameButton, getClassNameSpan, getPosition} from "./helper";

type SwitchLineButton = {
    currentPosition: string
    title: string
    position: string
    setCurrentPosition: Dispatch<SetStateAction<string>>
    setWidth: Dispatch<SetStateAction<string>>
}


function SwitchLineButton({setCurrentPosition, setWidth, currentPosition, title, position}: SwitchLineButton) {
    return (
        <button
            className={`${style[`switch_checkbox__${position}`]} ${style[getClassNameButton(position, currentPosition)]}`}
            onClick={() => {
                setCurrentPosition(position);
                setWidth(getPosition(position));
            }}>

            <img src={circle_wavy_check} alt="circle_wavy_check"/>
            <span className={` ${style[getClassNameSpan(position, currentPosition)]}`}>
                       {title}
                    </span>
        </button>
    );
}

export default SwitchLineButton;