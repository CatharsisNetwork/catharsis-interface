import React, {Dispatch, SetStateAction, useState} from 'react';
import style from "./style.module.scss";

function Slider({slider, setSlider}: { slider: number, setSlider: Dispatch<SetStateAction<number>> }) {
    return (
        <div className={style.range_container}>
            <input type="range" min="1" max="100" value={slider} className={style.slider}
                   onChange={(e) => setSlider(Number(e.target.value))}
                   style={{background: `linear-gradient(to right, #5469D4 0%, #5469D4 ${slider}%, #fff ${slider}%, white 100%)`}}
            />
            <div className={style.range_container__thumb}>
        <span className={style.slider_input}
              style={{left: `${slider - 4}%`}}>{slider * 10}</span>
            </div>

        </div>
    );
}

export default Slider;