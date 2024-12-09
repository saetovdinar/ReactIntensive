import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectLogged } from '@app/redux/selectors';
import { signOutUser } from '@app/redux/actions/actionsCreators';
export default function Header() {
	const logged = useSelector(selectLogged);
	const dispatch = useDispatch();

	return (
		<header>
			{logged ? (
				<>
					<div className={styles.wrapLogo}>
						<Link to="/" className={styles.title}>
							Movies
						</Link>
						{/* <div> {user.login}</div> */}
					</div>
					<nav>
						<Link to="/favorites">Избранное</Link>
						<Link to="/history">История поиска</Link>
						<Link
							onClick={() => {
								dispatch(signOutUser());
							}}
							to="/signin"
						>
							Выйти
						</Link>
					</nav>
				</>
			) : (
				<>
					<div className={styles.wrapLogo}>
						<Link to="/" className={styles.title}>
							Movies
						</Link>
					</div>
					<nav>
						<Link to="/signin">Вход</Link>
						<Link to="/signup">Регистрация</Link>
					</nav>
				</>
			)}
		</header>
	);
}
