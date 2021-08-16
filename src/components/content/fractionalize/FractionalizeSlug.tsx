import React from 'react';
import style from './style.module.scss';
import FractionalizeDropex from './FractionalizeDropex/FractionalizeDropex';

function FractionalizeSlug({ slug }: { slug: string }) {
	function getFractionalizeContent() {
		if (slug === '4') return <FractionalizeDropex />;
	}

	return (
		<div className={'content'}>
			<div className={style.fractional}>{getFractionalizeContent()}</div>
		</div>
	);
}

export default FractionalizeSlug;
