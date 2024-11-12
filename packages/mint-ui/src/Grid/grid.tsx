import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../cn';

const gridVariants = cva('grid', {
	variants: {
		columns: {
			1: 'grid-cols-1',
			2: 'grid-cols-2',
			3: 'grid-cols-3',
			4: 'grid-cols-4',
			5: 'grid-cols-5',
			6: 'grid-cols-6',
			12: 'grid-cols-12',
		},
		gap: {
			none: 'gap-0',
			sm: 'gap-2',
			md: 'gap-4',
			lg: 'gap-8',
			xl: 'gap-12',
		},
		alignItems: {
			start: 'items-start',
			center: 'items-center',
			end: 'items-end',
			stretch: 'items-stretch',
		},
		justifyItems: {
			start: 'justify-items-start',
			center: 'justify-items-center',
			end: 'justify-items-end',
			stretch: 'justify-items-stretch',
		},
	},
	defaultVariants: {
		columns: 3,
		gap: 'md',
		alignItems: 'stretch',
		justifyItems: 'stretch',
	},
});

interface GridProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof gridVariants> {}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
	({ className, columns, gap, alignItems, justifyItems, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					gridVariants({ columns, gap, alignItems, justifyItems }),
					className
				)}
				{...props}
			/>
		);
	}
);

Grid.displayName = 'Grid';

export { Grid };
