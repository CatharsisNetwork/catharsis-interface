import React from 'react';

import CreatedTitle from '../../../../ui/Created/CreatedTitle';
import CreatedDescription from '../../../../ui/Created/CreatedDescription';
import CreatedInterval from '../../../../ui/Created/CreatedInterval';
import CreatedButton from '../../../../ui/Created/CreatedButton';
import CreatedCards from '../../../../ui/Created/CreatedCards';
import ethereum from '../../../../../assets/images/fractionalize/ethereum.png';
import CreatedWave from '../../../../ui/Created/CreatedWave';

const buyout = [
	{
		title: 'Fraction price',
		value: '10 984',
		image: ethereum,
		customStyle: 'fixed',
	},
	{
		title: 'Buyout price',
		value: '12 320',
		image: ethereum,
		customStyle: 'fixed',
	},
];

function Created() {
	return (
		<>
			<CreatedTitle />
			<CreatedWave />
			<CreatedInterval />
			<CreatedDescription />
			<CreatedButton />
			<CreatedCards buyout={buyout} />
		</>
	);
}

export default Created;
