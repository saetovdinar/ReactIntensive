import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	colors,
	Grid,
	Typography
} from '@mui/material';

function CardsItem() {
	return (
		<Grid item xs={13} md={1.7} spacing={{ md: 3 }}>
			<Card
				sx={{
					height: '350px',
					backgroundColor: '#c9e9ff'
				}}
			>
				<CardContent>
					<Typography variant="h6" component="h3">
						Подробнее
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
}

export default CardsItem;
