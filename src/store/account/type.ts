export const SET_ACCOUNT = 'SET_ACCOUNT';
export const SIGN_UP = 'SIGN_UP';

export interface StoreAccountState {
	currentAccountAddress: string | undefined;
	modalConnect: boolean;
}
