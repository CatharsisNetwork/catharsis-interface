import React from 'react';
import style from '../style.module.scss';
import coin from '../../../../../assets/images/fractionalize/coin.png';
import BuyoutCard from '../../../../ui/BuyoutCard/BuyoutCard';
import ethereum from '../../../../../assets/images/fractionalize/ethereum.png';
import preview from '../../../../../assets/images/fractionalize/preview.png';
import Created from './Created';
const buyout = [
	{
		title: 'Fraction price',
		value: '10 984',
		image: ethereum,
		customStyle: 'preview',
	},
	{
		title: 'Buyout price',
		value: '12 320',
		image: ethereum,
		customStyle: 'preview',
	},
	{
		title: 'Number of fractions',
		value: '1000',
		image: preview,
		customStyle: 'preview',
	},
];

function LeftSide() {
	return (
		<div className={style.content_left}>
			<div className={style.content_left__created}>
				<Created />
			</div>
			<div className={style.content_left__cards}>
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
			<div className={style.content_left__button}>
				<img src={coin} alt="coin" />
				<span>Buy NFT</span>
			</div>
		</div>
	);
}

export default LeftSide;
