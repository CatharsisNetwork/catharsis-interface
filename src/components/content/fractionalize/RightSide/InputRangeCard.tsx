import React, {useState} from 'react';
import style from "../style.module.scss";
import Slider from "../../../ui/Slider/Slider";

function InputRangeCard() {
    const [slider, setSlider] = useState<number>(50)
    return (
        <div className={style.content_right__input}>
            <div className={style.title}>
                <span>Number of fractions</span>
                <input type="text" value={slider*10} disabled/>
            </div>
            <Slider slider={slider} setSlider={setSlider}/>
        </div>
    );
}

export default InputRangeCard;