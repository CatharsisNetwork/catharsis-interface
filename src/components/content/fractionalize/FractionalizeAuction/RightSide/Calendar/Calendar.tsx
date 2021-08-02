import React, {useEffect, useState} from 'react';
import "./style.scss"
import {calendar} from "./initCalendar";
import left from "../../../../../../assets/image/fractionalize/left.png"
import right from "../../../../../../assets/image/fractionalize/right.png"

const days: Array<string> = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",]

function Calendar() {
    const [isActive, setIsActive] = useState(true)
    useEffect(() => calendar('#calendar'), [])

    function handleClick(e: any) {

        if (e.target.nodeName !== "TD" || e.target.innerHTML === "") return;

        if (e.target.className === 'is-active' && !isActive) {
            e.target.className = '';
            setIsActive(!isActive)
            return;
        }
        if (isActive) {
            e.target.className = 'is-active';
            setIsActive(!isActive)
        }
    }


    return (
        <div id="calendar">
            <div className="calendar_nav">
                <button className="calendar_nav__prev"
                        onClick={() => setIsActive(true)}>
                    <img src={right} alt="left"/>
                </button>
                <div className="calendar_nav__info">
                    <span>Январь 2018</span>
                </div>
                <button className="calendar_nav__next"
                        onClick={() => setIsActive(true)}>
                    <img src={left}
                         alt="left"/>
                </button>
            </div>
            <div className={"calendar_table"} onClick={(e) => handleClick(e)}>
                <table>
                    <thead>
                    <tr>
                        {days.map((el, idx) => <th key={idx}>{el}</th>)}
                    </tr>
                    </thead>
                    <tbody className="calendar_table__dates"/>
                </table>
            </div>
        </div>

    );
}

export default Calendar;