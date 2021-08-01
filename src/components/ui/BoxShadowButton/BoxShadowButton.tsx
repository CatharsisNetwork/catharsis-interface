import React, {useState} from 'react';
import {getActiveClassName} from "../../../utils/lib/getActiveClassName";
import style from "./style.module.scss";

function BoxShadowButton({children,shadow}: { children: React.ReactNode,shadow:string }) {
    const [active, setActive] = useState<boolean>(false)
    return (
        <>
            {children}
            <span className={getActiveClassName(style, shadow, active)} onClick={
                () => {
                    setActive(!active);
                    setTimeout(() => {
                        setActive(active)
                    }, 350)
                }
            }/>
        </>
    );
}

export default BoxShadowButton;