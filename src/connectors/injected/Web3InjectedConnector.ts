import { InjectedConnector } from '@web3-react/injected-connector';
import { AbstractConnectorArguments } from '@web3-react/types';

export class Web3InjectedConnector extends InjectedConnector {
	constructor({ supportedChainIds }: AbstractConnectorArguments) {
		super({ supportedChainIds: supportedChainIds });
		if (typeof supportedChainIds === 'undefined') {
			return;
		}
	}
}
