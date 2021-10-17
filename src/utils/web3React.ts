import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { ConnectorNames } from './../hooks/types';
import { PortisConnector } from '@web3-react/portis-connector';
import Web3 from 'web3';
import { Web3InjectedConnector } from '../connectors/injected/Web3InjectedConnector';

export const getConnectorsByName = (connectorID: ConnectorNames | string) => {
	const injected = new Web3InjectedConnector({ supportedChainIds: [1, 4] });
	const portis = new PortisConnector({
		dAppId: '4696640e-8ccd-467b-a996-3d7fb10141cc',
		networks: [1],
	});
	const walletconnect = new WalletConnectConnector({
		rpc: {
			[1]: 'https://mainnet.infura.io/v3/84842078b09946638c03157f83405213',
		},
		bridge: 'https://bridge.walletconnect.org',
		qrcode: true,
		pollingInterval: 15000,
	});

	const connectorsByName = {
		[ConnectorNames.Injected]: injected,
		[ConnectorNames.WalletConnect]: walletconnect,
		[ConnectorNames.Portis]: portis,
	};
	return { connector: connectorsByName[connectorID] };
};

export const getLibrary = (provider: Web3) => {
	return provider;
};
