import {Dispatch, SetStateAction} from "react";
import {AlertType} from "../../components/content/fractionalize/FractionalizeAuction/RightSide/CalendarInputGroup";

export function parseNumber(text: string, callback: Dispatch<SetStateAction<AlertType>>, obj: AlertType) {
    if ('' === text) return '';
    let value = Number.parseInt(text);
    if (Number.isNaN(value)) {
        callback(obj)
        return '';
    }
    return value.toString();
}

export function parseString(text: string) {
    if ('' === text) return '';
    return text.replace(/[\d]/g, '');
}