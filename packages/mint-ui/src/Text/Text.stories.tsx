import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './text';

const meta: Meta<typeof Text> = {
	title: 'Components/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Heading: Story = {
	args: {
		as: 'h1',
		children: 'Heading',
	},
	argTypes: {
		as: {
			options: ['h1', 'h2', 'h3', 'h4', 'h5'],
			control: { type: 'inline-radio' },
		},
		size: {
			options: ['md', 'lg', 'xl', 'xxl', 'xxxl'],
			control: { type: 'inline-radio' },
		},
	},
};

export const Paragraph: Story = {
	args: {
		as: 'p',
		children: 'Paragraph',
	},
	argTypes: {
		as: {
			options: ['p'],
		},
		size: {
			options: ['sm', 'base'],
			control: { type: 'inline-radio' },
		},
	},
};

export const Caption: Story = {
	args: {
		as: 'p',
		children: 'Caption',
	},
	argTypes: {
		as: {
			options: ['p'],
		},
		variant: {
			options: ['caption'],
		},
		size: {
			options: ['sm', 'base'],
			control: { type: 'inline-radio' },
		},
	},
};
