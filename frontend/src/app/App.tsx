import style from './App.module.scss';
import Signin from '@pages/authorization/Signin';
import Signup from '@pages/authorization/Signup';

function App() {
	return (
		<div className={style.App}>
			<Signup></Signup>
		</div>
	);
}

export default App;
