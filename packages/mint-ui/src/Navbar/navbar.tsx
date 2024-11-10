import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { Button } from '../Button';
import { ButtonProps } from '../Button/button';
import { cn } from '../cn';

const navBarVariants = cva('flex items-center justify-between px-4 py-2');

interface NavBarProps
	extends React.ComponentPropsWithoutRef<'nav'>,
		VariantProps<typeof navBarVariants> {}

const NavBar = React.forwardRef<HTMLElement, NavBarProps>(
	({ className, ...props }, ref) => (
		<nav
			ref={ref}
			className={cn(navBarVariants(), 'relative', className)}
			{...props}
		/>
	)
);
NavBar.displayName = 'NavBar';

// NavBrand
const NavBrand = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('text-xl font-bold', className)} {...props} />
));
NavBrand.displayName = 'NavBrand';

// NavToggle
const NavToggle: React.FC<ButtonProps> = ({ className, ...props }) => {
	return (
		<Button className={cn('block p-2 desktop:hidden', className)} {...props} />
	);
};
NavToggle.displayName = 'NavToggle';

// NavCollapse
const navCollapseVariants = cva('flex desktop:items-center desktop:space-x-8', {
	variants: {
		isOpen: {
			true: `absolute left-0 right-0 top-20 z-40 origin-top flex-col gap-6 px-6 duration-700`,
			false: 'hidden desktop:block',
		},
	},
});

interface NavCollapseProps
	extends React.ComponentPropsWithoutRef<'div'>,
		VariantProps<typeof navCollapseVariants> {}

const NavCollapse = React.forwardRef<HTMLDivElement, NavCollapseProps>(
	({ className, isOpen, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(navCollapseVariants({ isOpen }), className)}
			{...props}
		/>
	)
);
NavCollapse.displayName = 'NavCollapse';

export { NavBar, NavBrand, NavToggle, NavCollapse };
