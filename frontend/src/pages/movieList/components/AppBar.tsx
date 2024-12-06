import styles from './AppBar.module.scss';

function AppBar() {
	return (
		<header>
			<div className={styles.wrapLogo}>
				<a className={styles.title} href="/">
					Movies
				</a>
			</div>
			<nav>
				<a href="signin">Вход</a>
				<a href="signup">Регистрация</a>
			</nav>
			{/* <nav>
				<div> Имя учетной записи</div>
				<a href="/favorites">Избранное</a>
			</nav> */}
		</header>
	);
}

export default AppBar;
