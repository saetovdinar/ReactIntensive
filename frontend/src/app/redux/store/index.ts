import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer, movieReducer } from '@app/redux/reducers';

const rootReducer = combineReducers({
	users: userReducer,
	movies: movieReducer,

});

const getMovies = (store) => (dispatch) => (action) => {
	dispatch(action);
};

const middlewareCalled = applyMiddleware(getMovies);

export const store = createStore(rootReducer, {}, middlewareCalled);
