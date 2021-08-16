import React from 'react';
import style from '../style.module.scss';
import { FooterBtnType } from './CardFooter';
import BoxShadowButton from '../../BoxShadowButton/BoxShadowButton';

function FooterBtn({ button }: { button: FooterBtnType }) {
	return (
		<div className={style[`card_footer__${button.style}`]}>
			<BoxShadowButton shadow={button.style}>
				<button>{button.value}</button>
			</BoxShadowButton>
		</div>
	);
}

export default FooterBtn;
