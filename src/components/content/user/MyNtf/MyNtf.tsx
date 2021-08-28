import React from 'react';
import style from './style.module.scss';
import { ntf } from '../../../../assets/database/user/user';
import ProfileCard from '../../../ui/ProfileCard/ProfileCard';
import FractionsBlock from '../CardComponent/FractionsBlock';
import HeaderBlock from '../CardComponent/HeaderBlock';
import ImageBlock from '../CardComponent/ImageBlock';

function MyNtf() {
	return (
		<div className={style.ntf}>
			{ntf.map((el, idx) => {
				return (
					<ProfileCard
						key={idx}
						header={() => <HeaderBlock title={el.header.title} />}
						content={() => <ImageBlock image={el.footer.image} />}
						footer={() => (
							<FractionsBlock
								text_1={el.footer.button_1.text}
								icon_1={el.footer.button_1.icon}
								text_2={el.footer.button_2.text}
								icon_2={el.footer.button_2.icon}
							/>
						)}
					/>
				);
			})}
		</div>
	);
}

export default MyNtf;
