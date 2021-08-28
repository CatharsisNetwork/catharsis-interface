import React from 'react';
import style from '../style.module.scss';
import star from '../../../../assets/images/gallery/star.png';
import flame from '../../../../assets/images/gallery/flame.png';

export type StarAndFlameItemType = {
	value: {
		icon: string,
		title: string,
	},
};

type StarAndFlameType = {
	star?: {
		icon: string,
		title: string,
	},
	flame?: {
		icon: string,
		title: string,
	},
};
const png = {
	star: star,
	flame: flame,
};

function StarAndFlameBlock({ star, flame }: StarAndFlameType) {
	if (!star && !flame) return null;
	return (
		<p className={style.card_header__container}>
			{star ? <StarAndFlameItem value={star} /> : null}
			{flame ? <StarAndFlameItem value={flame} /> : null}
		</p>
	);
}

export default StarAndFlameBlock;

function StarAndFlameItem({ value }: StarAndFlameItemType) {
	return (
		<span className={style[`${value.icon}`]}>
			<img
				src={png[value.icon === 'star' ? 'star' : 'flame']}
				alt={`${value.icon}`}
			/>
			<span>{value.title}</span>
		</span>
	);
}
