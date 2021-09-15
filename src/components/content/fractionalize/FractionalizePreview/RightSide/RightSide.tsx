import React from 'react';
import style from '../style.module.scss';
import Attention from '../../../../ui/Atention/Attention';
import BuyoutCard from '../../../../ui/BuyoutCard/BuyoutCard';
import ethereum from '../../../../../assets/images/fractionalize/ethereum.png';
import preview from '../../../../../assets/images/fractionalize/preview.png';

import HeaderPreviewCard from '../../../../ui/HeaderPreviewCard/HeaderPreviewCard';

const buyout = [
	{ title: 'Price', value: 'Fixed', image: null, customStyle: 'preview' },
	{
		title: 'Body’s price',
		value: '10 984',
		image: ethereum,
		customStyle: 'preview',
	},
	{
		title: 'Number of souls',
		value: '1000',
		image: preview,
		customStyle: 'preview',
	},
	{
		title: 'Buyout price',
		value: '10 984',
		image: ethereum,
		customStyle: 'preview',
	},
];
const description =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
	'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
	'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

function RightSide() {
	return (
		<div className={style.content_right}>
			<HeaderPreviewCard />
			<div className={style.description}>
				<p>{description}</p>
			</div>
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
			<Attention customStyle={'preview'} />
		</div>
	);
}

export default RightSide;
