import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer , movieReducer} from '@app/redux/reducer';



const rootReducer = combineReducers({
	users: userReducer,
	movies: movieReducer,
});

const getMovies = (store) => (dispatch) => (action) => {
	console.log(action)
	
	dispatch(action)
	
	
	
}

const middlewareCalled = applyMiddleware(getMovies)

export const store = createStore(rootReducer,{}, middlewareCalled)


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
