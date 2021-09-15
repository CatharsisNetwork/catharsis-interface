import React from 'react';
import style from './style.module.scss';
import ProfileCard from './ProfileCard';
import HeaderBlock from '../../content/user/CardComponent/HeaderBlock';
import ShieldBlock from '../../content/user/CardComponent/ShieldBlock';
import shield from '../../../assets/images/admin/shield.png';
import shield_slash from '../../../assets/images/admin/shield_slash.png';
import bg from '../../../assets/images/admin/bg.png';
import HeaderPreviewCard from '../HeaderPreviewCard/HeaderPreviewCard';
import BuyoutCard from '../BuyoutCard/BuyoutCard';

import close from '../../../assets/images/admin/close.png';

import { useCloseModalContext } from '../../../hooks/useCloseModalContext';
const description =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
	'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
	'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

const buyout = [
	{
		title: 'Price',
		value: 'Fixed price',
		image: null,
		customStyle: 'approve_modal',
	},
	{
		title: 'Number of fractions',
		value: '1000',
		image: null,
		customStyle: 'approve_modal',
	},
];

function ApproveCardModal() {
	const onClose = useCloseModalContext();
	return (
		<div className={style.approve}>
			<div className={style.approve_left}>
				<ProfileCard
					header={() => (
						<HeaderBlock button={'1 NFT'} title={'Here comes the squad'} />
					)}
					footer={() => (
						<ShieldBlock
							customStyle={'approve'}
							text_1={'Approve'}
							icon_1={shield}
							icon_2={shield_slash}
							text_2={'Decline'}
						>
							<img src={bg} alt="footer" />
						</ShieldBlock>
					)}
				/>
			</div>
			<div className={style.approve_right}>
				<div className={style.close} onClick={onClose}>
					<img src={close} alt="close" />
				</div>
				<HeaderPreviewCard />
				<div className={style.description}>
					<p>{description}</p>
				</div>
				<div className={style.cards}>
					{buyout.map((el, idx) => {
						return (
							<BuyoutCard
								key={idx}
								title={el.title}
								value={el.value}
								image={el.image}
								customStyle={el.customStyle}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ApproveCardModal;
