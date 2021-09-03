import { InjectedConnector } from '@web3-react/injected-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

export const injected = new InjectedConnector({
	supportedChainIds: [1, 4],
});

export const walletconnect = new WalletConnectConnector({
	rpc: { 1: '[1, 4]' },
	bridge: 'https://bridge.walletconnect.org',
	qrcode: true,
	pollingInterval: 15000,
});

export const portis = new PortisConnector({
	dAppId: '4696640e-8ccd-467b-a996-3d7fb10141cc' ?? '',
	networks: [1],
});