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
} from '@meta-market-org/mint-ui';
import { ArrowRight } from '@meta-market-org/mint-icons';

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

const MoreFromArtist = () => {
	return (
		<section className='container pb-10 tablet:pb-20 space-y-16'>
			<div className='flex flex-col items-center justify-between space-y-4 tablet:flex-row'>
				<div className='space-y-4 text-center tablet:text-left'>
					<Text
						as='h2'
						size='2'
						weight='semibold'
						className='leading-tight tablet:leading-none desktop:leading-none'>
						More from this artist
					</Text>
					<Text className='desktop:text-md'>Explore new trending NFTs</Text>
				</div>
				<Button variant='outline' asChild className='space-x-4'>
					<Link to='/profiles/artist/keeptreal'>
						<span className='text-primary'>
							<ArrowRight />
						</span>
						<span className='text-foreground-primary'>Go To Artist Page</span>
					</Link>
				</Button>
			</div>
			<div>
				<Grid
					gap='lg'
					className='grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3'>
					{nfts.map((nft, index) => (
						<Link to={`/profiles/nft/${nft.id}`} className='group'>
							<Card key={nft.id} className={`bg-bg-secondary`}>
								<CardImage className='group-hover:scale-105 transition-all group-hover:rounded-b-large'>
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
											<AvatarImage
												src={creator.avatar}
												alt={creator.avatarTitle}
											/>
											<AvatarFallback>{creator.avatarTitle}</AvatarFallback>
										</Avatar>
										<Text>{creator.avatarTitle}</Text>
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
						</Link>
					))}
				</Grid>
			</div>
		</section>
	);
};
export default MoreFromArtist;
