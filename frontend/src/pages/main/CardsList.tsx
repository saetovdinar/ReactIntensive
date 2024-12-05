import { Grid } from '@mui/material';
import CardsItem from './CardsItem';
import { useEffect } from 'react';
import { searchMoviesByTitle } from '@shared/api/server/server';

const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12'];

function CardsList() {
	const getApiData = async () => {
		const response = await fetch('').then((response) => response.json());

		console.log(response);
	};

	useEffect(() => {
		searchMoviesByTitle('term').then((response) => {
			console.log(response);
		});
	}, []);

	return (
		<Grid
			sx={{
				marginTop: '1px'
			}}
			container
			spacing={3}
		>
			{arr.map((item: any) => (
				<CardsItem {...item}></CardsItem>
			))}
		</Grid>
	);
}

export default CardsList;
