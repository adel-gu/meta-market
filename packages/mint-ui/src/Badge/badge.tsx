import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../cn';

const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-2.5 py-0.5 font-space-mono text-base font-normal',
	{
		variants: {
			variant: {
				default: 'bg-bg-primary text-foreground-secondary',
				secondary: 'bg-bg-secondary text-foreground-primary',
				gray: 'bg-foreground-secondary text-foreground-primary',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };
