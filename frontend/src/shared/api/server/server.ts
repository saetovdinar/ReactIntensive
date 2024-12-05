import axios from "axios";


axios.defaults.baseURL = `${process.env.REACT_APP_API}/`;

export  const server = axios.create();


export async function searchMoviesByTitle(title: string) {
    return await server.get(`?apikey=64405bd2&s=${title}`);


}


