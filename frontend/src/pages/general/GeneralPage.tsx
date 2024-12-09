import { Grid, Typography } from '@mui/material';
import CardsItem from './ui/MovieItem';
import { useEffect } from 'react';
import { searchMoviesByTitle } from '@shared/api/server/server';
import { addMovies, searchChange } from '@app/redux/actions/actionsCreators';
import { useSelector, useDispatch } from 'react-redux';
import { selectMovies, selectSearch } from '@app/redux/selectors';
import Search from './ui/Search';

const DEFAULT_SEARCH = 'terminator';

export default function GeneralPage() {
	const dispatch = useDispatch();
	const search = useSelector(selectSearch);
	const movies = useSelector(selectMovies);

	useEffect(() => {
		searchMoviesByTitle(search || DEFAULT_SEARCH).then((response) => {
			dispatch(addMovies(response.data.Search));
		});
	}, [search]);
	return (
		<>
			<div>
				<Search
					value={search}
					onChange={(e) => dispatch(searchChange(e.target.value))}
				/>

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
			</div>
		</>
	);
}
