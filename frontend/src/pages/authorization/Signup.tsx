import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage, type AuthProvider } from '@toolpad/core/SignInPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@app/redux/store';
import { registerUser } from '@app/redux/actions/actionsCreators';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

export default function Signup() {
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
	const users = useSelector((state: RootState) => state.users.users);
	return (
		<AppProvider>
			<SignInPage signIn={signIn} providers={providers}></SignInPage>
		</AppProvider>
	);
}
