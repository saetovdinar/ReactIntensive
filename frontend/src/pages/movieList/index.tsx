import { Grid, Typography } from '@mui/material';
import CardsItem from './components/MovieItem';
import { useEffect, useState } from 'react';
import { searchMoviesByTitle } from '@shared/api/server/server';
import {addMovies, searchChange} from '@app/redux/actions/actionsCreators'
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '@app/redux/store'
import Search from './components/Search';

const DEFAULT_SEARCH = 'terminator';

function CardsList() {
	const dispatch = useDispatch()
	const search = useSelector((state: RootState) => state.movies.search)
	const movies = useSelector((state: RootState) => state.movies.movies)
	
	useEffect(() => {
		searchMoviesByTitle(search || DEFAULT_SEARCH).then((response) => {
			dispatch(addMovies(response.data.Search))
		});
	}, [search]);
	return (
		<>
			<Search value={search} onChange={(e) => dispatch(searchChange(e.target.value))} />
			<Grid
				sx={{
					marginTop: '1px'
				}}
				container
				spacing={3}
			>
				{movies ? (
					movies?.map((item: any) => (
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
		</>
	);
}

export default CardsList;
