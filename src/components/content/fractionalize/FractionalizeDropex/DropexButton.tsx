import React from 'react';
import style from './style.module.scss';

function DropexButton() {
	return (
		<div className={style.dropex_button}>
			<span>Total Value Locked: 15.2M $</span>
			<button>Claim all</button>
		</div>
	);
}

export default DropexButton;
