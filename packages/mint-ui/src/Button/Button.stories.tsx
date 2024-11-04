import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		asChild: {
			options: [true, false],
			control: { type: 'boolean' },
		},
		size: {
			options: ['default', 'sm', 'lg'],
			control: { type: 'inline-radio' },
		},
	},
	args: {
		asChild: false,
		size: 'default',
	},
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Primary',
	},
};

export const Outline: Story = {
	args: {
		children: 'Outline',
		variant: 'outline',
	},
};
