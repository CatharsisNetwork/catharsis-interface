import React from 'react';
import style from './style.module.scss';

import Sold from './Sold';
import { useModal } from '../../../hooks/useModal';

type ProfileCardType = {
	header: () => React.ReactNode,
	footer?: () => React.ReactNode,
	content?: () => React.ReactNode,
	sold?: string,
};

function ProfileCard({ header, footer, content, sold }: ProfileCardType) {
	return (
		<div className={style.card}>
			<div className={style.card_header}>{header()}</div>
			{content ? <div className={style.card_content}>{content()}</div> : null}

			{footer ? <div className={style.card_footer}>{footer()}</div> : null}

			{sold ? <Sold /> : null}
		</div>
	);
}

export default ProfileCard;
