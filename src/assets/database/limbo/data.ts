import card_content_1 from '../../images/card/card_content_1.png';
import card_content_2 from '../../images/card/card_content_2.png';
import card_content_5 from '../../images/card/card_content_5.png';
import card_content_7 from '../../images/card/card_content_7.png';
import card_content_8 from '../../images/card/card_content_8.png';
import card_content_9 from '../../images/card/card_content_9.png';
import card_content_10 from '../../images/card/card_content_10.png';
import card_content_11 from '../../images/card/card_content_11.png';
import card_content_12 from '../../images/card/card_content_12.png';

export type IntervalType = {
	value: number,
	period: string,
};
export type FooterInfoType = {
	value: number,
	title: string,
	symbol: string,
	style: string,
};

export type CardType = {
	header: {
		title: string,
		amount: string,
		star?: {
			icon: string,
			title: string,
		},
		flame?: {
			icon: string,
			title: string,
		},
	},
	content: {
		img: string,
	},
	footer: {
		title?: string,
		info?: Array<FooterInfoType>,
		interval?: Array<IntervalType>,
		button: {
			value: string,
			style: string,
		},
	},
};

export type DropdownType = {
	value: string,
};

export type LimboDataType = {
	dropdown: Array<DropdownType>,
	cards: Array<CardType>,
};
export const data: LimboDataType = {
	dropdown: [
		{
			value: 'Ending soon',
		},
		{
			value: 'Ending soon',
		},
		{
			value: 'Ending soon',
		},
		{
			value: 'Ending soon',
		},
	],

	cards: [
		{
			header: {
				title: 'Here comes the squad',
				amount: 'Bundle',
				star: {
					icon: 'star',
					title: 'Fractional panks',
				},
				flame: {
					icon: 'flame',
					title: 'Live auction',
				},
			},

			content: {
				img: card_content_7,
			},
			footer: {
				info: [
					{ value: 12, title: 'Total supply', symbol: 'K', style: 'total' },
					{ value: 1, title: 'Curator fee', symbol: '%', style: 'curator' },
					{ value: 0.2, title: 'Highest Bid', symbol: 'ETH', style: 'bid' },
				],
				button: {
					value: 'View details',
					style: 'mauve',
				},
			},
		},
		{
			header: {
				title: 'Here comes the squad',
				amount: '1 NFT',
				star: {
					icon: 'star',
					title: 'Fractional panks',
				},
			},

			content: {
				img: card_content_2,
			},
			footer: {
				title: 'Auction ends in 2,524 blocks',
				interval: [
					{ value: 0, period: 'Days' },
					{ value: 19, period: 'Hours' },
					{ value: 56, period: 'Minutes' },
					{ value: 13, period: 'Seconds' },
				],
				button: {
					value: 'View details',
					style: 'view',
				},
			},
		},
		{
			header: {
				title: 'Here comes the squad',
				amount: '1 NFT',
				star: {
					icon: 'star',
					title: 'Fractional panks',
				},
			},

			content: {
				img: card_content_5,
			},
			footer: {
				info: [
					{ value: 1555, title: 'Total supply', symbol: 'K', style: 'total' },
					{
						value: 1.55,
						title: 'Curator fee',
						symbol: '%',
						style: 'curator',
					},
					{ value: 0.15, title: 'Highest Bid', symbol: 'ETH', style: 'bid' },
				],
				button: {
					value: 'View details',
					style: 'mauve',
				},
			},
		},
		{
			header: {
				title: 'Here comes the squad',
				amount: '1 NFT',
				star: {
					icon: 'star',
					title: 'Fractional panks',
				},
			},

			content: {
				img: card_content_12,
			},
			footer: {
				title: 'Auction ends in 2,524 blocks',
				interval: [
					{ value: 0, period: 'Days' },
					{ value: 19, period: 'Hours' },
					{ value: 56, period: 'Minutes' },
					{ value: 13, period: 'Seconds' },
				],
				button: {
					value: 'View details',
					style: 'view',
				},
			},
		},
		{
			header: {
				title: 'Here comes the squad',
				amount: '1 NFT',
				star: {
					icon: 'star',
					title: 'Fractional panks',
				},
			},

			content: {
				img: card_content_11,
			},
			footer: {
				title: 'Auction ends in 2,524 blocks',
				interval: [
					{ value: 0, period: 'Days' },
					{ value: 19, period: 'Hours' },
					{ value: 56, period: 'Minutes' },
					{ value: 13, period: 'Seconds' },
				],
				button: {
					value: 'View details',
					style: 'view',
				},
			},
		},
		{
			header: {
				title: 'Here comes the squad',
				amount: 'Bundle',
				star: {
					icon: 'star',
					title: 'Fractional panks',
				},
				flame: {
					icon: 'flame',
					title: 'Live auction',
				},
			},

			content: {
				img: card_content_10,
			},
			footer: {
				info: [
					{ value: 12, title: 'Total supply', symbol: 'K', style: 'total' },
					{ value: 1, title: 'Curator fee', symbol: '%', style: 'curator' },
					{ value: 0.2, title: 'Highest Bid', symbol: 'ETH', style: 'bid' },
				],
				button: {
					value: 'View details',
					style: 'mauve',
				},
			},
		},
		{
			header: {
				title: 'Here comes the squad',
				amount: 'Bundle',
				star: {
					icon: 'star',
					title: 'Fractional panks',
				},
				flame: {
					icon: 'flame',
					title: 'Live auction',
				},
			},

			content: {
				img: card_content_8,
			},
			footer: {
				info: [
					{ value: 12, title: 'Total supply', symbol: 'K', style: 'total' },
					{ value: 1, title: 'Curator fee', symbol: '%', style: 'curator' },
					{ value: 0.2, title: 'Highest Bid', symbol: 'ETH', style: 'bid' },
				],
				button: {
					value: 'View details',
					style: 'mauve',
				},
			},
		},
		{
			header: {
				title: 'Here comes the squad',
				amount: '1 NFT',
				star: {
					icon: 'star',
					title: 'Fractional panks',
				},
			},

			content: {
				img: card_content_1,
			},
			footer: {
				title: 'Auction ends in 2,524 blocks',
				interval: [
					{ value: 0, period: 'Days' },
					{ value: 19, period: 'Hours' },
					{ value: 56, period: 'Minutes' },
					{ value: 13, period: 'Seconds' },
				],
				button: {
					value: 'View details',
					style: 'view',
				},
			},
		},
		{
			header: {
				title: 'Here comes the squad',
				amount: 'Bundle',
				star: {
					icon: 'star',
					title: 'Fractional panks',
				},
				flame: {
					icon: 'flame',
					title: 'Live auction',
				},
			},

			content: {
				img: card_content_9,
			},
			footer: {
				info: [
					{ value: 12, title: 'Total supply', symbol: 'K', style: 'total' },
					{ value: 1, title: 'Curator fee', symbol: '%', style: 'curator' },
					{ value: 0.2, title: 'Highest Bid', symbol: 'ETH', style: 'bid' },
				],
				button: {
					value: 'View details',
					style: 'mauve',
				},
			},
		},
	],
};
