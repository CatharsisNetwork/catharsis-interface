import React from 'react';
import style from './style.module.scss';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

function FractionalizePreview() {
	return (
		<div className={style.content}>
			<LeftSide />
			<RightSide />
		</div>
	);
}

export default FractionalizePreview;
