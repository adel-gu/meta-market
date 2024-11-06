import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './skeleton';

const meta: Meta<typeof Skeleton> = {
	title: 'Components/Skeleton',
	render: () => (
		<div className='flex flex-col space-y-3'>
			<Skeleton className='h-[125px] w-[250px] rounded-xl' />
			<div className='space-y-2'>
				<Skeleton className='h-4 w-[250px]' />
				<Skeleton className='h-4 w-[200px]' />
			</div>
		</div>
	),
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const CardSkeleton: Story = {
	args: {},
	render: () => (
		<div className='flex flex-col space-y-3'>
			<Skeleton className='h-[125px] w-[250px] rounded-xl' />
			<div className='space-y-2'>
				<Skeleton className='h-4 w-[250px]' />
				<Skeleton className='h-4 w-[200px]' />
			</div>
		</div>
	),
};
