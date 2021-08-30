import React from 'react';
import style from './style.module.scss';
import { getClassName } from '../../../../utils/lib/getActiveClassName';

function FooterTitle() {
	return (
		<div className={style.footer}>
			<Title color={'blue'} />
			<Title color={'red'} />
		</div>
	);
}

function Title({ color }) {
	return (
		<div className={style.footer_title}>
			<div className={style.footer_title__item}>
				<span className={getClassName(style, 'gradient', color)}>10888</span>
				&nbsp;
				<span>from</span>
				&nbsp;
				<small>12 000</small>
			</div>
			<div className={style.footer_title__item}>
				<span>Voted for </span>
				<span className={getClassName(style, 'gradient', color)}>DECLINE</span>
			</div>
		</div>
	);
}

export default FooterTitle;
