/* eslint-disable no-case-declarations */
import { initStateUser, AddUserAction } from '@app/redux/store/types';
import { REG_USER, SIGNIN_USER, SIGN_OUT } from '../../actions/actionsType';

const initialState: initStateUser = {
	users: [
		{
			login: 'test@mail.ru',
			password: '123456',
		}
	],
	logged: false,
	registered: false,
	message: null
};

export default function userReducer(
	state = initialState,
	action: AddUserAction
): initStateUser {
	const { login, password } = action.payload || {};
	switch (action.type) {
		case REG_USER:
			if (
				state.users.some(
					(item) => item.login === login && item.password === password
				)
			) {
				return {
					...state,
					registered: true,
					logged: false,
					message: 'already registered'
				};
			}
			return {
				...state,
				users: [...state.users, { login, password }],
				registered: true,
				logged: true,
				message: 'user added'
			};
			case SIGN_OUT:
			return {
				...state,
				registered: true,
				logged: false,
				message: 'user signed out'
			};
		case SIGNIN_USER:
			if (
				state.users.some(
					(item) => item.login === login && item.password === password
				)
			) {
				return {
					...state,
					registered: true,
					logged: true,
					message: 'user signed'
				};
			}
			return {
				...state,
				registered: false,
				logged: false,
				message: 'user arent registred'
			};
		default:
			return {
				...state
			};
	}
}
