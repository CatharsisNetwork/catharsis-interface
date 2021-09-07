import React from 'react';
import style from './style.module.scss';
import wave from '../../../assets/images/fractionalize/wave.png';
function CreatedWave() {
	return (
		<div className={style.wave}>
			<div className={style.wave_icon}>
				<img src={wave} alt="wave" />
			</div>
			<div className={style.wave_title}>
				<p>
					1022 from <small>1200</small>
				</p>
				<span>fractions selled</span>
			</div>
		</div>
	);
}

export default CreatedWave;
