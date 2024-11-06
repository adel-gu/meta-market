import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

import {
	Button,
	Avatar,
	AvatarImage,
	AvatarFallback,
	Image,
} from '@meta-market/mint-ui';

const Market = React.lazy(() => import('market/Module'));

const Profiles = React.lazy(() => import('profiles/Module'));

const Auth = React.lazy(() => import('auth/Module'));

const Landing = React.lazy(() => import('landing/Module'));

export function App() {
	return (
		<React.Suspense fallback={null}>
			<Button>Get Started</Button>
			<Image
				src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
				placeholderSrc='https://images.freeimages.com/images/large-previews/f94/fluffy-gray-kitten-relaxing-0410-5697578.jpg?fmt=webp&h=20'
				alt='img'
				height={400}
				width={400}
				effect='blur'
			/>
			<Avatar>
				<AvatarImage src='' alt='shadcn' />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<ul>
				<li>
					<Link to='/' className='text-red-500'>
						Home
					</Link>
				</li>
				<li>
					<div>
						<Link to='/market/index'>Market: market</Link>
					</div>
					<div>
						<Link to='/market/rankings'>Market: rankings</Link>
					</div>
				</li>
				<li>
					<div>
						<Link to='/profiles/artist/5'>Profiles: artist</Link>
					</div>
					<div>
						<Link to='/profiles/nft/5'>Profiles: nft</Link>
					</div>
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
