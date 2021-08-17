import React from 'react';
import style from './style.module.scss';
import Farm from '../farm/Farm';

function FractionalizeSlug({ slug }: { slug: string }) {
	function getFractionalizeContent() {
		if (slug === '4') return <Farm />;
	}

	return (
		<div className={'content'}>
			<div className={style.fractional}>{getFractionalizeContent()}</div>
		</div>
	);
}

export default FractionalizeSlug;
