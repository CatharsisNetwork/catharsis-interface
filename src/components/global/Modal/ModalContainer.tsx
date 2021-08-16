import React from 'react';
import ReactDOM from 'react-dom';

let modalContainer = document.getElementById('modal-root');

const ModalContainer: React.FC = (props) => {
	if (!modalContainer) {
		modalContainer = document.createElement('div');
		modalContainer.setAttribute('id', 'modal-root');
	}
	return ReactDOM.createPortal(props.children, modalContainer);
};

export default ModalContainer;
