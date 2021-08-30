import React from 'react';
import style from './style.module.scss';
import ethereum from '../../../assets/images/admin/ethereum.png';
import ethereum_black from '../../../assets/images/admin/ethereum_black.png';
function SoldModal() {
	return (
		<div className={style.modal}>
			<span className={style.modal_title}>Exchange fractions</span>

			<div className={style.modal_balance}>
				<span>Your balance</span>
				<img src={ethereum} alt="ethereum" />
				<small>329302932032904340932</small>
			</div>
			<div className={style.modal_price}>
				<div className={style.ethereum}>
					<img src={ethereum_black} alt="ethereum_black" />
					<span>Your price</span>
				</div>
				<small>MAX</small>
			</div>
			<div className={style.modal_button}>
				<span>Confirm</span>
			</div>
		</div>
	);
}

export default SoldModal;
