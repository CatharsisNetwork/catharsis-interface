import { SET_ACCOUNT, SIGN_UP } from './type';

export function setAccount(currentAddress) {
	return {
		type: SET_ACCOUNT,
		address: currentAddress,
	};
}

export function createAccount(walletAddress: string) {
	return {
		type: SIGN_UP,
		walletAddress: walletAddress,
	};
}
