import React from 'react';
import style from "./style.module.scss";
import {getActiveClassName} from "../../../utils/lib/getActiveClassName";
import BoxShadowButton from "../../ui/BoxShadowButton/BoxShadowButton";

function ContentButton({button, img, customStyle = ''}: { button: string, img?: string, customStyle?: string }) {


    return (
        <BoxShadowButton shadow={"button_content"}>
            {<div className={getActiveClassName(style, "button_content", customStyle)}
            >
                <img src={img} alt="button"/>
                <span>{button}</span>

            </div>}
        </BoxShadowButton>
    );
}

export default ContentButton;