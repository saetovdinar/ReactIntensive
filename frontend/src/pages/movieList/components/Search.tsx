import { TextField } from '@mui/material';

function Search(props) {
	return (
		<TextField
			sx={{
				marginTop: '105px',
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
					color: '#ffffff'
				},
				'&:hover .MuiOutlinedInput-input': {
					color: '#ffffff'
				},
				'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
					color: '#ffffff'
				},
				'& .MuiInputLabel-outlined': {
					color: '#ffffff'
				},
				'&:hover .MuiInputLabel-outlined': {
					color: '#ffffff'
				},
				'& .MuiInputLabel-outlined.Mui-focused': {
					color: '#ffffff'
				}
			}}
			id="outlined-basic"
			label="поиск"
			variant="outlined"
			fullWidth
			{...props}
		/>
	);
}

export default Search;
