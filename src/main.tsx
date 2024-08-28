import { ThemeProvider } from '@/components/provider/theme-provider'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
)
