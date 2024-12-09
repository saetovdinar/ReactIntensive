import { store } from '../store';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const selectMessage = (state: RootState) => state.users.message;
const selectUsers = (state: RootState) => state.users.users;
const selectMovies = (state: RootState) => state.movies.movies;
const selectSearch = (state: RootState) => state.movies.search;
const selectLogged = (state: RootState) => state.users.logged;
const selectRegistered = (state: RootState) => state.users.registered;
export {
	selectRegistered,
	selectLogged,
	selectMessage,
	selectUsers,
	selectSearch,
	selectMovies,
	type AppDispatch,
	type RootState
};
