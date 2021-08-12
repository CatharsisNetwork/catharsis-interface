import React from 'react';
import style from './style.module.scss';
import { MainCardType } from '../../../../assets/database/main/data';

function MainCard({ data }: { data: MainCardType }) {
	return (
		<div className={`${style.card} ${style[data.style]}`}>
			<div className={style.card_image}>
				<img src={data.image_card_1} alt="image_card" />
				<img src={data.image_card_2} alt="image_card" />
			</div>
			<div className={style.card_title}>
				<span dangerouslySetInnerHTML={{ __html: data.title }} />
			</div>
			<div className={style.card_description}>
				<p
					contentEditable="true"
					dangerouslySetInnerHTML={{ __html: data.description }}
				/>
			</div>
		</div>
	);
}

export default MainCard;
