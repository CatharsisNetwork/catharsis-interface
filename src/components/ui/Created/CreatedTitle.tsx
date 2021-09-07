import React from 'react';
import style from './style.module.scss';
import star from '../../../assets/images/fractionalize/star.png';
import flame from '../../../assets/images/fractionalize/flame.png';

function CreatedTitle() {
	return (
		<div className={style.header}>
			<div className={style.header_subtitle}>
				<span>Created by :</span>
				<small>John Dollins</small>
			</div>
			<div className={style.header_title}>
				<span>Here comes the squad</span>
			</div>
			<div className={style.header_image}>
				<div className={style.header_image__star}>
					<img src={star} alt="star" />
					<span className={style.star}>Fractional panks</span>
				</div>
				<div className={style.header_image__star}>
					<img src={flame} alt="flame" />
					<span className={style.flame}>Live auction</span>
				</div>
			</div>
		</div>
	);
}

export default CreatedTitle;
