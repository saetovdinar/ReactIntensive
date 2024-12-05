type user = {
	login: string;
	password: string;
};

export function getUsers(): user[] {
	const users = localStorage.getItem('users');
	return users ? JSON.parse(users) : [];
}

export function saveUsers(users: user[]): void {
	localStorage.setItem('users', JSON.stringify(users));
}

export function addUser(user: user): void {
	const users = getUsers();
	users.push(user);
	saveUsers(users);
}

export function signInUser(user: user): void {
	const users = getUsers();
	const foundUser = users.find(
		(u) => u.login === user.login && u.password === user.password
	);
	if (foundUser) {
		console.log('User authenticated');
	} else {
		console.log('User not authenticated');
	}
}
