import { Link } from 'react-router-dom';
import {
	Button,
	Grid,
	Text,
	Card,
	Badge,
	Avatar,
	AvatarImage,
	AvatarFallback,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardImage,
	Image,
	CardFooter,
} from '@meta-market/mint-ui';
import { RocketLaunch } from '@meta-market/mint-icons';

import Avatar1 from '../../assets/avatar1.png';
import Avatar2 from '../../assets/avatar2.png';
import Avatar3 from '../../assets/avatar3.png';
import Nft1 from '../../assets/nft1.png';
import Nft2 from '../../assets/nft2.png';
import Nft3 from '../../assets/nft3.png';

const nfts = [
	{
		id: 'distant-galaxy',
		title: 'Distant Galaxy',
		avatarTitle: 'MoonDancer',
		nft: Nft1,
		avatar: Avatar1,
	},
	{
		id: 'life-on-edena',
		title: 'Life On Edena',
		avatarTitle: 'NebulaKid',
		nft: Nft2,
		avatar: Avatar2,
	},
	{
		id: 'astroFiction',
		title: 'AstroFiction',
		avatarTitle: 'Spaceone',
		nft: Nft3,
		avatar: Avatar3,
	},
];

const DiscoverNftsSection = () => {
	return (
		<section className='container py-10 tablet:py-20 space-y-16'>
			<div className='flex flex-col items-center justify-between space-y-4 tablet:flex-row'>
				<div className='space-y-4 text-center tablet:text-left'>
					<Text
						as='h2'
						size='2'
						weight='semibold'
						className='leading-tight tablet:leading-none desktop:leading-none'>
						Discover More NFTs
					</Text>
					<Text className='desktop:text-md'>Explore new trending NFTs</Text>
				</div>
				<Button variant='outline' asChild className='space-x-3'>
					<Link to='/market/index'>
						<span className='text-primary'>
							<RocketLaunch />
						</span>
						<span className='text-foreground-primary'>See All</span>
					</Link>
				</Button>
			</div>
			<div>
				<Grid
					gap='lg'
					className='grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3'>
					{nfts.map((nft, index) => (
						<Card
							key={nft.id}
							className={`bg-bg-secondary ${index === 2 && 'tablet:hidden desktop:block'}`}>
							<CardImage>
								<Image src={nft.nft} alt='NFT' width={'100%'} effect='blur' />
							</CardImage>
							<CardHeader className='mt-0 space-y-0'>
								<CardTitle>
									<Text as='p' size='5' weight='semibold'>
										{nft.title}
									</Text>
								</CardTitle>
								<CardDescription className='flex items-center gap-3'>
									<Avatar size='sm'>
										<AvatarImage src={nft.avatar} alt={nft.avatarTitle} />
										<AvatarFallback>{nft.avatarTitle}</AvatarFallback>
									</Avatar>
									<Text>{nft.avatarTitle}</Text>
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
					))}
				</Grid>
			</div>
		</section>
	);
};
export default DiscoverNftsSection;
