import React from 'react';
import style from './style.module.scss';
import attention from '../../../assets/image/fractionalize/attention.png';

function Attention({ customStyle }: { customStyle?: string }) {
	return (
		<div
			className={style[customStyle ? `attention_${customStyle}` : 'attention']}
		>
			<img src={attention} alt="attention" />
			<span>
				After you applied for fractionalization, it will be manually moderated
			</span>
		</div>
	);
}

export default Attention;
