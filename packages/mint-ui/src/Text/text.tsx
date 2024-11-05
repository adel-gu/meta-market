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
			'1': 'text-sm',
			'2': 'text-base',
			'3': 'text-md',
			'4': 'text-lg',
			'5': 'text-xl',
			'6': 'text-2xl',
			'7': 'text-3xl',
		},
		weight: {
			default: 'font-normal',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
		weight: 'default',
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
>(({ className, variant, size, weight, as = 'p', ...props }, ref) => {
	const Comp = as;
	return (
		<Comp
			className={cn(textVariants({ variant, size, weight, className }))}
			ref={ref}
			{...props}
		/>
	);
});

export { Text, textVariants };
