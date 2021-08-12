import React, { Dispatch, SetStateAction } from 'react';
import style from './style.module.scss';

function Slider({
	slider,
	setSlider,
	customStyle,
}: {
	slider: number,
	setSlider: Dispatch<SetStateAction<number>>,
	customStyle?: string,
}) {
	const getTooltipValue = (customStyle?: string) => {
		if (!customStyle) return slider * 10;
		return slider;
	};

	function getGradient(customStyle?: string) {
		if (customStyle === 'auction_buyout') {
			return (slider + 25) * 2;
		}
		return slider;
	}

	return (
		<div
			className={`${style[customStyle ? customStyle : '']} ${
				style.range_container
			}`}
		>
			<input
				type="range"
				min={customStyle === 'auction_buyout' ? '-25' : ''}
				max={customStyle === 'auction_buyout' ? '25' : '100'}
				value={slider}
				className={style.slider}
				onChange={(e) => setSlider(Number(e.target.value))}
				style={{
					background: `linear-gradient(to right, #5469D4 0%, #5469D4 ${getGradient(
						customStyle
					)}%, #fff ${getGradient(customStyle)}%, white 100%)`,
				}}
			/>

			<div className={style.range_container__thumb}>
				<span
					className={style.slider_input}
					style={{ left: `${getGradient(customStyle) - 4}%` }}
				>
					{getTooltipValue(customStyle)}
					{customStyle === 'auction_buyout' ? '%' : ''}
				</span>
			</div>
		</div>
	);
}

export default Slider;
