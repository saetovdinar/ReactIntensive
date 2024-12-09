import {
	REG_USER,
	ADD_MOVIES,
	INPUT_SEARCH,
	SIGN_OUT,
	SIGNIN_USER
} from './actionsType';
import { userPass, AddUserAction, movieProps } from '@app/redux/store/types';

//auth
function registerUser(user: userPass): AddUserAction {
	return {
		type: REG_USER,
		payload: user
	};
}
function signinUser(user: userPass): AddUserAction {
	return {
		type: SIGNIN_USER,
		payload: user
	};
}

function signOutUser(): any {
	return {
		type: SIGN_OUT
	};
}
//movies

function addMovies(movies: movieProps[]): any {
	return {
		type: ADD_MOVIES,
		payload: movies
	};
}

//search

function searchChange(value: string): any {
	return {
		type: INPUT_SEARCH,
		payload: value
	};
}


export {
	signinUser,
	searchChange,
	signOutUser,
	addMovies,
	registerUser,
};
