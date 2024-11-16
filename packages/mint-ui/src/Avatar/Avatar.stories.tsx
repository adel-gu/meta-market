import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta: Meta<typeof Avatar> = {
	title: 'Components/Avatar',
	component: Avatar,
	argTypes: {
		variant: {
			options: ['default', 'square'],
			control: 'inline-radio',
		},
		size: {
			options: ['default', 'sm'],
			control: 'inline-radio',
		},
	},
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarWithImage: Story = {
	args: {},
	render: () => (
		<Avatar>
			<AvatarImage src='https://github.com/shadcn.png' alt='shadcn' />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	),
};

export const AvatarWithFallBack: Story = {
	args: {},
	render: () => (
		<Avatar>
			<AvatarImage src='' alt='shadcn' />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	),
};

export const AvatarSm: Story = {
	args: {},
	render: () => (
		<Avatar size='sm'>
			<AvatarImage src='' alt='shadcn' />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	),
};

export const AvatarProfile: Story = {
	args: {},
	render: () => (
		<Avatar variant='square'>
			<AvatarImage src='https://github.com/shadcn.png' alt='shadcn' />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	),
};
