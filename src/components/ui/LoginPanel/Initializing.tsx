import React from 'react';
import style from './style.module.scss';
import initializing_1 from '../../../assets/images/header/initializing_1.png';
import initializing_2 from '../../../assets/images/header/initializing_2.png';

function Initializing() {
	return (
		<div className={style.initializing}>
			<img src={initializing_1} alt="initializing" />
			<img src={initializing_2} alt="initializing" />
		</div>
	);
}

export default Initializing;
