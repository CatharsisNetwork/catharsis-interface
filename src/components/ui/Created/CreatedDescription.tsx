import React from 'react';
import style from './style.module.scss';
const description =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
function CreatedDescription() {
	return (
		<div className={style.description}>
			<span>{description}</span>
		</div>
	);
}

export default CreatedDescription;
