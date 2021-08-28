import React from 'react';
import style from './style.module.scss';

function FractionsBlock({
	icon_1,
	text_1,
	icon_2,
	text_2,
}: {
	icon_1: string,
	text_1: string,
	icon_2: string,
	text_2: string,
}) {
	return (
		<div className={style.fractions}>
			<div className={style.fractions_title}>
				<span>{icon_1}</span>
				<small>{text_1}</small>
			</div>
			<div className={style.fractions_button}>
				<img src={icon_2} alt="icon" />
				<span>{text_2}</span>
			</div>
		</div>
	);
}

export default FractionsBlock;
