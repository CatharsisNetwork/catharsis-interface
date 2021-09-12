import React from 'react';
import style from './style.module.scss';
import BuyoutCard from '../BuyoutCard/BuyoutCard';
import CreatedWave from './CreatedWave';

function CreatedCards({ buyout }) {
	return (
		<div className={style.cards}>
			{buyout.map((el, idx) => {
				return (
					<BuyoutCard
						key={idx}
						title={el.title}
						value={el.value}
						image={el.image}
						customStyle={el.customStyle}
					/>
				);
			})}
		</div>
	);
}

export default CreatedCards;
