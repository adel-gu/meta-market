import { Route, Routes } from 'react-router-dom';
import MarketPage from './pages/Market';
import RankingsPage from './pages/Rankings';

const app = () => {
	return (
		<div>
			<h1>Market: market application</h1>

			<Routes>
				<Route path='/index' element={<MarketPage />}/>
				<Route path='/rankings' element={<RankingsPage />}/>
			</Routes>
		</div>
	)
}
export default app