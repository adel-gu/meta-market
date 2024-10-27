import * as React from 'react';

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
					<Link to='/profile'>Profiles</Link>
				</li>
				<li>
					<div>
						<Link to='/auth/create-account'>Auth: Create account</Link>
					</div>
					<div>
						<Link to='/auth/connect-wallet'>Auth: connect wallet</Link>
					</div>
				</li>
			</ul>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/market/*' element={<Market />} />
				<Route path='/profiles/*' element={<Profiles />} />
				<Route path='/auth/*' element={<Auth />} />
			</Routes>
		</React.Suspense>
	);
}

export default App;
