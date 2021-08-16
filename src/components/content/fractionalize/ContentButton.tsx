import React from 'react';
import style from './style.module.scss';
import { getActiveClassName } from '../../../utils/lib/getActiveClassName';
import { NavLink } from 'react-router-dom';

function ContentButton({
	button,
	img,
	customStyle = '',
	id,
}: {
	button: string,
	img?: string,
	customStyle?: string,
	id: number,
}) {
	return (
		<NavLink to={`fractional/${id}`}>
			{
				<div
					className={getActiveClassName(style, 'button_content', customStyle)}
				>
					<img src={img} alt="button" />
					<span>{button}</span>
				</div>
			}
		</NavLink>
	);
}

export default ContentButton;
