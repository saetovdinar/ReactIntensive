import { TextField } from '@mui/material';

function Search() {
	return (
		<TextField
			sx={{
				marginTop: '5px',
				'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
					borderColor: '#c9e9ff'
				},
				'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
					borderColor: '#c9e9ff'
				},
				'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
					{
						borderColor: '#c9e9ff'
					},
				'& .MuiOutlinedInput-input': {
					color: 'black'
				},
				'&:hover .MuiOutlinedInput-input': {
					color: 'black'
				},
				'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
					color: 'black'
				},
				'& .MuiInputLabel-outlined': {
					color: 'black'
				},
				'&:hover .MuiInputLabel-outlined': {
					color: 'black'
				},
				'& .MuiInputLabel-outlined.Mui-focused': {
					color: 'black'
				}
			}}
			id="outlined-basic"
			label="поиск"
			variant="outlined"
			fullWidth
		/>
	);
}

export default Search;
