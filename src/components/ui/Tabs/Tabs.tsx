import React, { useState} from 'react';
import circle_half from "../../../assets/image/gallery/circle_half.png";
import circle_half_grey from "../../../assets/image/gallery/circle_half_grey.png";
import trophy_grey from "../../../assets/image/gallery/trophy_grey.png";
import trophy from "../../../assets/image/gallery/trophy.png";
import style from './style.module.scss';

const png = {
    circle_half,
    circle_half_grey,
    trophy_grey,
    trophy
}


function Tabs() {
    const [activeTabs, setActiveTabs] = useState<boolean>(false)
    return (
        <>
            <div className={style.tabs_button}>
                <button className={`${style.fractional} ${style[activeTabs ? "active" : ""]}`}
                        onClick={() => {
                            if (activeTabs) return;
                            setActiveTabs(!activeTabs)
                        }
                        }>
                    <img src={png[activeTabs ? "circle_half" : "circle_half_grey"]} alt="circle_half"/>
                    <span>Fractionalized</span>
                </button>
                <button className={`${style.fractional} ${style[!activeTabs ? "active" : ""]}`}
                        onClick={() => {
                            if (!activeTabs) return;
                            setActiveTabs(!activeTabs)
                        }
                        }>
                    <img src={png[activeTabs ? "trophy_grey" : "trophy"]} alt="trophy"/>
                    <span>Auction</span>
                </button>
            </div>
            <div className={style.tabs_line}>
                <span style={{left: !activeTabs ? "50%" : "0"}}/>
            </div>
        </>
    );
}

export default Tabs;