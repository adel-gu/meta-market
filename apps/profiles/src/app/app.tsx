import { Route, Routes } from 'react-router-dom';
import ArtistPage from './Pages/ArtistPage';
import NFTPage from './Pages/NFTPage';

export function App() {
	return (
		<Routes>
			<Route path='/artist/:id' element={<ArtistPage />} />
			<Route path='/nft/:id' element={<NFTPage />} />
		</Routes>
	);
}

export default App;
