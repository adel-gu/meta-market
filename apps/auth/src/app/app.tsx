import { Route, Routes, Link } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import ConnectWallet from './pages/ConnectWallet';

const app = () => {
	return (
		<>
			<div>Auth: auth application</div>

			<Routes>
					<Route path='/create-account' element={<CreateAccount />}/>
					<Route path='/connect-wallet' element={<ConnectWallet />}/>
			</Routes>
		</>
	)
}
export default app