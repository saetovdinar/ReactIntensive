import style from './App.module.scss';
import Search from '@pages/movieList/components/Search';
import CardsList from '@pages/movieList';
import Signin from '@pages/authorization/Signin';
import Signup from '@pages/authorization/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from '@pages/details';

function App() {
	return (
		<div className={style.App}>
			<>
				<BrowserRouter>
					<Routes>
						<Route path="signin" element={<Signin />} />
						<Route path="signup" element={<Signup />} />
						{/* <Route element={<PrivateRoute />}> */}
						<Route path="/:id" element={<Movie />} />
						<Route path="/" element={<CardsList />} />
						{/* </Route> */}
					</Routes>
				</BrowserRouter>
			</>
		</div>
	);
}

export default App;
