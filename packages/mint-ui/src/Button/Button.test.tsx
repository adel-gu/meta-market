import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from './Button';

describe('First test', () => {
	it('should have the role button', () => {
		render(<Button />);
		expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
	});
});
