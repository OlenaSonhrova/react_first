import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.css';


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</QueryClientProvider>
	</BrowserRouter>
);


