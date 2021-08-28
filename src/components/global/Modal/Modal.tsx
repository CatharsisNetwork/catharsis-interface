import React from 'react';
import ModalContainer from './ModalContainer';
import style from './Modal.module.scss';
import close from '../../../assets/images/header/close.png';
import { IModalProps } from '../../../utils/types/types';

/**
 The component is a wrapper for reuse elsewhere , accepts custom styles for customization.
 Used in Header at screen width 990px.
 */

const Modal: React.FC<IModalProps> = (props) => {
	const { custom_style, isOpen, children, onClose } = props;

	if (!isOpen) return null;

	return (
		<ModalContainer>
			<div className={style.root} onClick={onClose}>
				<div
					className={`${style[`${custom_style}`]} ${
						style[`${custom_style}__container`]
					}`}
					onClick={(event) => event.stopPropagation()}
				>
					{children}
					<img
						className={style.close}
						src={close}
						alt="close"
						onClick={onClose}
					/>
				</div>
			</div>
		</ModalContainer>
	);
};

export default Modal;
