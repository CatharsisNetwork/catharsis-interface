import React from 'react';
import style from '../style.module.scss';
import square_1 from '../../../../../assets/images/fractionalize/square_1.png';
import square_2 from '../../../../../assets/images/fractionalize/square_2.png';
import image from '../../../../../assets/images/fractionalize/image.png';

function RightSide() {
	return (
		<div className={style.content_right}>
			<img src={square_1} alt="square_1" className={style.square_1} />
			<img src={image} alt="square_1" className={style.image} />
			<img src={square_2} alt="square_2" className={style.square_2} />
		</div>
	);
}

export default RightSide;
