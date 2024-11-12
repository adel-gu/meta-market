import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from './grid';

const meta: Meta<typeof Grid> = {
	title: 'Layouts/Grid',
	component: Grid,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Grid>;

export const CollectionCardGrid: Story = {
	args: {},
	render: () => (
		<Grid columns={3} gap='md' className='w-[330px]'>
			<div className='col-span-3 h-[330px]'>
				<img
					src='https://via.placeholder.com/800x400'
					alt='Large Image'
					className='h-full w-full rounded-large object-cover'
				/>
			</div>

			<img
				src='https://via.placeholder.com/400x400'
				alt='Image 1'
				className='h-[100px] w-full rounded-large object-cover'
			/>
			<img
				src='https://via.placeholder.com/400x400'
				alt='Image 2'
				className='h-[100px] w-full rounded-large object-cover'
			/>
			<div className='flex h-[100px] w-full items-center justify-center rounded-large bg-primary object-cover text-foreground-primary'>
				1024+
			</div>
		</Grid>
	),
};
