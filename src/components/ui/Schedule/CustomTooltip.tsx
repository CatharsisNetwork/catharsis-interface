import React from 'react';
import style from './style.module.scss';
const CustomTooltip = ({ payload }: { payload: any }) => {
	if (payload && payload.length) {
		return (
			<div className={style.tooltip}>
				<p className="desc">{`${payload[0].value}`}</p>
			</div>
		);
	}
	return null;
};

export default CustomTooltip;
