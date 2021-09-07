import React from 'react';
import ellipse_1 from '../../../assets/images/fractionalize/ellipse_1.png';
import ellipse_2 from '../../../assets/images/fractionalize/ellipse_2.png';
import style from './style.module.scss';
function CardIcons() {
	return (
		<div className={style.dropex_icon}>
			<img src={ellipse_1} alt="ellipse_1" />
			<img src={ellipse_2} alt="ellipse_2" />
		</div>
	);
}

export default CardIcons;
