import React from 'react';
import { useParams } from 'react-router-dom';
import { IParams } from '../../utils/types/types';
import ProfileUser from '../../components/content/user/ProfileUser';

const ProfileUserSlug = () => {
	const { slug }: IParams = useParams();

	return <ProfileUser slug={slug} />;
};

export default ProfileUserSlug;
