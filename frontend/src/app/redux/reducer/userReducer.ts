/* eslint-disable no-case-declarations */
import { initStateUser, AddUserAction } from '@app/redux/store/types';
import { REG_USER } from '../actions/actionsType';

const initialState: initStateUser = {
	users: [
		{
			login: 'test@mail.ru',
			password: '123456'
		}
	],
	message: null
};

export default function userReduser(
	state = initialState,
	action: AddUserAction
): initStateUser {
	switch (action.type) {
		case REG_USER:
			const { login, password } = action.payload;
			if (
				state.users.some(
					(item) => item.login === login && item.password === password
				)
			) {
				return {
					...state,
					message: 'already registered'
				};
			}
			return {
				...state,
				users: [...state.users, { login, password }],
				message: 'user added'
			};
		default:
			return {
				...state

			};
	}
}
