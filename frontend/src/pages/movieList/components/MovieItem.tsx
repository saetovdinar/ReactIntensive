import { FC } from 'react';
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

type TMovieItem = {
	Poster: string;
	Title: string;
	imdbID: number;
};

const MovieItem: FC<TMovieItem> = ({ Poster, Title, imdbID }) => {
	const navigate = useNavigate();

	const onClick = (imdbID: number) => {
		navigate(`${imdbID}`);
	};

	return (
		<Grid item xs={13} md={1.7} spacing={{ md: 3 }}>
			<Card
				sx={{
					height: '400px',
					backgroundColor: '#c9e9ff'
				}}
			>
				<CardContent
					sx={{
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between'
					}}
				>
					<div>
						<CardMedia
							sx={{
								height: '250px'
							}}
							image={Poster}
						></CardMedia>
						<Typography variant="h6" component="h3">
							{Title}
						</Typography>
					</div>
					<Button onClick={() => onClick(imdbID)}>Подробнее</Button>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default MovieItem;
