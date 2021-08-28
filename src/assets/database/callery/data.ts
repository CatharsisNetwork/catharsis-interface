import card_content_1 from '../../images/card/card_content_1.png';
import card_content_2 from '../../images/card/card_content_2.png';
import card_content_3 from '../../images/card/card_content_3.png';
import card_content_4 from '../../images/card/card_content_4.png';
import card_content_5 from '../../images/card/card_content_5.png';
import card_content_6 from '../../images/card/card_content_6.png';

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

export type GalleryDataType = {
	dropdown: Array<DropdownType>,
	cards: Array<CardType>,
};
export const data: GalleryDataType = {
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
				img: card_content_3,
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
				img: card_content_4,
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
				img: card_content_6,
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
	],
};
