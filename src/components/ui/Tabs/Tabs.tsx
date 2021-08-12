import React, { Dispatch, SetStateAction, useState } from 'react';
import style from './style.module.scss';
import TabsButton from './TabsButton';

export type TabsDataType = {
	title: string,
	icon?: { active: string, nonactive: string },
	content: string,
	position?: string,
};

type TabsPropsType = {
	tabsData: Array<TabsDataType>,
	customStyle?: string,
	setContent: Dispatch<SetStateAction<string>>,
};

function Tabs({ tabsData, customStyle, setContent }: TabsPropsType) {
	const [activeTabs, setActiveTabs] = useState<boolean>(true);
	const [tabsId, setTabsId] = useState<number>(1);

	return (
		<div className={style[customStyle ? customStyle : '']}>
			<div className={style.tabs_button}>
				{tabsData.map((el, idx) => {
					return (
						<TabsButton
							activeTabs={activeTabs}
							setActiveTabs={setActiveTabs}
							title={el.title}
							setContent={setContent}
							content={el.content}
							id={idx}
							key={idx}
							setTabsId={setTabsId}
							tabsId={tabsId}
							icon={el.icon}
						/>
					);
				})}
			</div>
			<div className={style.tabs_line}>
				<span
					style={{
						left: `${
							(100 / tabsData.length) * (tabsId + 1) - 100 / tabsData.length
						}%`,
					}}
				/>
			</div>
		</div>
	);
}

export default Tabs;
