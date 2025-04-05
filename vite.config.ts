import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		host: '0.0.0.0',
		strictPort: true,
		open: true,
		cors: {
			origin: '*',  // Barcha domenlardan kirishga ruxsat beradi
		},
		proxy: {
			'/uploads': {
				target: 'https://api.ytest.uz',  // Proksi serverga yo'naltirish
				changeOrigin: true,  // CORS xavfsizligini ta'minlash
				secure: false,  // HTTPS uchun
				rewrite: (path) => path.replace(/^\/uploads/, ''),  // Yo'lni moslashtirish
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
