import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Layout from './layouts/Layout';

const Market = React.lazy(() => import('market/Module'));

const Profiles = React.lazy(() => import('profiles/Module'));

const Auth = React.lazy(() => import('auth/Module'));

const Landing = React.lazy(() => import('landing/Module'));

export function App() {
	return (
		<React.Suspense fallback={null}>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Landing />} />
					<Route path='/market/*' element={<Market />} />
					<Route path='/profiles/*' element={<Profiles />} />
					<Route path='/auth/*' element={<Auth />} />
				</Route>
			</Routes>
		</React.Suspense>
	);
}

export default App;
