import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage } from '../Avatar';
import { Badge } from '../Badge/badge';
import { Text } from '../Text';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from './table';

const meta: Meta<typeof Table> = {
	title: 'Data/Table',
	component: Table,
};
export default meta;
type Story = StoryObj<typeof Table>;

export const Primary = {
	args: {},
	render: () => (
		<Table className='tablet:min-w-auto min-w-[800px] px-0'>
			<TableHeader>
				<TableRow className='border-bg-secondary bg-bg-primary'>
					<TableHead className='px-6'>#</TableHead>
					<TableHead className='flex-1'>Artist</TableHead>
					<TableHead className='flex-1'>Change</TableHead>
					<TableHead className='flex-1'>NFTs Sold</TableHead>
					<TableHead className='flex-1'>Volume</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow className='border-none'>
					<TableCell>
						<Badge>1</Badge>
					</TableCell>
					<TableCell className='flex-1'>
						<Badge className='space-x-3 bg-none px-0' variant='transparent'>
							<Avatar size='sm'>
								<AvatarImage src='' alt='' />
								<AvatarFallback>AV</AvatarFallback>
							</Avatar>
							<Text>Avatar name</Text>
						</Badge>
					</TableCell>
					<TableCell className='flex-1 text-green'>+1.41%</TableCell>
					<TableCell className='flex-1'>602</TableCell>
					<TableCell className='flex-1'>12.4 ETH</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
};
