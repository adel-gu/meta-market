import { Route, Routes } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import ConnectWallet from './pages/ConnectWallet';
import Layout from './layouts/Layout';

const app = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/create-account' element={<CreateAccount />} />
				<Route path='/connect-wallet' element={<ConnectWallet />} />
			</Route>
		</Routes>
	);
};
export default app;
