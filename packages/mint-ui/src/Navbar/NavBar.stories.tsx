import { useState } from 'react';
import { Logo, Menu } from '@meta-market-nft/mint-icons';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { NavBar, NavBrand, NavCollapse, NavToggle } from './navbar';

const meta: Meta<typeof NavBar> = {
	title: 'Layouts/NavBar',
	component: NavBar,
};
export default meta;
type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
	args: {},
	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [isOpen, setIsOpen] = useState(false);

		return (
			<NavBar>
				<NavBrand>
					<Logo className='text-3xl text-primary' width={240} />
				</NavBrand>
				<NavToggle onClick={() => setIsOpen(!isOpen)} variant='transparent'>
					<Menu />
				</NavToggle>
				<NavCollapse isOpen={isOpen}>
					<a href='#home' className='hover:text-primary'>
						Home
					</a>
					<a href='#about' className='hover:text-primary'>
						About
					</a>
					<a href='#services' className='hover:text-primary'>
						Services
					</a>
					<a href='#contact' className='hover:text-primary'>
						Contact
					</a>
					<Button>Sign Up</Button>
				</NavCollapse>
			</NavBar>
		);
	},
};
