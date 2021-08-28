import React, { useEffect } from 'react';
import style from './style.module.scss';
import main_content_vector from '../../../assets/images/main/main_content_vector.png';
import main_content_frame_1 from '../../../assets/images/main/main_content_frame_1.png';
import main_content_frame_2 from '../../../assets/images/main/main_content_frame_2.png';
import main_content_action from '../../../assets/images/main/main_content_action.png';
import main_content_flame from '../../../assets/images/main/main_content_flame.png';
import main_content_voting from '../../../assets/images/main/main_content_voting.png';
import CardsList from '../../ui/Card/CardsList';
import { data } from '../../../assets/database/main/data';
import MainCardsList from './MainCards/MainCardsList';
import { scrollToTop } from '../../../utils/lib/scroll';
import { Link } from 'react-router-dom';
import MainPageHeader from './MainPageHeader';
import MainPageSection from './MainPageSection';
import bg from '../../../assets/images/main/bg_main.png';
import gallery from '../../../assets/images/main/gallery.png';

function MainPage() {
	useEffect(() => scrollToTop(), []);
	return (
		<>
			<div className={'_container'}>
				<div className={'main_bg'}>
					<img src={bg} alt="" />
				</div>
				<section className={style.main_header}>
					<MainPageHeader />
					<div className={style.main_header__bg}>
						<img src={gallery} alt="" />
					</div>
				</section>
			</div>

			<section className={style.position}>
				<MainPageSection
					title={() => <span> Gallery</span>}
					cards={() => <CardsList cards={data.content.cards_content_1} />}
					footer={() => (
						<Link to={'gallery'}>
							<button> Gallery</button>
						</Link>
					)}
					custom={'button'}
				/>
				<img src={main_content_vector} alt="main_content_vector" />
			</section>

			<section className={style.position}>
				<MainPageSection
					title={() => <span> How fractional NFTs works</span>}
					cards={() => <MainCardsList data={data.content.main_cards} />}
					footer={() => (
						<img src={main_content_action} alt="main_content_action" />
					)}
					custom={'action'}
				/>
				<div className={style.position_bg} />
			</section>

			<section className={style.position}>
				<MainPageSection
					title={() => (
						<span>
							<img src={main_content_flame} alt="" /> Auction
						</span>
					)}
					cards={() => <CardsList cards={data.content.cards_content_2} />}
					footer={() => (
						<Link to={'gallery'}>
							<button> Gallery</button>
						</Link>
					)}
					custom={'button'}
				/>
				<div className={style.position_frame}>
					<img src={main_content_frame_1} alt="main_content_frame_1" />
				</div>
				<div className={style.position_frame}>
					<img src={main_content_frame_2} alt="main_content_frame_2" />
				</div>
			</section>

			<section className={style.position}>
				<MainPageSection
					title={() => (
						<span>
							<img src={main_content_voting} alt="" /> Voting
						</span>
					)}
					cards={() => <CardsList cards={data.content.cards_content_3} />}
				/>
			</section>
		</>
	);
}

export default MainPage;
