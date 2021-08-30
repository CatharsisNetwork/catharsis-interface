import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import {
	adminTabsData,
	tabsData,
} from '../../../assets/database/user/tabsData';
import Tabs from '../../ui/Tabs/Tabs';
import { scrollToTop } from '../../../utils/lib/scroll';
import { getProfileUserContent } from './GetProfileUserContent';

function ProfileUser({ slug }) {
	useEffect(() => scrollToTop(), []);
	const [role, setRole] = useState<string>('user');
	const [content, setContent] = useState<string>(
		role === 'admin' ? 'approve' : 'ntf'
	);
	useEffect(() => {
		setRole(slug);
	}, [slug]);

	return (
		<div className={'content'}>
			<div className={style.admin}>
				<Tabs
					tabsData={role === 'admin' ? adminTabsData : tabsData}
					setContent={setContent}
					customStyle={'admin'}
				/>
				{getProfileUserContent(content)}
			</div>
		</div>
	);
}

export default ProfileUser;
