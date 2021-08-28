import Approve from './Approve/Approve';
import Statistic from './Statistic/Statistic';
import Token from './Token/Token';
import Swap from './Swap/Swap';
import React from 'react';
import MyNtf from './MyNtf/MyNtf';
import Notification from './Notification/Notification';

export function getProfileUserContent(content: string) {
	switch (content) {
		case 'approve':
			return <Approve />;
		case 'statistic':
			return <Statistic />;
		case 'token':
			return <Token />;
		case 'swap':
			return <Swap />;
		case 'ntf':
			return <MyNtf />;
		case 'notification':
			return <Notification />;

		default:
			return null;
	}
}
