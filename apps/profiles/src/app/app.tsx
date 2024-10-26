import { Route, Routes, Link } from 'react-router-dom';
import ArtistPage from './Pages/ArtistPage';
import NFTPage from './Pages/NFTPage';

export function App() {
	return (
		<div>
			<h1>Profiles: profiles application</h1>
			<Routes>
				<Route path='/profiles/artist/:id' element={<ArtistPage />} />
				<Route path='/profiles/nft/:id' element={<NFTPage />} />
			</Routes>
		</div>
	);
}

export default App;
