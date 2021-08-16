import React from 'react';
import style from '../style.module.scss';
import Calendar from './Calendar/Calendar';
import CalendarInputGroup from './CalendarInputGroup';

function RightSide() {
	return (
		<div className={style.content_right}>
			<div className={style.title}>
				<span>Date of auction</span>
			</div>
			<Calendar />
			<CalendarInputGroup />
		</div>
	);
}

export default RightSide;
