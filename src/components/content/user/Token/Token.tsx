import React from 'react';
import style from './style.module.scss';
import TokenTableHead from './TokenTableHead';
import TokenTableRow from './TokenTableRow';
import { tokenData } from '../../../../assets/database/user/tokenData';
import useWindowSize from '../../../../hooks/useWindowSize';
import TokenCard from './TokenCard';

function Token() {
	const { width } = useWindowSize();
	return (
		<div className={style.token}>
			{width && width > 865 ? <TokenTableHead /> : null}
			{tokenData.map((el, idx) => {
				return width && width > 865 ? (
					<TokenTableRow key={idx} content={el} />
				) : (
					<TokenCard key={idx} content={el} />
				);
			})}
		</div>
	);
}

export default Token;
