import React from 'react';
import style from '../style.module.scss';
import coin from '../../../../../assets/images/fractionalize/coin.png';
import BuyoutCard from '../../../../ui/BuyoutCard/BuyoutCard';
import ethereum from '../../../../../assets/images/fractionalize/ethereum.png';
import Created from './Created';

function LeftSide() {
	return (
		<div className={style.content_left}>
			<div className={style.content_left__created}>
				<Created />
			</div>
			<div className={style.content_left__button}>
				<BuyoutCard
					title={'Fraction price'}
					value={'10 984'}
					image={ethereum}
					customStyle={'created'}
				/>
				<div className={style.button}>
					<img src={coin} alt="coin" />
					<span>Buy tokens</span>
				</div>
			</div>
		</div>
	);
}

export default LeftSide;
