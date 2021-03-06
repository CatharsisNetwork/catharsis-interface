import React from 'react';
import style from '../MyNtf/style.module.scss';
import { notification } from '../../../../assets/database/user/user';
import ProfileCard from '../../../ui/ProfileCard/ProfileCard';
import HeaderBlock from '../CardComponent/HeaderBlock';
import ImageBlock from '../CardComponent/ImageBlock';
import IntervalBlock from '../CardComponent/IntervalBlock';
import FractionsBlock from '../CardComponent/FractionsBlock';
import ShieldBlock from '../CardComponent/ShieldBlock';
import EllipseBlock from '../CardComponent/EllipseBlock';

import FooterTitle from '../CardComponent/FooterTitle';
import FromBlock from '../CardComponent/FromBlock';

const FooterBlock = (el: any) => {
	return (
		<>
			<IntervalBlock
				seconds={el.interval.seconds}
				days={el.interval.days}
				hours={el.interval.hours}
				icon={el.interval.icon}
				minutes={el.interval.minutes}
			/>
			<FractionsBlock
				text_1={el.fractions.button_1.text}
				icon_1={el.fractions.button_1.icon}
				text_2={el.fractions.button_2.text}
				icon_2={el.fractions.button_2.icon}
			/>
			<FromBlock />
			<ShieldBlock
				customStyle={'notification'}
				text_1={el.shield.button_1.text}
				icon_1={el.shield.button_1.icon}
				icon_2={el.shield.button_2.icon}
				text_2={el.shield.button_2.text}
			/>
			<EllipseBlock />
			<FooterTitle />
		</>
	);
};

function Notification() {
	return (
		<div className={style.ntf}>
			{notification.map((el, idx) => {
				return (
					<ProfileCard
						key={idx}
						sold={el.sold}
						header={() => (
							<HeaderBlock title={el.header.title} button={el.header.button} />
						)}
						content={() => <ImageBlock image={el.fractions.image} />}
						footer={() => FooterBlock(el)}
					/>
				);
			})}
		</div>
	);
}

export default Notification;
