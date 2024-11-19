import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Badge,
	Button,
	Text,
	Timer,
	TimerTitle,
	TimerContent,
	TimerValue,
	TimerUnit,
} from '@meta-market-org/mint-ui';

import AuctionBgImage from '../../assets/auction-bg-image.png';
import Shroomie from '../../assets/shroomie.png';
import { Link } from 'react-router-dom';
import { Eye } from '@meta-market-org/mint-icons';

const AuctionSection = () => {
	return (
		<section
			className='my-20 bg-top bg-cover relative'
			style={{ backgroundImage: `url(${AuctionBgImage})` }}>
			<div className='absolute inset-0 z-0 bg-gradient-to-t	from-primary/85' />
			<div className='relative z-10 container py-24 tablet:pb-16 tablet:pt-[300px]  space-y-8'>
				<Badge className='space-x-3 px-3 py-2'>
					<Avatar size='sm'>
						<AvatarImage src={Shroomie} alt='Shroomie' />
						<AvatarFallback>SH</AvatarFallback>
					</Avatar>
					<Text as='p'>Shroomie</Text>
				</Badge>

				<div className='flex flex-col gap-y-8 tablet:flex-row tablet:justify-between tablet:gap-y-0'>
					<div className='space-y-8'>
						<Text as='h2' size='1' weight='semibold' className=''>
							Magic Mashrooms
						</Text>
						<Button
							variant='white'
							asChild
							className='space-x-4 hidden tablet:inline-flex'>
							<Link to='/profiles/nft/:id'>
								<span className='text-primary'>
									<Eye />
								</span>
								<span>See NFT</span>
							</Link>
						</Button>
					</div>
					<Timer className='font-space-mono tablet:mt-8'>
						<TimerTitle>Auction ends in:</TimerTitle>
						<TimerContent>
							<TimerValue>
								<TimerUnit>
									<span>59</span>
									<span className='-mt-3 mx-3'>:</span>
								</TimerUnit>
								<Text>Hours</Text>
							</TimerValue>
							<TimerValue>
								<TimerUnit>
									<span>59</span>
									<span className='-mt-3 mx-3'>:</span>
								</TimerUnit>
								<Text>Minutes</Text>
							</TimerValue>
							<TimerValue>
								<TimerUnit>59</TimerUnit>
								<Text>Seconds</Text>
							</TimerValue>
						</TimerContent>
					</Timer>
					<Button
						variant='white'
						asChild
						className='space-x-4 w-fit tablet:hidden'>
						<Link to='/profiles/nft/:id'>
							<span className='text-primary'>
								<Eye />
							</span>
							<span>See NFT</span>
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};
export default AuctionSection;
