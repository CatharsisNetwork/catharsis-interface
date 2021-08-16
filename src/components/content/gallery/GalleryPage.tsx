import React, { useEffect } from 'react';
import style from './style.module.scss';
import { data } from '../../../assets/database/callery/data';
import Input from '../../ui/Input/Input';
import Dropdown from '../../ui/Dropdown/Dropdown';
import CardsList from '../../ui/Card/CardsList';
import GalleryTabsGroup from './GalleryTabsGroup';
import { scrollToTop } from '../../../utils/lib/scroll';

const GalleryPage = () => {
	useEffect(() => scrollToTop(), []);

	return (
		<div className={'content'}>
			<div className="_container">
				<div className={style.gallery}>
					<div className={style.gallery_title}>
						<span>Gallery</span>
					</div>
					<section className={style.gallery_search}>
						<Input />
						<Dropdown dropdown={data.dropdown} />
					</section>
					<section className={style.gallery_tabs}>
						<GalleryTabsGroup />
					</section>
					<section className={style.gallery_cards}>
						<CardsList cards={data.cards} />
					</section>
				</div>
			</div>
		</div>
	);
};

export default GalleryPage;
