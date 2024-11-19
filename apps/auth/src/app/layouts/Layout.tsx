import { Outlet } from 'react-router-dom';
import { Image } from '@meta-market-nft/mint-ui';

import Background from '../../assets/background.png';

const Layout = () => {
	return (
		<div className='flex flex-col tablet:grid tablet:grid-cols-2'>
			<Image
				src={Background}
				alt=''
				width={'100%'}
				effect='blur'
				className='h-full w-full object-cover aspect-[4/3]'
			/>

			<Outlet />
		</div>
	);
};
export default Layout;
