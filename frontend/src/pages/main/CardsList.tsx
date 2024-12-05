import { Grid } from '@mui/material';
import CardsItem from './CardsItem';
import { useEffect } from 'react';

const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12'];

function CardsList() {
	const getApiData = async () => {
		const response = await fetch('').then((response) => response.json());

		console.log(response);
	};

	useEffect(() => {
		getApiData();
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
