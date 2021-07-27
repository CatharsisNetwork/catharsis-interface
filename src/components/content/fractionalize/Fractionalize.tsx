import React, {useState} from 'react';
import style from "./style.module.scss";
import CheckBoxItem from "../../ui/CheckBox/CheckBoxItem";
import SwitchLine from "../../ui/SwitchLine/SwitchLine";
import flame from "../../../assets/image/fractionalize/flame.png";
import FractionalizeCard from "./FractionalizeCard/FractionalizeCard";

function Fractionalize() {
    const [checked, setChecked] = useState<boolean>(false)
    return (
        <div className={"content"}>
            <div className={style.fractional}>
                <SwitchLine/>

                <div className={style.content}>
                    <div className={style.content_chose}>
                        <div className={style.content_chose__items}>
                            <div className={style.title}>
                                <img src={flame} alt=""/>
                                <span>You can choose even more than one item</span>
                            </div>
                            <div className={style.body}>
                                <div className={style.body_title}>
                                    <span>1212 items</span>
                                    <small> You choosed</small>
                                </div>
                                <div className={style.body_cards}>
                                    <FractionalizeCard/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.content_token}>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Fractionalize;