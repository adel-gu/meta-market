import type { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabsList, TabsTrigger } from './tabs';

const meta: Meta<typeof Tabs> = {
	title: 'Components/Tabs',
	render: () => (
		<Tabs defaultValue='created' className='w-[400px]'>
			<TabsList className='grid w-full grid-cols-3'>
				<TabsTrigger value='created'>Created</TabsTrigger>
				<TabsTrigger value='owned'>Owned</TabsTrigger>
				<TabsTrigger value='collection'>Collection</TabsTrigger>
			</TabsList>
		</Tabs>
	),
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
	args: {},
};
