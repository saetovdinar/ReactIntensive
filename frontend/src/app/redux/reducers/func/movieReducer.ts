/* eslint-disable no-case-declarations */
import { initStateMovie } from '@app/redux/store/types';
import { ADD_MOVIES, INPUT_SEARCH } from '@app/redux/actions/actionsType';

const initialState: initStateMovie = {
	movies: [],
	search: ''
};

export default function movieReducer(
	state = initialState,
	action: any
): initStateMovie {
	switch (action.type) {
		case ADD_MOVIES:
			return {
				...state,
				movies: action.payload
			};
		case INPUT_SEARCH:
			return {
				...state,
				search: action.payload
			};
		default:
			return {
				...state
			};
	}
}
