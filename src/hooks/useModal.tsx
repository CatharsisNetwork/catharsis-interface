import React, { Dispatch, SetStateAction, useCallback } from 'react';
import Modal from '../components/global/Modal/Modal';
import { CloseModalLinkOnClick } from './useCloseModalContext';

/**
 Custom Hook returns a memoized Modal component and a function to initialize it.
 Passing the function to close the modal window through the context when clicking on the link
 */

type ModalPropsType = {
	children: (element: string) => React.ReactNode,
	setDisplay?: Dispatch<SetStateAction<string>>,
};

const useModal = ({ children, setDisplay }: ModalPropsType) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	const [element, setElement] = React.useState<string>('');
	const [style, setStyle] = React.useState<string>('');

	const onOpen = ({ style, element }: { style: string, element?: string }) => {
		setIsOpen(true);
		setStyle(style);
		if (element) setElement(element);
	};
	const onClose = () => {
		setIsOpen(false);
		if (setDisplay) setDisplay('');
	};
	const ModalComponent = useCallback(
		() => (
			<CloseModalLinkOnClick.Provider value={onClose}>
				<Modal isOpen={isOpen} onClose={onClose} custom_style={style}>
					{children(element)}
				</Modal>
			</CloseModalLinkOnClick.Provider>
		),
		// eslint-disable-next-line
        [isOpen, children, style, element]
	);

	return { ModalComponent, onOpen };
};

export { useModal };
