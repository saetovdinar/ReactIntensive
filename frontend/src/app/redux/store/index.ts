import { createStore, combineReducers } from 'redux';
import { userReduser } from '@app/redux/reducer/userReducer';

const rootReducer = combineReducers({
	users: userReduser
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
