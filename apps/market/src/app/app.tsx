import { Route, Routes } from 'react-router-dom';
import MarketPage from './pages/Market';
import RankingsPage from './pages/Rankings';

const app = () => {
	return (
		<Routes>
			<Route path='/index' element={<MarketPage />} />
			<Route path='/rankings' element={<RankingsPage />} />
		</Routes>
	);
};
export default app;
