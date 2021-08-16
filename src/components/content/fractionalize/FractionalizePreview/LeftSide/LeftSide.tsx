import React from 'react';
import style from '../style.module.scss';
import FractionalizeCard from '../../../../ui/FractionalizeCard/FractionalizeCard';

function LeftSide() {
	return (
		<div className={style.content_left}>
			<FractionalizeCard customStyle={'preview'} />
		</div>
	);
}

export default LeftSide;
