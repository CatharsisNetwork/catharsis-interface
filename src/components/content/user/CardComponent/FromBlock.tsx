import React from 'react';
import style from './style.module.scss';

function FromBlock() {
	return (
		<div className={style.from}>
			<div className={style.from_link}>
				<span>From</span>
				<small>0x6e0e410cd475ee0ba3c64743094c77f..</small>
			</div>
			<div className={style.from_suggest}>
				<span>Suggested</span>
				<small>10 002</small>
			</div>
		</div>
	);
}

export default FromBlock;
