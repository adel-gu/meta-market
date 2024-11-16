import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../cn';

const avatarVariants = cva('relative flex shrink-0 overflow-hidden', {
	variants: {
		variant: {
			default: 'rounded-full',
			square: 'rounded-large',
		},
		size: {
			default: 'h-[60px] w-[60px] text-2xl desktop:h-[120px] desktop:w-[120px]',
			sm: 'h-[24px] w-[24px] text-[8px]',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

interface AvatarProps
	extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
		VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Root>,
	AvatarProps
>(({ className, size, variant, ...props }, ref) => (
	<AvatarPrimitive.Root
		ref={ref}
		className={cn(avatarVariants({ size, variant, className }))}
		{...props}
	/>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Image>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={cn('aspect-square h-full w-full', className)}
		{...props}
	/>
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Fallback>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={cn(
			'flex h-full w-full items-center justify-center bg-foreground-secondary text-foreground-primary',
			className
		)}
		{...props}
	/>
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback, AvatarProps };
