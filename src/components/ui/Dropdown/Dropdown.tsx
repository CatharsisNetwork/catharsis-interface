import React, { useState } from 'react';
import style from './style.module.scss';
import Chevron from '../Chevron/Chevron';
import Popup from './Popup';
import { DropdownType } from '../../../assets/database/callery/data';

function Dropdown({ dropdown }: { dropdown: Array<DropdownType> }) {
	const [activeChevron, setActiveChevron] = useState<boolean>(false);
	return (
		<div className={style.search_dropdown}>
			<div className={style.sort}>Sort by:</div>
			<div className={style.value}>Ending soon</div>
			<button onClick={() => setActiveChevron(!activeChevron)}>
				<Chevron active={activeChevron} />
			</button>
			<Popup active={activeChevron} dropdown={dropdown} />
		</div>
	);
}

export default Dropdown;
