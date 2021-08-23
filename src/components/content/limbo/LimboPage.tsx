import React, {useEffect} from 'react';
import style from './style.module.scss';
import {scrollToTop} from "../../../utils/lib/scroll";

const LimboPage = () => {
	useEffect(() => scrollToTop(), []);
	return (
		<div className={'content'}>
			<div className="_container">
				<div className={style.limbo}>
					<h2 className={style.limbo_title}>
						<span>Gallery</span>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default LimboPage;
