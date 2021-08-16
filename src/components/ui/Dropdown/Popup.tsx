import React from 'react';
import { DropdownType } from '../../../assets/database/callery/data';
import style from './style.module.scss';

function Popup({
	active,
	dropdown,
}: {
	active: boolean,
	dropdown: Array<DropdownType>,
}) {
	return (
		<div className={`${style.popup} ${style[active ? 'active' : '']}`}>
			{dropdown.map((el, idx) => (
				<span key={idx}>{el.value}</span>
			))}
		</div>
	);
}

export default Popup;
