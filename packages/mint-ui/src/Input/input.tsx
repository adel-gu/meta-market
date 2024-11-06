import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../cn';

const inputVariant = cva(
	'flex rounded-[20px] px-4 py-3 text-md transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus-visible:outline-none focus-visible:ring-offset-4 disabled:cursor-not-allowed disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'border border-bg-secondary bg-bg-primary text-foreground-secondary ring-offset-bg-secondary placeholder:text-foreground-secondary focus-visible:ring-2 focus-visible:ring-primary',
				light:
					'ring-offset-bg-secondary placeholder:text-bg-primary focus-visible:ring-2 focus-visible:ring-primary',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof inputVariant> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, variant, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(inputVariant({ variant, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = 'Input';

export { Input };
