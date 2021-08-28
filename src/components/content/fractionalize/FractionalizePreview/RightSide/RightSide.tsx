import React from 'react';
import style from '../style.module.scss';
import Attention from '../../../../ui/Atention/Attention';
import BuyoutCard from '../../../../ui/BuyoutCard/BuyoutCard';
import ethereum from '../../../../../assets/images/fractionalize/ethereum.png';
import preview from '../../../../../assets/images/fractionalize/preview.png';
import body from '../../../../../assets/images/fractionalize/body.png';
import star from '../../../../../assets/images/fractionalize/star.png';

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
			<div className={style.title}>
				<div className={style.title_star}>
					<img src={star} alt="" />
					<span>Fractional panks</span>
				</div>
				<div className={style.title_body}>
					<div className={style.title_body__image}>
						<img src={body} alt="" />
					</div>

					<div className={style.title_body__sea}>
						<span>Sea world between fishes</span>
						<div className={style.created}>
							<span>
								Created by : <p>John Dollins</p>{' '}
							</span>
						</div>
					</div>
				</div>
			</div>
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
