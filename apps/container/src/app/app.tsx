import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Market = React.lazy(() => import('market/Module'));

const Profiles = React.lazy(() => import('profiles/Module'));

const Auth = React.lazy(() => import('auth/Module'));

const Landing = React.lazy(() => import('landing/Module'));

export function App() {
	return (
		<React.Suspense fallback={null}>
			<ul>
				<li>
					<Link to='/' className='text-red-500'>
						Home
					</Link>
				</li>
				<li>
					<Link to='/market'>Market</Link>
				</li>
				<li>
					<Link to='/profiles'>Profiles</Link>
				</li>
				<li>
					<Link to='/auth'>Auth</Link>
				</li>
				<li>
					<Link to='/landing'>Landing</Link>
				</li>
			</ul>
			<Routes>
				<Route path='/' element={<NxWelcome title='container' />} />
				<Route path='/market' element={<Market />} />
				<Route path='/profiles' element={<Profiles />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='/landing' element={<Landing />} />
			</Routes>
		</React.Suspense>
	);
}

export default App;
