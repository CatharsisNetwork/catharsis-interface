import React, {useState} from 'react';
import style from "./style.module.scss";
import SwitchLine from "../../ui/SwitchLine/SwitchLine";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import ContentButton from "./ContentButton";
import FractionalizeNavigate from "./FractionalizeNavigate";

function Fractionalize() {
    const [checked, setChecked] = useState<boolean>(false)


    return (
        <div className={"content"}>
            <div className={style.fractional}>
                <div className={style.fractional_title}>
                    <span>Fractionalize</span>
                </div>
                <FractionalizeNavigate/>
                <div className={style.content}>
                        <LeftSide/>
                        <RightSide/>
                </div>
                <div className={style.button}>
                    <ContentButton title={"Send for approval"}/>
                </div>
            </div>
        </div>
    );
}

export default Fractionalize;