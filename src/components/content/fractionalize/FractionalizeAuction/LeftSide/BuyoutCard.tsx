import React from 'react';
import style from "../style.module.scss";
import ethereum from "../../../../../assets/image/fractionalize/ethereum.png"

function BuyoutCard({title, value}: { title: string, value: number }) {
    return (
        <div className={style.item}>
            <span>{title}</span>
            <div className={style.item_content}>
                <img src={ethereum} alt={ethereum}/>
                <span>{value}</span>
            </div>
        </div>
    );
}

export default BuyoutCard;