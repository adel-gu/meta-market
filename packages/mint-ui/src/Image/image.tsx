import * as React from 'react';
import {
	LazyLoadImage,
	LazyLoadImageProps,
} from 'react-lazy-load-image-component';
import { cva, type VariantProps } from 'class-variance-authority';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import { cn } from '../cn';

const imageVariants = cva('inline h-full w-full bg-center object-cover');

export interface ImageProps
	extends LazyLoadImageProps,
		VariantProps<typeof imageVariants> {}

const Image = React.forwardRef<HTMLDivElement, ImageProps>(
	({ className, width, height, ...props }, ref) => (
		<div ref={ref} className={cn(className)} style={{ width, height }}>
			<LazyLoadImage className={cn(imageVariants({ className }))} {...props} />
		</div>
	)
);

Image.displayName = 'Image';
export { Image, imageVariants };
