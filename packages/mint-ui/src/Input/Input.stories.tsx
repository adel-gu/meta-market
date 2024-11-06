import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
	args: {
		placeholder: 'Email',
	},
};

export const Light: Story = {
	args: {
		placeholder: 'Email',
		variant: 'light',
	},
};
