import { Dispatch, SetStateAction } from 'react';
import { AlertType, initStateType } from '../CalendarInputGroup';

export function setInputValue(
	name: string,
	value: string,
	symbol: string,
	number: number,
	callback: Dispatch<SetStateAction<AlertType>>
) {
	if (name === symbol && Number(value) > number) {
		callback({
			checkNumber: false,
			bol: true,
			message: `Enter a value between 0 and ${number}`,
		});
		return;
	}
	return true;
}

export const checkBlur = (
	name: string,
	symbol: 'minute' | 'hour',
	value: string,
	currentDate: { minute: string, hour: string },
	date: initStateType,
	range: 'from' | 'to',
	callback: Dispatch<SetStateAction<initStateType>>
) => {
	if (!currentDate) return;
	if (name === symbol && currentDate[symbol]?.length === 1) {
		callback({ ...date, [range]: { ...date[range], [symbol]: '0' + value } });
		return;
	}
	if (name === symbol && currentDate[symbol]?.length < 1) {
		callback({ ...date, [range]: { ...date[range], [symbol]: '00' } });
	}
};
