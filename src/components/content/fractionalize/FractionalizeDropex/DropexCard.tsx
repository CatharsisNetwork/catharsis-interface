import React, { useState } from 'react';
import style from './style.module.scss';
import CardIcons from './CardIcons';
import flame from '../../../../assets/image/fractionalize/flame.png';
import DropexCardItem from './DropexCardItem';
import Button from '../../../ui/ButtonGroup/Button';

const dropex = {
	item_1: {
		left: {
			title: 'Balance',
			value: 1000,
			symbol: '',
			symbol_2: '',
		},
		right: null,
	},
	item_2: {
		left: {
			title: 'TVL',
			value: 10.6,
			symbol: '$',
			symbol_2: 'M',
		},
		right: {
			title: 'APR',
			value: 45.56,
			symbol: '',
			symbol_2: '%',
		},
	},
};

function DropexCard() {
	const [active, setActive] = useState(false);
	return (
		<div className={style.card}>
			<div className={style.card_title}>
				<div className={style.card_title__image}>
					<CardIcons />
					<span>DPX</span>
				</div>
				<div className={style.card_flame}>
					<img src={flame} alt="flame" />
					<span>2 K</span>
				</div>
			</div>
			<div className={style.card_body}>
				<div className={style.card_body}>
					<DropexCardItem item={dropex.item_1} />
					<DropexCardItem item={dropex.item_2} />
				</div>
			</div>

			<button className={style.card_button}>Stake</button>
		</div>
	);
}

export default DropexCard;
