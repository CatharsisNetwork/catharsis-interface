import React, { Dispatch, SetStateAction } from 'react';
import style from './style.module.scss';

type CheckBoxType = {
	setChecked: Dispatch<SetStateAction<boolean>>,
	checked: boolean,
	label: string,
};

function CheckBoxItem({ setChecked, checked, label }: CheckBoxType) {
	return (
		<div
			className={`${style.checkbox_item} ${style[checked ? 'checked' : '']} `}
			onClick={() => {
				if (label === 'Auction') {
					if (checked) return;
					setChecked(checked);
					return;
				}
				if (checked) return;
				setChecked(!checked);
			}}
		>
			<div className={style.switch}>
				<span
					className={`${style.switch_button} 
                              ${style.base}
                              ${style[checked ? 'checked' : '']} `}
				>
					<span className={`${style.switch_button__label} `}>
						<input
							className={style.input}
							type="checkbox"
							aria-label="checkbox"
						/>
						<span
							className={`${style.thumb} ${style[checked ? 'checked' : '']} `}
						/>
					</span>
				</span>
				<span
					className={`${style.ripple} ${style[checked ? 'checked' : '']} `}
				/>
			</div>
			<span
				className={`${style.checkbox_item__label} ${
					style[checked ? 'checked' : '']
				} `}
			>
				{label}
			</span>
		</div>
	);
}

export default CheckBoxItem;
