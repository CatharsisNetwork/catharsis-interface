import React from 'react';
import style from '../style.module.scss';
import Interval from './Interval';
import {
	FooterInfoType,
	IntervalType,
} from '../../../../assets/database/callery/data';
import FooterBtn from './FooterBtn';
import CardInfo from './CardInfo';

export type FooterBtnType = {
	value: string,
	style: string,
};

function CardFooter({
	title,
	interval,
	info,
	button,
}: {
	button: FooterBtnType,
	title?: string,
	info?: Array<FooterInfoType>,
	interval?: Array<IntervalType>,
}) {
	return (
		<div
			className={`${style.card_footer} ${style[interval ? 'interval' : '']}`}
		>
			{title ? (
				<div className={style.card_footer__title}>
					<span> {title}</span>
				</div>
			) : null}

			{info ? (
				<div className={style.card_footer__countdown}>
					<CardInfo info={info} />
				</div>
			) : null}

			{interval ? (
				<div className={style.card_footer__countdown}>
					<Interval interval={interval} />
				</div>
			) : null}

			{button ? <FooterBtn button={button} /> : null}
		</div>
	);
}

export default CardFooter;
