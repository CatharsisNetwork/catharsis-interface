import React from 'react';
import style from './style.module.scss';

function BuyoutCard({
	title,
	value,
	image,
	customStyle,
}: {
	title: string,
	value: number | string,
	customStyle?: string,
	image: string | null,
}) {
	return (
		<div className={`${style[customStyle ? customStyle : '']} ${style.item}`}>
			<span>{title}</span>
			<div className={style.item_content}>
				{image ? <img src={image} alt={'ethereum'} /> : null}
				<small>{value}</small>
			</div>
		</div>
	);
}

export default BuyoutCard;
