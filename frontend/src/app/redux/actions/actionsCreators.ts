import { REG_USER } from './actionsType';
import { userPass, AddUserAction } from '@app/redux/store/types';

export function registerUser(user: userPass): AddUserAction {
	return {
		type: REG_USER,
		payload: user
	};
}
