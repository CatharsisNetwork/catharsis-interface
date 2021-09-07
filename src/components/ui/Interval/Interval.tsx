import React from 'react';
import style from './style.module.scss';
import { IntervalType } from '../../../assets/database/callery/data';

const Interval = ({ interval }: { interval: Array<IntervalType> }) => {
	return (
		<div className={style.interval}>
			{interval.map((el, idx) => {
				return (
					<div key={idx} className={style.interval_item}>
						<p>{el.value}</p>
						<span>{el.period}</span>
					</div>
				);
			})}
		</div>
	);
};

export default Interval;
