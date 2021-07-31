import React from 'react';
import style from "../style.module.scss";
import flame from "../../../../assets/image/fractionalize/flame.png";
import FractionalizeCard from "./FractionalizeCard/FractionalizeCard";

function LeftSide() {
    let content_card: number[] = []
    content_card.length = 10
    content_card.fill(1, 1)
    return (
        <div className={style.content_left}>
            <div className={style.content_left__items}>
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
                        {content_card.map((el, idx) => {
                            return <FractionalizeCard key={idx}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSide;