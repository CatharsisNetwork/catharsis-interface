import React from 'react';
import style from './style.module.scss';
import caret_down from '../../../assets/images/faq/caret_down.png';
import caret_up from '../../../assets/images/faq/caret_up.png';

function Chevron({ active }: { active: boolean }) {
	return (
		<img
			className={active ? style.icon_down : style.icon_up}
			src={active ? caret_down : caret_up}
			alt={'caret'}
		/>
	);
}

export default Chevron;
