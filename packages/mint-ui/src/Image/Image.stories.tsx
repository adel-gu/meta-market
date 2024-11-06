import type { Meta, StoryObj } from '@storybook/react';

import { Image } from './image';

const meta: Meta<typeof Image> = {
	title: 'Components/Image',
	render: () => (
		<Image
			src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
			alt='img'
			height={400}
			width={400}
			effect='blur'
		/>
	),
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Image>;

export const ImageWithoutPlaceholder: Story = {
	args: {},
	render: () => (
		<Image
			src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
			alt='img'
			height={400}
			width={400}
		/>
	),
};

export const ImageWithPlaceholder: Story = {
	args: {},
	render: () => (
		<Image
			src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
			placeholderSrc='https://plus.unsplash.com/premium_photo-1661698763470-55da05629e50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			alt='img'
			height={400}
			width={400}
		/>
	),
};

export const ImageWithBlurEffect: Story = {
	args: {},
	render: () => (
		<Image
			src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
			placeholderSrc='https://plus.unsplash.com/premium_photo-1661698763470-55da05629e50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			alt='img'
			height={400}
			width={400}
			effect='blur'
		/>
	),
};

export const ImageWithBlackAndWhiteEffect: Story = {
	args: {},
	render: () => (
		<Image
			src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
			placeholderSrc='https://plus.unsplash.com/premium_photo-1661698763470-55da05629e50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			alt='img'
			height={400}
			width={400}
			effect='black-and-white'
		/>
	),
};

export const ImageWithOpacityEffect: Story = {
	args: {},
	render: () => (
		<Image
			src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
			placeholderSrc='https://plus.unsplash.com/premium_photo-1661698763470-55da05629e50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			alt='img'
			height={400}
			width={400}
			effect='opacity'
		/>
	),
};
