import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Text } from './text';

describe('Text component', () => {
	it('renders with default properties', () => {
		render(<Text>Default Text</Text>);
		const textElement = screen.getByText('Default Text');
		expect(textElement).toBeInTheDocument();
		expect(textElement.tagName.toLowerCase()).toBe('p');
		expect(textElement).toHaveClass(
			'font-normal',
			'text-foreground-primary',
			'text-base'
		);
	});

	it('applies custom variant, size, and weight classes', () => {
		render(
			<Text variant='caption' size='4' weight='bold'>
				Customized Text
			</Text>
		);
		const textElement = screen.getByText('Customized Text');
		expect(textElement).toHaveClass(
			'text-foreground-secondary',
			'text-base',
			'tablet:text-md',
			'font-bold'
		);
	});

	it('renders as the correct HTML element based on "as" prop', () => {
		render(<Text as='h2'>Heading Text</Text>);
		const textElement = screen.getByText('Heading Text');
		expect(textElement.tagName.toLowerCase()).toBe('h2');
	});

	it('accepts and applies additional custom classes', () => {
		render(<Text className='custom-class'>Text with custom class</Text>);
		const textElement = screen.getByText('Text with custom class');
		expect(textElement).toHaveClass('custom-class');
	});

	it('applies correct classes for size options', () => {
		render(<Text size='7'>Large Text</Text>);
		const textElement = screen.getByText('Large Text');
		expect(textElement).toHaveClass(
			'text-foreground-primary',
			'text-sm',
			'tablet:text-base',
			'desktop:text-md',
			'font-normal'
		);
	});

	it('applies correct classes for weight options', () => {
		render(<Text weight='semibold'>Semibold Text</Text>);
		const textElement = screen.getByText('Semibold Text');
		expect(textElement).toHaveClass('font-semibold');
	});
});
