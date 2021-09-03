export enum ConnectorNames {
	Injected = 'injected',
	WalletConnect = 'walletconnect',
	Portis = 'portis',
}

export type Login = (connectorId: ConnectorNames) => Promise<void>;

export enum WalletShowOn {
	Anywhere = 'anywhere',
	Mobile = 'mobile',
	Desktop = 'desktop',
}
export interface WalletsConfig {
	title: string;
	icon: string;
	bg: string;
	connectorId: ConnectorNames | null;
	showOn?: WalletShowOn;
}
