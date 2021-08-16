import React from 'react';
import circle_half from '../../../assets/image/gallery/circle_half.png';
import circle_half_grey from '../../../assets/image/gallery/circle_half_grey.png';
import trophy_grey from '../../../assets/image/gallery/trophy_grey.png';
import trophy from '../../../assets/image/gallery/trophy.png';

export type PngType = {
	[key: string]: string,
};
const png: PngType = {
	circle_half,
	circle_half_grey,
	trophy_grey,
	trophy,
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
