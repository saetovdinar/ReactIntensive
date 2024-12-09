import { searchMoviesById } from '@shared/api/server/server';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './movie.details.module.scss';

export default function MovieDetails() {
	const { id } = useParams();
	const [description, setDescription] = useState({
		Title: '',
		Year: '',
		Released: '',
		Actors: '',
		Poster: '',
		Awards: '',
		Metascore: '',
		Plot: '',
		imdbRating: ''
	});

	const {
		Title,
		Year,
		Released,
		Actors,
		Poster,
		Awards,
		Metascore,
		Plot,
		imdbRating
	} = description;

	useEffect(() => {
		searchMoviesById(`${id}`).then((response) => {
			setDescription(response.data);
		});
	}, []);
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				{Title} {Year}
			</div>
			<img className={styles.moviePoster} src={Poster} />
			<div>
				<strong>Released:</strong> {Released}
			</div>
			<div>
				<strong>Actors:</strong> {Actors}
			</div>
			<div>
				<strong>Awards: </strong> {Awards}
			</div>
			<div>
				<strong>Metascore: :</strong> {Metascore}
			</div>
			<div>
				<strong>Plot:</strong> {Plot}
			</div>
			<div>
				<strong>imdbRating:</strong> {imdbRating}
			</div>
		</div>
	);
}
