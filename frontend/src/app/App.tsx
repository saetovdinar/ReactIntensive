import style from './App.module.scss';
import CardsList from '@pages/general/GeneralPage';
import { Signin, Signup } from '@pages/authorization';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@shared/ui/Header';
import MovieDetails from '@pages/details/MovieDetails';

function App() {
	return (
		<div className={style.App}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/:id" element={<MovieDetails />} />
					<Route path="/" element={<CardsList />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
