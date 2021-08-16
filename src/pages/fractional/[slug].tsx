import React from 'react';
import { useParams } from 'react-router-dom';
import { IParams } from '../../utils/types/types';
import FractionalizeSlug from '../../components/content/fractionalize/FractionalizeSlug';

const Fractional = () => {
	const { slug }: IParams = useParams();

	return <FractionalizeSlug slug={slug} />;
};

export default Fractional;
