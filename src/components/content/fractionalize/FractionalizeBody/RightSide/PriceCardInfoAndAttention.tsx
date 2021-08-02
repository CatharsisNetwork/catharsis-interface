import style from "../style.module.scss";
import attention from "../../../../../assets/image/fractionalize/attention.png";
import React from "react";


function PriceCardInfoAndAttention() {
    return (
        <>
            <div className={style.info}>
                <p><span> Fixed price:</span> But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain</p>
                <p><span>  Fair distribution auction:</span> But I must explain to you how all this
                    mistaken idea of denouncing pleasure and praising pain</p>
            </div>

            <div className={style.attention}>
                <img src={attention} alt="attention"/>
                <span>After you applied for fractionalization, it will be manually moderated</span>
            </div>
        </>
    );
}
export default PriceCardInfoAndAttention;