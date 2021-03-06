import React, { useEffect } from 'react';
import style from './style.module.scss';
import DropexButton from './DropexButton';
import DropexCardContent from './DropexCardContent';
import { scrollToTop } from '../../../utils/lib/scroll';

function Farm() {
	useEffect(() => scrollToTop(), []);
	return (
		<div className={'content'}>
			<div className={style.dropex}>
				<div className={style.dropex_title}>
					<span>Earn Yield on Dopex</span>
					<small>
						Supply DPX, DPX-WETH and rDPX-WETH liquidity. Earn DPX & rDPX.
					</small>
				</div>
				<DropexButton />
				<DropexCardContent />
			</div>
		</div>
	);
}

export default Farm;
