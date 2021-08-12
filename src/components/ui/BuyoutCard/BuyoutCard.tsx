import React from 'react';
import style from './style.module.scss';

function BuyoutCard({
	title,
	value,
	customStyle,
	image,
}: {
	title: string,
	value: number | string,
	customStyle?: string,
	image: string | null,
}) {
	return (
		<div className={style.item}>
			<span>{title}</span>
			<div className={style.item_content}>
				{image ? <img src={image} alt={'ethereum'} /> : null}
				<span>{value}</span>
			</div>
		</div>
	);
}

export default BuyoutCard;
