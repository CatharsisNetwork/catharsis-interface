import React, {Dispatch, SetStateAction, useState} from 'react';
import style from "../../content/fractionalize/style.module.scss";
import {getActiveClassName} from "../../../utils/lib/getActiveClassName";


type ButtonType = {
    title: () => React.ReactNode,
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>
    customStyle: string
}


function Button({title, setActive, active, customStyle}: ButtonType) {
    return (
        <span
            className={getActiveClassName(style, customStyle, active)}
            onClick={() => {
                if (active) return
                setActive(!active)
            }}
        >{title()}</span>
    );
}

export default Button;