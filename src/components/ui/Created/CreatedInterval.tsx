import React from 'react';
import style from './style.module.scss';
import Interval from '../Interval/Interval';
const interval = [
	{ value: 0, period: 'Days' },
	{ value: 19, period: 'Hours' },
	{ value: 56, period: 'Minutes' },
	{ value: 13, period: 'Seconds' },
];
function CreatedInterval() {
	return (
		<div className={style.interval}>
			<div className={style.interval_title}>
				<span>Auction ends in 2,524 blocks</span>
			</div>

			<div className={style.interval_time}>
				<Interval interval={interval} />
			</div>
		</div>
	);
}

export default CreatedInterval;
