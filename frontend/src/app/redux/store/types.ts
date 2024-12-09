interface userPass {
	login: string;
	password: string;

}

interface AddUserAction {
	type: string;
	payload: userPass;
}

interface initStateUser {
	users: userPass[];
	message: null | string;
	logged: boolean;
	registered: boolean

}

interface movieProps {
	Poster: string;
	Title: string;
	Type: string;
	Year: string;
	imdbID: string;
}
interface initStateMovie {
	movies: movieProps[];
	search: string;
}



export type {
	initStateMovie,
	movieProps,
	initStateUser,
	userPass,
	AddUserAction
};
