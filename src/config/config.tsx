import { isMobile } from 'react-device-detect';
import login_item__1 from '../assets/images/header/login_item__1.png';
import login_item__2 from '../assets/images/header/login_item__2.png';
import login_item__3 from '../assets/images/header/login_item__3.png';
import { ConnectorNames, WalletsConfig } from './types';

const isWeb3Detect = () => {
	const global: any = window; // process.browser && window
	return Boolean(global?.web3);
};

export const storageConnectorKey = 'catharsis_connector';

interface ConnectorArgs {
	browserConnector?: ConnectorNames;
	mobileConnector?: ConnectorNames;
	mobileAlternativeConnector?: ConnectorNames;
}

const connector = (args: ConnectorArgs = {}) => {
	const {
		browserConnector = ConnectorNames.Injected,
		mobileConnector,
		mobileAlternativeConnector = ConnectorNames.WalletConnect,
	} = args;

	const web3 = isWeb3Detect();
	const browser = !isMobile && web3;
	const mobileWithWeb3 = isMobile && web3;
	const mobileWithoutWeb3 = isMobile && !web3;
	if (browser) {
		return browserConnector;
	}
	if (mobileWithWeb3) {
		// can't detect wallet name, for mobile only walletconnect
		// return ConnectorNames.WalletConnect
		return mobileConnector || ConnectorNames.WalletConnect;
	}
	if (mobileWithoutWeb3) {
		return mobileAlternativeConnector;
	}
	return null;
};

// When load isMobile not working, bad init, fix wallets as function

export const wallets = (): WalletsConfig[] => [
	{
		title: 'Metamask',
		icon: login_item__1,
		bg: '#C87B25',
		connectorId: connector({
			mobileConnector: ConnectorNames.Injected,
			browserConnector: ConnectorNames.Injected,
		}),
	},
	{
		title: 'Wallet Connect',
		icon: login_item__2,
		bg: '#1E60C0',
		connectorId: ConnectorNames.WalletConnect,
	},
	{
		title: 'Portis',
		icon: login_item__3,
		bg: '#1C345D',
		connectorId: connector({
			mobileConnector: ConnectorNames.Portis,
			browserConnector: ConnectorNames.Portis,
		}),
	},
];
