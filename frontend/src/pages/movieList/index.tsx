import { Grid, Typography } from '@mui/material';
import CardsItem from './components/MovieItem';
import { useEffect, useState } from 'react';
import { searchMoviesByTitle } from '@shared/api/server/server';
import Film from '@pages/movie';
import Search from './components/Search';
import styles from './styles.module.scss';
import AppBar from './components/AppBar';

const DEFAULT_SEARCH = 'terminator';

function CardsList() {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		searchMoviesByTitle(search || DEFAULT_SEARCH).then((response) => {
			console.log(response.data.Search);
			setData(response.data.Search);
		});
	}, [search]);

	return (
		<div>
			<AppBar></AppBar>
			<Search value={search} onChange={(e) => setSearch(e.target.value)} />
			<Grid
				sx={{
					marginTop: '1px'
				}}
				container
				spacing={3}
			>
				{data ? (
					data.map((item: any) => (
						<CardsItem key={item.Id} {...item}></CardsItem>
					))
				) : (
					<Typography
						align="center"
						sx={{
							width: '100%',
							marginTop: '15px'
						}}
					>
						Результатов не найдено
					</Typography>
				)}
			</Grid>
		</div>
	);
}

export default CardsList;
