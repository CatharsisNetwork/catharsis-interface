import React from 'react';
import style from "./style.module.scss";

function IntervalBlock({
                           icon,
                           days,
                           hours,
                           minutes,
                           seconds,
                       }: {
    icon: string,
    days: string,
    hours: string,
    minutes: string,
    seconds: string,

}) {
    return (
        <div className={style.interval}>
            <div>
                <img src={icon} alt="icon"/>
            </div>
            <div className={style.interval_time}>
                <div className={style.interval_time__item}>
                    <small>{days}</small>
                    <span>Days</span>

                </div>
                <div className={style.interval_time__item}>
                    <small>{hours}</small>
                    <span>Hours</span>

                </div>
                <div className={style.interval_time__item}>
                    <small>{minutes}</small>
                    <span>Minutes</span>

                </div>
                <div className={style.interval_time__item}>
                    <small>{seconds}</small>
                    <span>Seconds</span>

                </div>
            </div>
        </div>
    );
}

export default IntervalBlock;