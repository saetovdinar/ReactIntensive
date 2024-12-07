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

export interface movieProps {
	Poster: string;
	Title: string;
	Type: string;
	Year: string;
	imdbID: string;
}
export interface initStateMovie {
	movies: movieProps[];
	search: string;
}
