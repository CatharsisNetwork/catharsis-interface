import React from 'react';
import menu_1 from '../../../assets/image/faq/menu_1.svg';
import menu_2 from '../../../assets/image/faq/menu_2.svg';
import style from './style.module.scss';

/**
 The designer did not provide a single menu icon
 */

function Menu() {
	return (
		<div className={style.menu}>
			<img src={menu_2} alt="" />
			<img src={menu_1} alt="" />
			<img src={menu_2} alt="" />
			<img src={menu_1} alt="" />
		</div>
	);
}

export default Menu;
