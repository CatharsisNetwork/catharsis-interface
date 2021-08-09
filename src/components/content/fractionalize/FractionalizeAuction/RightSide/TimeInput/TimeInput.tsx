import React, {Dispatch, SetStateAction} from 'react';
import {InputChange} from "../../../../../../utils/types/types";
import style from "./style.module.scss"
import {parseNumber} from "../../../../../../utils/lib/parseNumber";
import {AlertType, initStateType} from "../CalendarInputGroup";
import {checkBlur, setInputValue} from "./handleInput";


function TimeInput({setAlert, date, setDate, range}: {
    setAlert: Dispatch<SetStateAction<AlertType>>,
    setDate: Dispatch<SetStateAction<initStateType>>,
    date: initStateType,
    range: "from" | "to"
}) {
    let currentDate = {hour: "00", minute: "00"}

    range === "from" ? currentDate = date["from"] : currentDate = date["to"]


    const handleChangeInput = (e: InputChange) => {
        let {name, value, id}: { name: string | number, value: string | number, id: string } = e.target
        if (value.length > 2) return;

        //reset alert
        setAlert({bol: false, message: "", checkNumber: false})

        //checking the correctness of the hour , to[hour] > from[hour]
        if (value.length > 1 && id === "hour" && range === "to" && Number(value) < Number(date["from"].hour)) {
            setAlert({checkNumber: false, bol: true, message: "Try increasing the value"})
        }
        //check digit input
        value = parseNumber(value, setAlert, {checkNumber: true, bol: true, message: "Enter a numeric value"})

        //from[hour] cannot be more than 23,to[hour] more than 24, from[minutes] more than 59
        if (!setInputValue(name, value, 'hour', range === "from" ? 23 : 24, setAlert)) return;

        let number = 59
        if (range === "to" && date["to"].hour === "24") {
            setAlert({checkNumber: true, bol: true, message: "Try changing the values"})
            return
        }
        if (!setInputValue(name, value, 'minute', number, setAlert)) return;

        //changing value after all input checks

        setDate({...date, [range]: {...date[range], [name]: value}})

    }

    const handleChangeBlur = (e: InputChange) => {
        // if (e.target.id !== ("minute" || "hour")) return;
        let {name, value} = e.target

        //if the value is not set when the focus is lost, the value is set "00"
        checkBlur(name, "hour", value, currentDate, date, range, setDate)
        checkBlur(name, "minute", value, currentDate, date, range, setDate)

    }


    const handleFocus = (e: InputChange) => {
        e.preventDefault()
        let {name, value, id} = e.target

        // If the value already exists and the user wants to change it, the value is reset to zero.

        const _changeValue = (symbol: "from" | "to", time: "minute" | "hour") => {
            if (range === symbol && id === time) {
                setDate({...date, [symbol]: {...date[symbol], [time]: ""}})
            }
        }
        _changeValue("from", "hour")
        _changeValue("from", "minute")
        _changeValue("to", "hour")
        _changeValue("to", "minute")


        // //if the value "from" is not set or value "to":[hours], the values "from" are automatically set from: {hour:"00" minutes:"00"}, to:{hour:"00 ...
        // function _setZero(symbol: "from" | "to", time: "minute" | "hour") {
        //     if (date[symbol][time] === "") {
        //         setDate({...date, [symbol]: {...date[symbol], [time]: "00"}})
        //     }
        // }

        // function _setZeroValues(from?: string) {
        //
        //     if (from && date["from"]["hour"] === "") {
        //         setDate({...date, ["from"]: {...date["from"], hour: "00"}})
        //         return;
        //     }
        //
        //     if (date["from"]["hour"] === "" && date["from"]["minute"] === "") {
        //         setDate({...date, ["from"]: {hour: "00", minute: "00"}})
        //     }
        //     if (date["from"]["hour"] === "" && date["from"]["minute"] === "" && date["to"]["hour"] === "") {
        //         setDate({...date, ["from"]: {hour: "00", minute: "00"}, ["to"]: {...date["to"], hour: "00"}})
        //     }
        // }
        //
        // if (range === "to") {
        //     _setZero("from", "minute")
        //     _setZero("from", "hour")
        //     _setZeroValues()
        // }
        // if (range === "from") {
        //     _setZeroValues("from")
        // }

    }


    return (
        <>
            <div className={style.input}>
                <input type="text" value={currentDate.hour}
                       onChange={(e) => handleChangeInput(e)}
                       placeholder={"00"}
                       onBlur={(e) => handleChangeBlur(e)}
                       onFocus={(e) => handleFocus(e)}
                       name="hour"
                       id={"hour"}
                       autoComplete={"off"}

                />:
                <input type="text" value={currentDate.minute}
                       name="minute"
                       id={"minute"}
                       autoComplete={"off"}
                       placeholder={"00"}
                       onFocus={(e) => handleFocus(e)}
                       onChange={(e) => handleChangeInput(e)}
                       onBlur={(e) => handleChangeBlur(e)}
                />

            </div>

        </>

    );
}

export default TimeInput;