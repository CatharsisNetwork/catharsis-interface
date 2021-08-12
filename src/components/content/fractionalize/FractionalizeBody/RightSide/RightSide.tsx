import React from 'react';
import style from '../style.module.scss';
import InputRangeCard from './InputRangeCard';
import TokenCard from './TokenCard';
import PriceCard from './PriceCard';
import DescriptionCard from './DescriptionCard';

function RightSide() {
	return (
		<div className={style.content_right}>
			<TokenCard />
			<PriceCard />
			<InputRangeCard />
			<DescriptionCard />
		</div>
	);
}

export default RightSide;
