import style from './App.module.scss';
import Search from 'pages/main/Search';
import CardsList from 'pages/main/CardsList';
import Signin from '../pages/authorization/Signin';
import Signup from '../pages/authorization/Signup';

function App() {
	return (
		<div className={style.App}>
			<Search></Search>
			<CardsList></CardsList>
		</div>
	);
}

export default App;
