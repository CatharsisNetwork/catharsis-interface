import React from 'react';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store';

interface Props {
	children: React.ReactNode;
}

function getLibrary(provider: any) {
	return new Web3(provider);
}

const store = createStore(rootReducer);

function Providers({ children }: Props) {
	return (
		<Provider store={store}>
			<Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
		</Provider>
	);
}

export default Providers;
