import { render } from '@testing-library/react';

import MintIcons from './mint-icons';

describe('MintIcons', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<MintIcons />);
		expect(baseElement).toBeTruthy();
	});
});
