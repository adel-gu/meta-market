import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
	title: 'Components/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		variant: {
			options: ['default', 'secondary'],
			control: 'inline-radio',
			defaultValue: 'default',
		},
	},
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
	args: {
		children: '1',
	},
};

export const Secondary: Story = {
	args: {
		children: '67',
		variant: 'secondary',
	},
};

export const Gray: Story = {
	args: {
		children: '302',
		variant: 'gray',
	},
};
