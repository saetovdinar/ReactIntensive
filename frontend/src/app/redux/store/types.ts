export interface userPass {
	login: string;
	password: string;
}

export interface AddUserAction {
	type: string;
	payload: userPass;
}

export interface initStateUser {
	users: userPass[];
	message: null | string;
}
