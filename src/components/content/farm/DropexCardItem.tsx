import React from 'react';
import style from './style.module.scss';

type ItemType = {
	title: string,
	value: number,
	symbol: string,
	symbol_2: string,
};
type DropexCardItemType = {
	left: ItemType,
	right: ItemType | null,
};

function DropexCardItem({ item }: { item: DropexCardItemType }) {
	return (
		<div className={style.card_body__item}>
			<div className={style.content}>
				<span>{item.left.title}</span>
				<p>
					<small>{item.left.symbol}</small> {item.left.value}{' '}
					<small>{item.left.symbol_2}</small>
				</p>
			</div>
			{item.right ? (
				<div className={style.content}>
					<span>{item.right.title}</span>
					<p>
						<small>{item.right.symbol}</small>
						{item.right.value} <small>{item.right.symbol_2}</small>
					</p>
				</div>
			) : null}
		</div>
	);
}

export default DropexCardItem;
