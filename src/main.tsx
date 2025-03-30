import { ThemeProvider } from '@/components/provider/theme-provider'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import createStore from 'react-auth-kit/createStore';

const store = createStore({
	authName: '_auth',
	authType: 'cookie',
	cookieDomain: window.location.hostname,
	cookieSecure: window.location.protocol === 'https:',
});

import AuthProvider from 'react-auth-kit';
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AuthProvider store={store}>
			<BrowserRouter>
				<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</AuthProvider>
	</StrictMode>
)