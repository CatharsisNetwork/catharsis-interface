import React from 'react';
import style from '../style.module.scss';
import {IntervalType} from "../../../../assets/database/callery/data";



const Interval = ({interval}: { interval: Array<IntervalType> }) => {
    return (
        <>
            {interval.map((el, idx) => {
                return (
                    <div key={idx} className={style.interval}>
                        <p>{el.value}</p>
                        <span>{el.period}</span>
                    </div>
                )
            })}
        </>
    );
}

export default Interval;