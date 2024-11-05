import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta: Meta<typeof Avatar> = {
	title: 'Components/Avatar',
	render: (args) => (
		<Avatar>
			<AvatarImage src='https://github.com/shadcn.png' alt='shadcn' />
			<AvatarFallback>Shadcn</AvatarFallback>
		</Avatar>
	),
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
