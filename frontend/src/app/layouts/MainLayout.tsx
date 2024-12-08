import AppBar from '@pages/movieList/components/AppBar';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
	return (
		<>
			<AppBar />
			<main className="main">
				<Outlet />
			</main>
		</>
	);
}
