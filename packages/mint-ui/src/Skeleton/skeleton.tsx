import { cn } from '../cn';

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('animate-pulse rounded-md bg-bg-secondary/20', className)}
			{...props}
		/>
	);
}

export { Skeleton };
