import React, { useState } from 'react';
import style from './style.module.scss';
import { getActiveClassName } from '../../../utils/lib/getActiveClassName';
import bg from '../../../assets/images/fractionalize/bg_fractionalize.png';

function FractionalizeCard({ customStyle }: { customStyle?: string }) {
	const [active, setActive] = useState(false);
	return (
		<div
			className={getActiveClassName(
				style,
				customStyle ? `card_${customStyle}` : 'card',
				active
			)}
			onClick={() => setActive(!active)}
		>
			<img src={bg} alt="bg" />
			<button className={style.card_button}>
				<span>Sea world between fishes</span>
			</button>
		</div>
	);
}

export default FractionalizeCard;
