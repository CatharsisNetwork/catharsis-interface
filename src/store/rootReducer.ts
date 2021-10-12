import { combineReducers } from 'redux';
import { accountReducer } from '../store/account';

const rootReducer = combineReducers({
	account: accountReducer,
});

export { rootReducer };
export type rootReducerType = ReturnType<typeof rootReducer>;
