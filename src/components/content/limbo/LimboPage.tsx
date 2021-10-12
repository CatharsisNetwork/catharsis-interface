import React, { useEffect } from 'react';
import style from './style.module.scss';
import { scrollToTop } from '../../../utils/lib/scroll';
import { data } from '../../../assets/database/limbo/data';
import Input from '../../ui/Input/Input';
import Dropdown from '../../ui/Dropdown/Dropdown';
import CardsList from '../../ui/Card/CardsList';
import GalleryTabsGroup from '../gallery/GalleryTabsGroup';

const LimboPage = () => {
	useEffect(() => scrollToTop(), []);
	return (
		<div className={'content'}>
			<div className="_container">
				<div className={style.limbo}>
					<h2 className={style.limbo_title}>
						<span>The Limbo</span>
					</h2>
					<section className={style.limbo_search}>
						<Input />
						<Dropdown dropdown={data.dropdown} />
					</section>
					<section className={style.limbo_tabs}>
						<GalleryTabsGroup />
					</section>
					<section className={style.limbo_cards}>
						<CardsList cards={data.cards} />
					</section>
				</div>
			</div>
		</div>
	);
};

export default LimboPage;
