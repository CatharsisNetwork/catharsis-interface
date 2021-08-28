import React from 'react';
import style from './style.module.scss';
import line from '../../../../assets/images/admin/line.png';
import { TokenDataType } from '../../../../assets/database/user/tokenData';

function TokenCard({ content }: { content: TokenDataType }) {
	return (
		<div className={style.token_card}>
			<span className={style.token_row__title}>
				{content.title}
				<small>{content.description.title}</small>
				<small> {content.description.subtitle}</small>
			</span>

			<div className={style.token_card__item}>
				<div className={style.value}>
					<span>Total alms</span>
					<small>{content.total}</small>
				</div>

				<img src={line} alt="line" />
				<div className={style.value}>
					<span>Locked</span>
					<small>{content.locked}</small>
				</div>
				<img src={line} alt="line" />
				<div className={style.value}>
					<span>Unlocked</span>
					<small>{content.unlocked}</small>
				</div>
			</div>

			<span className={style.token_card__footer}>
				<span>Claimed</span>
				<small>{content.claimed}</small>
			</span>
			<span className={style.token_card__footer}>
				<span>Next unlocked date</span>
				<small>{content.date}</small>
			</span>
		</div>
	);
}

export default TokenCard;
