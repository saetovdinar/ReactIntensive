import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { searchMoviesById } from '@shared/api/server/server';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';

function Movie() {
	const { id } = useParams();
	const [description, setDescription] = useState({
		Title: '',
		Year: '',
		Released: '',
		Actors: '',
		Poster: ''
	});

	const { Title, Year, Released, Actors, Poster } = description;

	useEffect(() => {
		searchMoviesById(`${id}`).then((response) => {
			setDescription(response.data);
		});
	}, []);
	return (
		<Card
			sx={{
				minHeight: '500px'
				//backgroundColor: '#c9e9ff'
			}}
		>
			<CardContent>
				<Typography variant="h6" component="h3">
					{Title} {Year}
				</Typography>
				<Typography variant="h6" component="h3"></Typography>
				<Typography variant="h6" component="h3">
					Released: {Released}
				</Typography>
				<Typography variant="h6" component="h3">
					Actors: {Actors}
				</Typography>
				<img className={styles.moviePoster} src={Poster} />
			</CardContent>
		</Card>
	);
}

export default Movie;
