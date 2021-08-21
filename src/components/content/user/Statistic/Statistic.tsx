import React from 'react';
import style from "./style.module.scss";
import Schedule from "../../../ui/Schedule/Schedule";






function Statistic() {
    return (
        <div className={style.statistic}>
            <div className={style.statistic_card}>
                <div className={style.statistic_card__item}>
                    <span>Users</span>
                    <small>122 334</small>
                </div>
                <div className={style.statistic_card__item}>
                    <span>NFT</span>
                    <small>122 334</small>
                </div>
            </div>
            <div className={style.statistic_schedule}>
                <Schedule/>
            </div>
        </div>
    );
}

export default Statistic;