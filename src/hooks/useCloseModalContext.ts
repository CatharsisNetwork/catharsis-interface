import React, { useContext } from 'react';

type ContextProps = () => void;

const defaultValue = () => {
	return null;
};

export const CloseModalLinkOnClick =
	React.createContext<ContextProps>(defaultValue);

export function useCloseModalContext() {
	return useContext(CloseModalLinkOnClick);
}
