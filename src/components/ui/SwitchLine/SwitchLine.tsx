import React, { Dispatch, SetStateAction, useState } from 'react';
import style from './style.module.scss';
import SwitchLineButton from './SwitchLineButtonType';
import { TabsDataType } from '../Tabs/Tabs';

type SwitchLineType = {
	setContent: Dispatch<SetStateAction<string>>,
	tabsData: Array<TabsDataType>,
};

function SwitchLine({ setContent, tabsData }: SwitchLineType) {
	const [width, setWidth] = useState('0');
	const [currentPosition, setCurrentPosition] = useState('left');

	return (
		<div className={style.switch}>
			<div className={style.switch_line}>
				{tabsData.map((el, idx) => {
					return (
						<SwitchLineButton
							currentPosition={currentPosition}
							setCurrentPosition={setCurrentPosition}
							setWidth={setWidth}
							setContent={setContent}
							title={el.title}
							content={el.content}
							key={idx}
							position={el.position ? el.position : ''}
						/>
					);
				})}

				<span className={style.switch_ripple} style={{ width: `${width}` }} />
				<span className={style.switch_thumb} style={{ left: `${width}` }} />
			</div>
		</div>
	);
}

export default SwitchLine;
