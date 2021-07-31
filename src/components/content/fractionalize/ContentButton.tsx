import React from 'react';
import style from "./style.module.scss";
import {getActiveClassName} from "../../../utils/lib/getActiveClassName";

function ContentButton({title, img, customStyle = ''}: { title: string, img?: string, customStyle?: string }) {
    return (
        <div className={getActiveClassName(style, "button_content", customStyle)}>
            <img src={img} alt="button"/>
            <span>{title}</span>
        </div>
    );
}

export default ContentButton;