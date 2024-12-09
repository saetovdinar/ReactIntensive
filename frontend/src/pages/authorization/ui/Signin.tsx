import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage, type AuthProvider } from '@toolpad/core/SignInPage';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signinUser } from '@app/redux/actions/actionsCreators';
import {
	selectRegistered,
	selectLogged,
	AppDispatch
} from '@app/redux/selectors';
import { useEffect } from 'react';
import { log } from 'console';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

export default function Signin() {
	const navigate = useNavigate();
	const logged = useSelector(selectLogged)
	const registered = useSelector(selectRegistered)
	
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		if(logged) {
			navigate('/')
		}
	}, [logged])
	const signIn: (provider: AuthProvider, formData: FormData) => void = async (
		provider,
		formData
	) => {
		dispatch(
			signinUser({
				login: `${formData.get('email')}`,
				password: ` ${formData.get('password')}`
			})
		);
		
		
	};

	return (
		<AppProvider>
			<SignInPage signIn={signIn} providers={providers}></SignInPage>
		</AppProvider>
	);
}
