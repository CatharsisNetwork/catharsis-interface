import style from '../style.module.scss';
import React from 'react';
import Attention from '../../../../ui/Atention/Attention';

function PriceCardInfoAndAttention() {
	return (
		<>
			<div className={style.info}>
				<p>
					<span> Fixed price:</span> But I must explain to you how all this
					mistaken idea of denouncing pleasure and praising pain
				</p>
				<p>
					<span> Fair distribution auction:</span> But I must explain to you how
					all this mistaken idea of denouncing pleasure and praising pain
				</p>
			</div>
			<Attention />
		</>
	);
}

export default PriceCardInfoAndAttention;
