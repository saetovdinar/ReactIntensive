import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage, type AuthProvider } from '@toolpad/core/SignInPage';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@app/redux/selectors';
import { registerUser } from '@app/redux/actions/actionsCreators';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {selectLogged, selectRegistered} from '@app/redux/selectors'
const providers = [{ id: 'credentials', name: 'Email and Password' }];

export default function Signup() {
	const navigate = useNavigate();
	const logged = useSelector(selectLogged)
	useEffect(() => {
		if(logged) {
			navigate('/')
		}
		
	}, [logged])
	const dispatch: AppDispatch = useDispatch();
	const signIn: (provider: AuthProvider, formData: FormData) => void = async (
		provider,
		formData
	) => {
		dispatch(
			registerUser({
				login: `${formData.get('email')}`,
				password: ` ${formData.get('password')}`
			})
		);
		
	};

	return (
		<AppProvider>
			<SignInPage signIn={signIn} providers={providers}></SignInPage>;
		</AppProvider>
	);
}
