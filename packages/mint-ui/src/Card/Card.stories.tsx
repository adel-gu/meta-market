import { useEffect, useState } from 'react';
import { PaintBrush } from '@meta-market-org/mint-icons';
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback, AvatarImage } from '../Avatar';
import { Badge } from '../Badge/badge';
import { Grid } from '../Grid/grid';
import { Image } from '../Image/image';
import { Skeleton } from '../Skeleton';
import { Text } from '../Text/text';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardImage,
	CardTitle,
} from './card';

const meta: Meta<typeof Card> = {
	title: 'Organisms/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Card>;

export const HeroCard: Story = {
	args: {},
	render: () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [isLoading, setIsLoading] = useState(true);

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			setTimeout(() => {
				setIsLoading(false);
			}, 800);
		}, []);

		return (
			<div className='flex-1'>
				{isLoading ? (
					<Skeleton className='flex w-full flex-col space-y-3 overflow-hidden rounded-[20px] desktop:ml-auto desktop:w-[350px]'>
						<Skeleton className='h-[230px] w-full' />
						<div className='space-y-2 p-5'>
							<Skeleton className='h-4 w-[250px]' />
							<Skeleton className='h-4 w-[200px]' />
						</div>
					</Skeleton>
				) : (
					<Card className='desktop:ml-auto desktop:w-[350px]'>
						<CardImage>
							<Image
								src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
								alt='NFT'
								width={'100%'}
								effect='blur'
							/>
						</CardImage>
						<CardHeader>
							<CardTitle>
								<Text
									as='p'
									size='6'
									weight='semibold'
									className='desktop:text-md'>
									Space Walking
								</Text>
							</CardTitle>
							<CardDescription className='flex items-center gap-3'>
								<Avatar size='sm'>
									<AvatarImage
										src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
										alt='avatar'
									/>
									<AvatarFallback>AV</AvatarFallback>
								</Avatar>
								<Text>Avatar</Text>
							</CardDescription>
						</CardHeader>
					</Card>
				)}
			</div>
		);
	},
};

export const CollectionCard: Story = {
	args: {},
	render: () => {
		return (
			<Card className='space-y-4 rounded-none desktop:ml-auto desktop:w-[330px]'>
				<Grid columns={3} gap='md' className='w-full'>
					<div className='col-span-3 h-[330px]'>
						<Image
							src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
							alt='NFT'
							width={'100%'}
							effect='blur'
							className='h-full w-full rounded-large object-cover'
						/>
					</div>

					<Image
						src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
						alt='NFT'
						width={'100%'}
						effect='blur'
						className='h-[100px] rounded-large object-cover'
					/>
					<Image
						src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
						alt='NFT'
						width={'100%'}
						effect='blur'
						className='h-[100px] rounded-large object-cover'
					/>
					<div className='flex h-[100px] w-full items-center justify-center rounded-large bg-primary object-cover text-foreground-primary'>
						1024+
					</div>
				</Grid>
				<CardHeader className='p-0'>
					<CardTitle>
						<Text as='p' size='6' weight='semibold' className='desktop:text-md'>
							Space Walking
						</Text>
					</CardTitle>
					<CardDescription className='flex items-center gap-3'>
						<Avatar size='sm'>
							<AvatarImage
								src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
								alt='avatar'
							/>
							<AvatarFallback>AV</AvatarFallback>
						</Avatar>
						<Text>Avatar</Text>
					</CardDescription>
				</CardHeader>
			</Card>
		);
	},
};

export const CreatorCard: Story = {
	args: {},
	render: () => {
		return (
			<Card
				className={`flex items-center space-x-4 bg-bg-secondary p-5 desktop:flex-col desktop:space-x-0 desktop:space-y-8`}>
				<CardContent className='relative p-0 desktop:w-full'>
					<Badge className='absolute -left-2 -top-2 z-50 desktop:relative desktop:left-0 desktop:top-0'>
						2
					</Badge>
					<Avatar className='desktop:mx-auto'>
						<AvatarImage
							src="'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'"
							alt='avatar'
						/>
						<AvatarFallback>AV</AvatarFallback>
					</Avatar>
				</CardContent>
				<CardHeader className='mx-auto mt-0 space-y-0 desktop:text-center'>
					<CardTitle>
						<Text as='p' size='5' weight='semibold'>
							Title
						</Text>
					</CardTitle>
					<CardDescription>
						<span className='flex items-center space-x-4'>
							<Text as='p' variant='caption'>
								Total Sale:
							</Text>
							<Text as='p' className='font-space-mono'>
								34.45 ETH
							</Text>
						</span>
					</CardDescription>
				</CardHeader>
			</Card>
		);
	},
};

export const CategoryCard: Story = {
	args: {},
	render: () => {
		return (
			<Card className='w-[350px] overflow-hidden bg-bg-secondary'>
				<CardContent className='relative overflow-hidden p-0 desktop:w-full'>
					<CardImage
						className='flex h-[140px] items-center justify-center bg-cover bg-center desktop:h-[240px]'
						style={{
							backgroundImage: `url(https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80)`,
							filter: 'blur(15px)',
						}}
					/>
					<PaintBrush className='absolute left-1/2 top-1/2 w-20 -translate-x-1/2 -translate-y-1/2 desktop:w-28' />
				</CardContent>
				<CardHeader className='mx-auto mt-0 space-y-0'>
					<CardTitle>
						<Text as='p' size='5' weight='semibold'>
							Title
						</Text>
					</CardTitle>
				</CardHeader>
			</Card>
		);
	},
};

export const DiscoverNftCard: Story = {
	args: {},
	render: () => {
		return (
			<Card className={`w-[350px] bg-bg-secondary`}>
				<CardImage>
					<Image
						src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
						alt='NFT'
						width={'100%'}
						effect='blur'
					/>
				</CardImage>
				<CardHeader className='mt-0 space-y-0'>
					<CardTitle>
						<Text as='p' size='5' weight='semibold'>
							Title
						</Text>
					</CardTitle>
					<CardDescription className='flex items-center gap-3'>
						<Avatar size='sm'>
							<AvatarImage
								src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
								alt='avatar'
							/>
							<AvatarFallback>AV</AvatarFallback>
						</Avatar>
						<Text>Avatar name</Text>
					</CardDescription>
				</CardHeader>
				<CardContent className='flex items-center justify-between'>
					<div>
						<Text as='p' variant='caption'>
							Price
						</Text>
						<Text as='p' className='font-space-mono'>
							1.63 ETH
						</Text>
					</div>
					<div className='text-right'>
						<Text as='p' variant='caption'>
							Highest Bid
						</Text>
						<Text as='p' className='font-space-mono'>
							0.33 ETH
						</Text>
					</div>
				</CardContent>
			</Card>
		);
	},
};
