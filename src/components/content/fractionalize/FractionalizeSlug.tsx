import React from 'react';
import style from './style.module.scss';
import FractionalizeFixedPrice from './FractionalizeFixedPrice/FractionalizeFixedPrice';
import FractionalizeDistribution from './FractionalizeDistribution/FractionalizeDistribution';

function FractionalizeSlug({ slug }: { slug: string }) {
	function getFractionalizeContent() {
		if (slug === '4') return <FractionalizeFixedPrice />;
		if (slug === '5') return <FractionalizeDistribution />;
		if (slug === '6') return <FractionalizeFixedPrice />;
	}

	return (
		<div className={'content'}>
			<div className={style.fractional}>{getFractionalizeContent()}</div>
		</div>
	);
}

export default FractionalizeSlug;
