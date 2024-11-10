import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../cn';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-[20px] transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] hover:cursor-pointer focus:z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-primary disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-foreground-primary hover:bg-primary/90 focus:ring-primary',
				outline:
					'border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary',
				transparent: 'rounded-lg focus:bg-bg-secondary focus:ring-primary',
				link: 'text-primary underline-offset-2 hover:underline',
			},
			size: {
				default: 'px-10 py-4 text-base font-semibold',
				sm: 'px-8 py-3 text-base font-semibold',
				lg: 'px-12 py-5 text-md font-semibold',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				type='button'
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
