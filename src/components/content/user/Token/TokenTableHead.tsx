import React from 'react';
import style from "./style.module.scss";

const head = ["Pool", "Total alms", "Locked", "Unlocked", "Claimed"]


function TokenTableHead() {
    return (
        <div className={style.token_head}>
            {head.map((el, idx) => {
                return <span className={style.token_head__item} key={idx}>{el}</span>
            })}
        </div>
    );
}

export default TokenTableHead;