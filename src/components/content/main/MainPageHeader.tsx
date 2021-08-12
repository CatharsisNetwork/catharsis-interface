import React from 'react';
import style from './style.module.scss';
import main_content_1 from '../../../assets/image/main/main_content_1.png';

function MainPageHeader() {
	return (
		<>
			<div className={style.main_header__title}>
				<h1>
					<span>Buy, sell and mint</span>
					<br />
					<span>fractional ownership of</span> <p>NFTs</p>
				</h1>
			</div>
			<div className={style.main_header__description}>
				<span>
					Fractional ownership of the world’s most sought after NFTs. Fractional
					unlocks liquidity, reduces entry costs, and allows for synergy with
					other DeFi primitives.
				</span>
			</div>
			<div className={style.main_header__button}>
				<span> Live vaults</span>
			</div>
			<div className={style.main_header__image}>
				<img src={main_content_1} alt="main_content" />
			</div>
		</>
	);
}

export default MainPageHeader;
