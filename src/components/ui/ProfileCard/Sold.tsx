import React from 'react';
import style from './style.module.scss';

import { useModal } from '../../../hooks/useModal';
import SoldModal from './SoldModal';

function Sold() {
	const children = () => {
		return <SoldModal />;
	};
	const { ModalComponent, onOpen } = useModal({
		children,
	});
	return (
		<div className={style.card_sold}>
			<span className={style.card_sold__title}>sold</span>
			<div
				className={style.card_sold__button}
				onClick={() => onOpen({ style: 'user_modal' })}
			>
				<span>Exchange Fractions</span>
			</div>
			<ModalComponent />
		</div>
	);
}

export default Sold;
