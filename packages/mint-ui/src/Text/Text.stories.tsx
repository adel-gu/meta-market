import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './text';

const meta: Meta<typeof Text> = {
	title: 'Components/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		as: {
			options: ['h1', 'h2', 'h3', 'h4', 'p'],
			control: { type: 'inline-radio' },
		},
		variant: {
			options: ['default', 'caption'],
			control: { type: 'inline-radio' },
		},
		size: {
			options: ['1', '2', '3', '4', '5', '6', '7'],
			control: { type: 'inline-radio' },
		},
	},
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Heading: Story = {
	args: {
		as: 'h1',
		children: 'Heading',
		size: '7',
	},
};

export const Paragraph: Story = {
	args: {
		as: 'p',
		children: 'This is a paragraph text.',
		size: '2',
	},
};

export const Caption: Story = {
	args: {
		as: 'p',
		children: 'This is a caption text.',
		variant: 'caption',
		size: '1',
	},
};
