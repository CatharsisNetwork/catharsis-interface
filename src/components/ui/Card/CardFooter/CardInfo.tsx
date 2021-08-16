import React from 'react';
import style from '../style.module.scss';
import { FooterInfoType } from '../../../../assets/database/callery/data';

function CardInfo({ info }: { info: Array<FooterInfoType> }) {
	return (
		<div className={style.info}>
			{info.map((el, idx) => (
				<CardInfoItem key={idx} info={el} />
			))}
		</div>
	);
}

export default CardInfo;

function CardInfoItem({ info }: { info: FooterInfoType }) {
	return (
		<div className={style[`info_${info.style}`]}>
			<span>{info.value}</span>&nbsp;<span>{info.symbol}</span>
			<p>{info.title}</p>
		</div>
	);
}
