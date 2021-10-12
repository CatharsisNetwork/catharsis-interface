import { SET_ACCOUNT, StoreAccountState } from './type';

//const accountInWeb3 = () => process.browser && window?.ethereum?.selectedAddress
const accountInWeb3 = () => window?.ethereum?.selectedAddress;
const initialState: StoreAccountState = {
	currentAccountAddress: accountInWeb3(),
	modalConnect: false,
};

export const accountReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_ACCOUNT:
			return {
				...state,
				currentAccountAddress: action.address,
			};
		default:
			return state;
	}
};
