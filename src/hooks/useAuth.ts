import { useWeb3React } from '@web3-react/core';
import { ConnectorNames } from './types';
import { useCallback } from 'react';
import { getConnectorsByName } from '../utils/web3React';
import { storageConnectorKey } from '../config/config';

const useAuth = () => {
	const { activate, deactivate } = useWeb3React();
	const defaultConnectorKey = () =>
		window.localStorage.getItem(storageConnectorKey) || ConnectorNames.Injected;
	const login = useCallback(
		// offIndicate for eager connect
		async (connectorID: ConnectorNames | string = defaultConnectorKey()) => {
			try {
				const { connector } = getConnectorsByName(connectorID);
				if (connector) {
					await activate(connector, async (error) => {
						throw new Error(error.message); // console.log(error.message || error );
					});
				} else {
					throw new Error('Connector is Failed'); //console.info();
				}
			} catch (error) {
				//	console.log(error);
			} finally {
				// toggleLoadConnection(false)
			}
		},
		[activate]
	);
	const logout = useCallback(() => {
		deactivate();
		window.localStorage.removeItem(storageConnectorKey);
	}, [deactivate]);
	return { login, logout };
};

export default useAuth;
