import style from './style.module.scss';
import React from 'react';
import star from '../../../assets/images/fractionalize/star.png';
import body from '../../../assets/images/fractionalize/body.png';

function HeaderPreviewCard(props) {
	return (
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
	);
}

export default HeaderPreviewCard;
