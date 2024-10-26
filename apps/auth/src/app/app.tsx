import { Route, Routes, Link } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import ConnectWallet from './pages/ConnectWallet';

const app = () => {
	return (
		<>
			<div>Auth: auth application</div>

			<Routes>
					<Route path='/auth/create-account' element={<CreateAccount />}/>
					<Route path='/auth/connect-wallet' element={<ConnectWallet />}/>
			</Routes>
		</>
	)
}
export default app