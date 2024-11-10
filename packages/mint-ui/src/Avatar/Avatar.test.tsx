import React, { forwardRef, Ref } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

vi.mock('@radix-ui/react-avatar', () => ({
	Root: forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
		(props, ref: Ref<HTMLDivElement>) => <div ref={ref} {...props} />
	),
	Image: forwardRef<HTMLImageElement, React.ComponentProps<'img'>>(
		(props, ref: Ref<HTMLImageElement>) => {
			const { src } = props;
			if (!src) return;
			return <img ref={ref} {...props} />;
		}
	),
	Fallback: forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
		(props, ref: Ref<HTMLDivElement>) => <div ref={ref} {...props} />
	),
}));

describe('Avatar components', () => {
	describe('Avatar', () => {
		it('renders with default classes', () => {
			render(<Avatar data-testid='avatar' />);
			const avatar = screen.getByTestId('avatar');
			expect(avatar).toBeInTheDocument();
			expect(avatar).toHaveClass(
				'relative flex h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full'
			);
		});

		it('accepts and applies custom class names', () => {
			render(<Avatar className='custom-class' data-testid='avatar' />);
			const avatar = screen.getByTestId('avatar');
			expect(avatar).toHaveClass('custom-class');
		});

		it('supports ref forwarding', () => {
			const ref = { current: null };
			render(<Avatar ref={ref} data-testid='avatar' />);
			expect(ref.current).toBeInstanceOf(HTMLElement);
		});
	});

	describe('AvatarImage', () => {
		it('renders AvatarImage with default styling', () => {
			render(
				<Avatar>
					<AvatarImage
						data-testid='avatar-image'
						src='https://github.com/shadcn.png'
						alt='Avatar image'
					/>
				</Avatar>
			);

			const avatarImage = screen.getByTestId('avatar-image');

			expect(avatarImage).toBeInTheDocument();
			expect(avatarImage).toHaveClass('aspect-square h-full w-full');
		});

		it('renders with provided image source and alt text', () => {
			render(
				<Avatar>
					<AvatarImage
						src='https://github.com/shadcn.png'
						alt='Sample Avatar'
						data-testid='avatar-image'
					/>
				</Avatar>
			);
			const avatarImage = screen.getByTestId('avatar-image');
			expect(avatarImage).toHaveAttribute(
				'src',
				'https://github.com/shadcn.png'
			);
			expect(avatarImage).toHaveAttribute('alt', 'Sample Avatar');
		});

		it('displays fallback if image fails to load', async () => {
			render(
				<Avatar>
					<AvatarImage src='' data-testid='avatar-image' />
					<AvatarFallback data-testid='avatar-fallback'>AB</AvatarFallback>
				</Avatar>
			);

			const avatarImage = screen.queryByTestId('avatar-image');
			expect(avatarImage).not.toBeInTheDocument();

			const avatarFallback = screen.getByTestId('avatar-fallback');
			expect(avatarFallback).toBeInTheDocument();
			expect(avatarFallback).toHaveTextContent('AB');
		});
	});
});
