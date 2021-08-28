import React, { useState } from 'react';
import TimeInput from './TimeInput/TimeInput';
import style from '../style.module.scss';
import attention from '../../../../../assets/images/fractionalize/attention.png';

export type AlertType = { bol: boolean, message: string, checkNumber: boolean };

export type Range = {
	hour: string,
	minute: string,
};
export type initStateType = {
	from: Range,
	to: Range,
};

function CalendarInputGroup() {
	const [alert, setAlert] = useState<AlertType>({
		bol: false,
		message: '',
		checkNumber: false,
	});
	const initState = {
		from: { hour: '', minute: '' },
		to: { hour: '', minute: '' },
	};
	const [date, setDate] = useState<initStateType>(initState);

	return (
		<div className={style.input}>
			<div className={style.input_group}>
				<TimeInput
					setAlert={setAlert}
					date={date}
					setDate={setDate}
					range={'from'}
				/>
				<small>to</small>
				<TimeInput
					setAlert={setAlert}
					date={date}
					setDate={setDate}
					range={'to'}
				/>
			</div>

			{alert.bol ? (
				<small className={style.input_alert}>
					<img src={attention} alt="" />
					{alert.checkNumber ? 'Enter a numeric value' : alert.message}
				</small>
			) : null}
		</div>
	);
}

export default CalendarInputGroup;
