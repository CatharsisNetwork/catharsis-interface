import React, {useCallback} from 'react';
import Modal from "../components/global/Modal/Modal";
import {CloseModalLinkOnClick} from './useCloseModalContext';


/**
 Custom Hook returns a memoized Modal component and a function to initialize it.
 Passing the function to close the modal window through the context when clicking on the link
 */


type ModalPropsType = {
    children: () => React.ReactNode
    custom_style: string
}

const useModal = ({children, custom_style = ''}: ModalPropsType) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };
    const ModalComponent = useCallback(
        () => (
            <CloseModalLinkOnClick.Provider value={onClose}>
                <Modal isOpen={isOpen}
                       onClose={onClose}
                       custom_style={custom_style}>
                    {children()}
                </Modal>
            </CloseModalLinkOnClick.Provider>
        ),
        [isOpen,children,custom_style]
    );

    return {ModalComponent, onOpen};
};

export {useModal};
