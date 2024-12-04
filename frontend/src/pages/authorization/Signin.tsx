import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage, type AuthProvider } from '@toolpad/core/SignInPage';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

// const signIn: (provider: AuthProvider, formData: FormData) => void = async (
//   provider,
//   formData,
// ) => {
//   const promise = new Promise<void>((resolve) => {
//     setTimeout(() => {
//       alert(
//         `Signing in with "${provider.name}" and credentials: ${formData.get('email')}, ${formData.get('password')}`,
//       );
//       resolve();
//     }, 300);
//   });
//   return promise;
// };

export default function Signin() {
	return (
		<AppProvider>
			<SignInPage /*signIn={signIn}*/ providers={providers}></SignInPage>
		</AppProvider>
	);
}
