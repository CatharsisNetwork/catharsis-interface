import React from 'react';
import style from '../style.module.scss';

function CardContent({ icon }: { icon: string }) {
	return (
		<div className={style.card_content}>
			<img src={icon} alt="card_content" />
		</div>
	);
}

export default CardContent;
