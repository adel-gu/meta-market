import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../cn';

const textVariants = cva('font-normal', {
	variants: {
		variant: {
			default: 'text-foreground-primary',
			caption: 'text-foreground-secondary',
		},
		size: {
			default: 'text-base',
			sm: 'text-sm',
			base: 'text-base',
			md: 'text-md',
			lg: 'text-lg',
			xl: 'text-xl',
			xxl: 'text-2xl',
			xxxl: 'text-3xl',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

export interface TextProps
	extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
		VariantProps<typeof textVariants> {
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
}

const Text = React.forwardRef<
	HTMLHeadingElement | HTMLParagraphElement,
	TextProps
>(({ className, size, variant, as = 'p', ...props }, ref) => {
	const Comp = as;
	return (
		<Comp
			className={cn(textVariants({ size, variant, className }))}
			ref={ref}
			{...props}
		/>
	);
});

export { Text, textVariants };
