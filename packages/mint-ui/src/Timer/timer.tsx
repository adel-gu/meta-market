import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../cn';
import { Text } from '../Text';
import { textVariants } from '../Text/text';

const timerVariants = cva(
	'w-fit rounded-large bg-bg-primary bg-opacity-50 p-8 text-foreground-primary backdrop-blur-sm'
);

interface TimerProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof timerVariants> {}

const Timer = React.forwardRef<HTMLDivElement, TimerProps>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn(timerVariants({ className }))} {...props} />
	)
);
Timer.displayName = 'Timer';

const TimerTitle = React.forwardRef<
	HTMLParagraphElement,
	React.ComponentProps<typeof Text>
>(
	(
		{ children, className, as = 'p', variant, size = '4', weight, ...props },
		ref
	) => (
		<Text
			as={as}
			ref={ref}
			className={cn(textVariants({ variant, size, weight, className }))}
			{...props}>
			{children}
		</Text>
	)
);
TimerTitle.displayName = 'TimerTitle';

const TimerContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
	<div ref={ref} className={cn('flex items-start gap-2', className)} {...props}>
		{children}
	</div>
));
TimerContent.displayName = 'TimerContent';

const TimerValue = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('flex flex-col items-start', className)}
		{...props}>
		{children}
	</div>
));
TimerValue.displayName = 'TimerValue';

const TimerUnit = React.forwardRef<
	HTMLParagraphElement,
	React.ComponentProps<typeof Text>
>(
	(
		{
			children,
			className,
			as = 'p',
			variant,
			size = '1',
			weight = 'semibold',
			...props
		},
		ref
	) => (
		<Text
			as={as}
			ref={ref}
			className={cn(
				'flex items-center',
				textVariants({ variant, size, weight, className })
			)}
			{...props}>
			{children}
		</Text>
	)
);
TimerUnit.displayName = 'TimerUnit';

export { Timer, TimerTitle, TimerContent, TimerValue, TimerUnit };
