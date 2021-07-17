import React, {useCallback} from 'react';
import Modal from "../components/global/Modal/Modal";


/**
 Custom Hook returns a memoized Modal component and a function to initialize it
 */


type ModalPropsType = {
    children: () => React.ReactNode
    custom_style: string
}

const useModal = ({ children, custom_style = ''}: ModalPropsType) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };
    const ModalComponent = useCallback(
        () => (
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                custom_style={custom_style}
            >
                {children()}
            </Modal>
        ),
        [isOpen]
    );

    return {ModalComponent, onOpen};
};

export {useModal};
