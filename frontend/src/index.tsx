import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import App from '@app/App';
import { Provider } from 'react-redux';
import { store } from '@app/redux/store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
