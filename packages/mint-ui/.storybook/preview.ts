import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import '../src/global.css';

const preview: Preview = {
	parameters: {
		docs: {
			theme: themes.dark,
		},
		themes: {
			current: themes.dark,
		},
	},
};

export default preview;
