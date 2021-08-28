import React from 'react';
import style from './style.module.scss';

type MainPageSectionType = {
	title: () => React.ReactNode,
	cards: () => React.ReactNode,
	footer?: () => React.ReactNode,
	custom?: string,
};

function MainPageSection({
	title,
	cards,
	footer,
	custom,
}: MainPageSectionType) {
	return (
		<div className={'_container'}>
			<div className={style.main_content}>
				<div className={style.main_content__title}>{title()}</div>
				<div className={style.main_content__cards}>{cards()}</div>
				{footer ? (
					<div className={style[`main_content__${custom}`]}>{footer()}</div>
				) : null}
			</div>
		</div>
	);
}

export default MainPageSection;
