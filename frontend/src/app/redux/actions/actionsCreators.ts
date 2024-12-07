import { REG_USER, ADD_MOVIES, INPUT_SEARCH } from './actionsType';
import { userPass, AddUserAction, movieProps } from '@app/redux/store/types';

//auth
export function registerUser(user: userPass): AddUserAction {
	return {
		type: REG_USER,
		payload: user
	};
}

//movies

export function addMovies(movies: movieProps[]): any {
	return {
		type: ADD_MOVIES,
		payload: movies
	};
}

//search 

export function searchChange(value: string): any {
	return {
		type: INPUT_SEARCH,
		payload: value
	};
}
