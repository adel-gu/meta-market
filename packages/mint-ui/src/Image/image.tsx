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

const imageVariants = cva('');

export interface ImageProps
	extends LazyLoadImageProps,
		VariantProps<typeof imageVariants> {}

const Image = React.forwardRef<HTMLSpanElement, ImageProps>(
	({ className, ...props }, ref) => (
		<span ref={ref} className={cn(imageVariants())}>
			<LazyLoadImage className={cn(className)} {...props} />
		</span>
	)
);

Image.displayName = 'Image';
export { Image, imageVariants };
