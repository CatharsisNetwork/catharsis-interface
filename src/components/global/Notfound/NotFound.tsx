import React from 'react';
import style from './style.module.scss';

const NotFound = () => {
	return (
		<div className={'content'}>
			<div className={style.not_found}>
				<h2 className={style.not_found__text}>
					<span>404 </span>| Not Found
				</h2>
			</div>
		</div>
	);
};

export default NotFound;
