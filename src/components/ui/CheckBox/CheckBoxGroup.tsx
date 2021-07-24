import React, {useState} from 'react';
import style from './style.module.scss';
import CheckBoxItem from "./CheckBoxItem";


function CheckBoxGroup() {
    const [checked, setChecked] = useState<boolean>(false)
    return (
        <div className={style.checkbox}>
            <CheckBoxItem checked={checked} setChecked={setChecked} label={"Fractionalized"}/>
            <CheckBoxItem checked={!checked} setChecked={setChecked} label={"Auction"}/>
        </div>
    );
}

export default CheckBoxGroup;