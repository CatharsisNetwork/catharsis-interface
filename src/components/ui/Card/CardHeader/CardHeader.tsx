import React from 'react';
import style from '../style.module.scss';
import HeaderBtn from './HeaderBtn';
import StarAndFlameBlock from './StarAndFlameBlock';

type CardHeaderType = {
	title: string,
	amount: string,
	star?: {
		icon: string,
		title: string,
	},
	flame?: {
		icon: string,
		title: string,
	},
};

function CardHeader({ title, amount, star, flame }: CardHeaderType) {
	return (
		<div className={style.card_header}>
			<div>
				<div className={style.card_header__title}>
					<span>{title}</span>
				</div>
				<HeaderBtn value={amount} />
			</div>
			<StarAndFlameBlock star={star} flame={flame} />
		</div>
	);
}

export default CardHeader;
