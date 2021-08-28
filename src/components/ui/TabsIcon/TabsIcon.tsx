import React from 'react';
import circle_half from '../../../assets/images/gallery/circle_half.png';
import circle_half_grey from '../../../assets/images/gallery/circle_half_grey.png';
import trophy_grey from '../../../assets/images/gallery/trophy_grey.png';
import trophy from '../../../assets/images/gallery/trophy.png';
import coin from '../../../assets/images/admin/coin.png';
import coin_grey from '../../../assets/images/admin/coin_grey.png';
import trend from '../../../assets/images/admin/trend.png';
import trend_grey from '../../../assets/images/admin/trend_grey.png';
import waterfalls from '../../../assets/images/admin/waterfalls.png';
import waterfalls_grey from '../../../assets/images/admin/waterfalls_grey.png';
import swap from '../../../assets/images/admin/swap.png';
import swap_grey from '../../../assets/images/admin/swap_grey.png';
import ntf from '../../../assets/images/admin/ntf.png';
import ntf_grey from '../../../assets/images/admin/ntf_grey.png';
import notification from '../../../assets/images/admin/notification.png';
import notification_grey from '../../../assets/images/admin/notification_grey.png';

export type PngType = {
	[key: string]: string,
};
const png: PngType = {
	circle_half,
	circle_half_grey,
	trophy_grey,
	trophy,
	coin,
	swap,
	swap_grey,
	coin_grey,
	trend,
	ntf,
	ntf_grey,
	notification,
	notification_grey,
	trend_grey,
	waterfalls,
	waterfalls_grey,
};

function TabsIcon({
	activeTabs,
	icon,
}: {
	activeTabs: boolean,
	icon?: { active: string, nonactive: string },
}) {
	if (!icon) return null;
	return (
		<img src={png[activeTabs ? icon.active : icon.nonactive]} alt="tabs_icon" />
	);
}

export default TabsIcon;
