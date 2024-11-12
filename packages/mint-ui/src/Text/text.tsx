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
			'1': 'text-xl tablet:text-2xl desktop:text-3xl',
			'2': 'text-lg tablet:text-xl',
			'3': 'text-md tablet:text-lg',
			'4': 'text-base tablet:text-md',
			'5': 'text-md tablet:text-lg',
			'6': 'text-base tablet:text-md desktop:text-lg',
			'7': 'text-sm tablet:text-base desktop:text-md',
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
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
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
