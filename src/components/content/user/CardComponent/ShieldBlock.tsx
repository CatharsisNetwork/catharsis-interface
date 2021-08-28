import React from 'react';
import style from './style.module.scss';

function ShieldBlock({
	children,
	icon_1,
	text_1,
	icon_2,
	text_2,
}: {
	children?: React.ReactNode,
	icon_1: string,
	text_1: string,
	icon_2: string,
	text_2: string,
}) {
	return (
		<div className={style.shield}>
			<div
				className={style.shield_button}
				style={{
					background:
						' linear-gradient(103.4deg, #4DB2DD -3.52%, #1CC980 86.25%)',
				}}
			>
				<img src={icon_1} alt="icon" />
				<span>{text_1}</span>
			</div>
			<div
				className={style.shield_button}
				style={{
					background: 'linear-gradient(99.08deg, #CA00AF 9.3%, #E56A35 93.13%)',
				}}
			>
				<img src={icon_2} alt="icon" />
				<span>{text_2}</span>
			</div>
			{children ? children : null}
		</div>
	);
}

export default ShieldBlock;
