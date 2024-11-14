import { Logo, Menu } from '@meta-market/mint-icons';
import {
	Button,
	NavBar as NavBarComponent,
	NavBrand,
	NavCollapse,
	NavToggle,
} from '@meta-market/mint-ui';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
	{
		title: 'Marketplace',
		id: 'marketplace',
		path: '/market/index',
	},
	{
		title: 'Rankings',
		id: 'rankings',
		path: '/market/rankings',
	},
	{
		title: 'Connect a wallet',
		id: 'connectwallet',
		path: '/auth/connect-wallet',
	},
];

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 1248 && setIsOpen(false)
		);
	}, []);

	return (
		<div className='max-w-[95%] mx-auto py-5'>
			<NavBarComponent>
				<NavBrand>
					<Link to='/'>
						<Logo className='text-3xl text-primary' width={240} />
					</Link>
				</NavBrand>
				<NavToggle onClick={() => setIsOpen(!isOpen)} variant='transparent'>
					<Menu />
				</NavToggle>
				<NavCollapse isOpen={isOpen} className='bg-bg-primary'>
					{navLinks.map((navlink) => (
						<NavLink
							key={navlink.id}
							to={navlink.path}
							className={`desktop:hover:underline`}>
							{navlink.title}
						</NavLink>
					))}
					<Button asChild>
						<Link to='/auth/create-account'>Sign up</Link>
					</Button>
				</NavCollapse>
			</NavBarComponent>
		</div>
	);
};
export default NavBar;
