import React, { memo } from 'react';
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	AreaChart,
	Area,
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import style from './style.module.scss';
import useWindowSize from '../../../hooks/useWindowSize';

const data = [
	{
		name: 'Mon',
		uv: 40,
		pv: 199,
		amt: 124,
	},
	{
		name: 'Tue',
		uv: 30,
		pv: 87,
		amt: 22,
	},
	{
		name: 'Wed',
		uv: 20,
		pv: 166,
		amt: 22,
	},
	{
		name: 'Thu',
		uv: 27,
		pv: 99,
		amt: 20,
	},
	{
		name: 'Fri',
		uv: 18,
		pv: 189,
		amt: 21,
	},
	{
		name: 'Sat',
		uv: 23,
		pv: 50,
		amt: 25,
	},
	{
		name: 'Sun',
		uv: 34,
		pv: 11,
		amt: 21,
	},
];

export const Schedule = () => {
	const { width } = useWindowSize();

	const getValue = (value_1: number, value_2: number) => {
		return width && width > 768 ? value_1 : value_2 ?? 0;
	};
	return (
		<div className={style.chart}>
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					data={data}
					margin={{
						top: 15,
						right: 20,
						bottom: 5,
						left: -10,
					}}
				>
					<defs>
						<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#8858B8" />
							<stop offset="100%" stopColor="rgba(49, 27, 72,0.2)" />
						</linearGradient>
					</defs>
					<XAxis
						dataKey="name"
						axisLine={false}
						tickMargin={15}
						tickSize={getValue(5, 2)}
						tickLine={false}
						fontSize={getValue(20, 14)}
						tick={{ stroke: 'rgba(216, 178, 255, 0.64)', strokeWidth: 0.5 }}
					/>
					<YAxis
						tickCount={5}
						axisLine={false}
						interval={'preserveStart'}
						tickMargin={getValue(15, 5)}
						tickLine={false}
						width={getValue(70, 55)}
						fontSize={getValue(20, 14)}
						tick={{ stroke: 'rgba(216, 178, 255, 0.64)', strokeWidth: 0.5 }}
					/>
					<CartesianGrid
						strokeDasharray="10 15"
						vertical={false}
						height={2}
						stroke={'#343434'}
					/>
					<Tooltip
						offset={-27}
						content={<CustomTooltip payload={data} />}
						cursor={{ stroke: '#343434', strokeWidth: 1.5 }}
					/>
					<Area
						type="monotone"
						dataKey="pv"
						stroke="#D8B2FF"
						fillOpacity={1}
						fill="url(#colorPv)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};
export default memo(Schedule);
