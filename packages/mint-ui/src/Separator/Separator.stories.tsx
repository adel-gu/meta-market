import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
	title: 'Components/Separator',
	component: Separator,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		orientation: {
			options: ['horizontal', 'vertical'],
			control: 'inline-radio',
			defaultValue: 'horizontal',
		},
		decorative: {
			control: 'boolean',
			defaultValue: 'true',
		},
	},
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Separator>;

export const Primary: Story = {
	args: {
		orientation: 'horizontal',
	},
};
