import React from 'react';
import avatar from '../../../assets/image/header/avatar.png';
import style from './style.module.scss';

function Avatar() {
	return (
		<span className={style.avatar}>
			<img src={avatar} alt="avatar" />
			<p>Account</p>
		</span>
	);
}

export default Avatar;
