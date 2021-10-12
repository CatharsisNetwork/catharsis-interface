import React from 'react';
import { useParams } from 'react-router-dom';
import { IParams } from '../utils/types/types';
import NotFound from '../components/global/Notfound/NotFound';

const generatePage = (name: string) => {
	/* eslint-disable */
	if(name === 'account'){
		const pages = require(`../components/content/user/ProfileUser`).default;
		try{
			return React.createElement(pages || null);
		}catch(err){
			return <NotFound />;
		}
	}
	const pages = require(`../pages/${name}`).default;

	try {
		return React.createElement(pages || null);
	} catch (err) {
		return <NotFound />;
	}
};

function usePageRender() {
	const { page, slug }: IParams = useParams();
	let name = '';
	if (page) {
		name = slug ? `${page}/[slug]` : `${page}`;
	}
	return generatePage(name);
}

export default usePageRender;
