import React from 'react';
import style from './style.module.scss';

function HeaderBlock({ title, button }: { title?: string, button?: string }) {
	return (
		<div className={style.header}>
			{title ? (
				<div className={style.header_title}>
					<span>{title}</span>
				</div>
			) : null}
			{button ? (
				<div className={style.header_button}>
					<span>{button}</span>
				</div>
			) : null}
		</div>
	);
}

export default HeaderBlock;
