import React from 'react';
import style from './style.module.scss';
import { getClassName } from '../../../../utils/lib/getActiveClassName';
import ellipse_half_blue from '../../../../assets/images/admin/ellipse_half_blue.png';
import ellipse_half_red from '../../../../assets/images/admin/ellipse_half_red.png';

function EllipseBlock() {
	return (
		<div className={style.ellipse}>
			<Ellipse color={'blue'} image={ellipse_half_blue} border={'#334D37'} />
			<Ellipse color={'red'} image={ellipse_half_red} border={'#532623'} />
		</div>
	);
}

function Ellipse({ color, image, border }) {
	return (
		<div
			className={style.ellipse_block}
			style={{
				border: `5px solid ${border}`,
			}}
		>
			<span className={getClassName(style, 'value', color)}>1022</span>
			<img src={image} className={style.ellipse_block_thumb} alt={'icon'} />
		</div>
	);
}

export default EllipseBlock;
