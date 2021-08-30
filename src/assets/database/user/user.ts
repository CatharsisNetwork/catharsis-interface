import ethereum from '../../images/admin/ethereum.png';
import bg from '../../images/admin/bg.png';
import { ApproveType } from '../admin/admin';
import shield from '../../images/admin/shield.png';
import shield_slash from '../../images/admin/shield_slash.png';
import clock from '../../images/admin/clock.png';

export const ntf: Array<ApproveType> = [
	{
		header: {
			title: 'Here comes the squad',
			button: '1 NFT',
		},
		footer: {
			button_1: {
				icon: 'Number of fractions',
				text: '1000',
			},
			button_2: {
				icon: ethereum,
				text: '10002',
			},
			image: bg,
		},
	},
	{
		header: {
			title: 'Here comes the squad',
			button: '1 NFT',
		},
		footer: {
			button_1: {
				icon: 'Number of fractions',
				text: '1000',
			},
			button_2: {
				icon: ethereum,
				text: '10002',
			},
			image: bg,
		},
	},
	{
		header: {
			title: 'Here comes the squad',
			button: '1 NFT',
		},
		footer: {
			button_1: {
				icon: 'Number of fractions',
				text: '1000',
			},
			button_2: {
				icon: ethereum,
				text: '10002',
			},
			image: bg,
		},
	},
	{
		header: {
			title: 'Here comes the squad',
			button: '1 NFT',
		},
		footer: {
			button_1: {
				icon: 'Number of fractions',
				text: '1000',
			},
			button_2: {
				icon: ethereum,
				text: '10002',
			},
			image: bg,
		},
	},
	{
		header: {
			title: 'Here comes the squad',
			button: '1 NFT',
		},
		footer: {
			button_1: {
				icon: 'Number of fractions',
				text: '1000',
			},
			button_2: {
				icon: ethereum,
				text: '10002',
			},
			image: bg,
		},
	},
	{
		header: {
			title: 'Here comes the squad',
			button: '1 NFT',
		},
		footer: {
			button_1: {
				icon: 'Number of fractions',
				text: '1000',
			},
			button_2: {
				icon: ethereum,
				text: '10002',
			},
			image: bg,
		},
	},
];

export type NotificationType = {
	sold?: string,
	header: {
		title: string,
		button: string,
	},
	fractions: {
		button_1: {
			icon: string,
			text: string,
		},
		button_2: {
			icon: string,
			text: string,
		},
		image: string,
	},
	shield: {
		button_1: {
			icon: string,
			text: string,
		},
		button_2: {
			icon: string,
			text: string,
		},
		image: string,
	},
	interval: {
		icon: string,
		days: string,
		hours: string,
		minutes: string,
		seconds: string,
	},
};

export const notification: NotificationType[] = [
	{
		header: {
			title: 'Here comes the squad',
			button: '1 NFT',
		},
		fractions: {
			button_1: {
				icon: 'Number of fractions',
				text: '1000',
			},
			button_2: {
				icon: ethereum,
				text: '10002',
			},
			image: bg,
		},
		shield: {
			button_1: {
				icon: shield,
				text: 'Approve',
			},
			button_2: {
				icon: shield_slash,
				text: 'Decline',
			},
			image: bg,
		},
		interval: {
			icon: clock,
			days: '0',
			hours: '0',
			minutes: '0',
			seconds: '0',
		},
	},
	{
		sold: 'sold',
		header: {
			title: 'Here comes the squad',
			button: '1 NFT',
		},
		fractions: {
			button_1: {
				icon: 'Number of fractions',
				text: '1000',
			},
			button_2: {
				icon: ethereum,
				text: '10002',
			},
			image: bg,
		},
		shield: {
			button_1: {
				icon: shield,
				text: 'Approve',
			},
			button_2: {
				icon: shield_slash,
				text: 'Decline',
			},
			image: bg,
		},
		interval: {
			icon: clock,
			days: '0',
			hours: '0',
			minutes: '0',
			seconds: '0',
		},
	},
	{
		header: {
			title: 'Here comes the squad',
			button: '1 NFT',
		},
		fractions: {
			button_1: {
				icon: 'Number of fractions',
				text: '1000',
			},
			button_2: {
				icon: ethereum,
				text: '10002',
			},
			image: bg,
		},
		shield: {
			button_1: {
				icon: shield,
				text: 'Approve',
			},
			button_2: {
				icon: shield_slash,
				text: 'Decline',
			},
			image: bg,
		},
		interval: {
			icon: clock,
			days: '0',
			hours: '0',
			minutes: '0',
			seconds: '0',
		},
	},
];
