import { useParams } from 'react-router-dom';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Badge,
	Button,
	Text,
	Timer,
	TimerContent,
	TimerTitle,
	TimerUnit,
	TimerValue,
} from '@meta-market-org/mint-ui';
import { Globe } from '@meta-market-org/mint-icons';

import Creator from '../../assets/creator.png';

import Nft from '../../assets/nft.png';
import Nft1 from '../../assets/nft-1.png';
import Nft2 from '../../assets/nft-2.png';
import Nft3 from '../../assets/nft-3.png';
import Nft4 from '../../assets/nft-4.png';
import Nft5 from '../../assets/nft-5.png';
import Nft6 from '../../assets/nft-6.png';
import Nft7 from '../../assets/nft-7.png';
import Nft8 from '../../assets/nft-8.png';

const creator = {
	id: 'keeptreal',
	avatarTitle: 'Keeptreal',
	avatar: Creator,
};

const nfts = [
	{
		id: 'distant-galaxy',
		title: 'Distant Galaxy',
		nft: Nft,
	},
	{
		id: 'life-on-edena',
		title: 'Life On Edena',
		nft: Nft1,
	},
	{
		id: 'astroFiction',
		title: 'AstroFiction',
		nft: Nft2,
	},
	{
		id: 'crypto-city',
		title: 'CryptoCity',
		nft: Nft3,
	},
	{
		id: 'colorful-dog',
		title: 'ColorfulDog 0524',
		nft: Nft4,
	},
	{
		id: 'space-tales',
		title: 'Space Tales',
		nft: Nft5,
	},
	{
		id: 'cherry-blossom-girl',
		title: 'Cherry Blossom Girl 037',
		nft: Nft6,
	},
	{
		id: 'dancing-robots',
		title: 'Dancing Robots 0987',
		nft: Nft7,
	},
	{
		id: 'iceCream-ape',
		title: 'IceCream Ape',
		nft: Nft8,
	},
];

const NftBio = () => {
	const { id } = useParams();
	const nft = nfts.find((nft) => nft.id === id);
	return (
		<>
			<div
				style={{ backgroundImage: `url(${nft?.nft ?? ''})` }}
				className='h-[320px] tablet:h-[420px] desktop:h-[560px] bg-cover bg-center'
			/>
			<section className='container py-10 tablet:py-20 tablet:flex tablet:justify-between'>
				<div className='space-y-8'>
					<div className=''>
						<Text as='h2' size='1' weight='semibold'>
							{nft?.title}
						</Text>
						<Text variant='caption' className='-mt-2'>
							Minted on Sep 30, 2022
						</Text>
					</div>
					<Timer className='font-space-mono bg-bg-secondary tablet:hidden'>
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
						<Button className='mt-8'>Place Bid</Button>
					</Timer>
					<div className='space-y-1.5'>
						<Text
							variant='caption'
							size='5'
							weight='bold'
							className='font-space-mono'>
							Created By
						</Text>

						<Badge className='space-x-3 px-0 bg-none'>
							<Avatar size='sm'>
								<AvatarImage src={creator.avatar} alt={creator.avatarTitle} />
								<AvatarFallback>{creator.avatarTitle}</AvatarFallback>
							</Avatar>
							<Text as='p'>{creator.avatarTitle}</Text>
						</Badge>
					</div>
					<div className='space-y-1.5'>
						<Text
							variant='caption'
							size='5'
							weight='bold'
							className='font-space-mono'>
							Description
						</Text>
						<Text>
							The Orbitians is a collection of 10,000 unique NFTs on the
							Ethereum blockchain,
							<br />
							There are all sorts of beings in the NFT Universe. The most
							advanced and friendly of the bunch are Orbitians. <br />
							<br />
							They live in a metal space machines, high up in the sky and only
							have one foot on Earth.
							<br />
							These Orbitians are a peaceful race, but they have been at war
							with a group of invaders for many generations.
							<br /> The invaders are called Upside-Downs, because of their
							inverted bodies that live on the ground, <br />
							yet do not know any other way to be. Upside-Downs believe that
							they will be able to win <br /> this war if they could only get an
							eye into Orbitian territory, so they've taken to make human beings
							their target.
						</Text>
					</div>
					<div className='space-y-1.5'>
						<Text
							variant='caption'
							size='5'
							weight='bold'
							className='font-space-mono'>
							Details
						</Text>
						<div className='flex flex-col gap-2'>
							<Badge className='space-x-3 px-0 bg-none group'>
								<Globe />
								<Text className='group-hover:underline group-hover:cursor-pointer'>
									View on Etherscan
								</Text>
							</Badge>
							<Badge className='space-x-3 px-0 bg-none group'>
								<Globe />
								<Text className='group-hover:underline group-hover:cursor-pointer'>
									View Original
								</Text>
							</Badge>
						</div>
					</div>
					<div className='space-y-1.5'>
						<Text
							variant='caption'
							size='5'
							weight='bold'
							className='font-space-mono'>
							Tags
						</Text>
						<div className='flex items-center gap-y-2 gap-x-3 flex-wrap'>
							<Badge variant='secondary' className='px-4 py-2 uppercase'>
								Animation
							</Badge>
							<Badge variant='secondary' className='px-4 py-2 uppercase'>
								illustration
							</Badge>
							<Badge variant='secondary' className='px-4 py-2 uppercase'>
								moon
							</Badge>
							<Badge variant='secondary' className='px-4 py-2 uppercase'>
								moon
							</Badge>
						</div>
					</div>
				</div>
				<Timer className='font-space-mono bg-bg-secondary hidden tablet:block tablet:h-fit'>
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
					<Button className='mt-8 w-full'>Place Bid</Button>
				</Timer>
			</section>
		</>
	);
};
export default NftBio;
