import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../Text';
import {
	Timer,
	TimerContent,
	TimerTitle,
	TimerUnit,
	TimerValue,
} from './timer';

const meta: Meta<typeof Timer> = {
	title: 'Organisms/Timer',
	component: Timer,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Timer>;

export const Primary: Story = {
	args: {},
	render: () => (
		<Timer className='font-space-mono'>
			<TimerTitle>Auction ends in:</TimerTitle>
			<TimerContent>
				<TimerValue>
					<TimerUnit>
						<span>59</span>
						<span className='mx-3 -mt-3'>:</span>
					</TimerUnit>
					<Text>Hours</Text>
				</TimerValue>
				<TimerValue>
					<TimerUnit>
						<span>59</span>
						<span className='mx-3 -mt-3'>:</span>
					</TimerUnit>
					<Text>Minutes</Text>
				</TimerValue>
				<TimerValue>
					<TimerUnit>59</TimerUnit>
					<Text>Seconds</Text>
				</TimerValue>
			</TimerContent>
		</Timer>
	),
};
