import React from 'react';
import DropexCard from './DropexCard';
import style from './style.module.scss';

function DropexCardContent() {
	const dropex = [1, 2, 3];
	return (
		<div className={style.dropex_cards}>
			{dropex.map((el, idx) => {
				return <DropexCard key={idx} />;
			})}
		</div>
	);
}

export default DropexCardContent;
