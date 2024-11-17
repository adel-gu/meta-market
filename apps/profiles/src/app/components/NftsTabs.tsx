import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
	Grid,
	Card,
	CardImage,
	CardHeader,
	CardContent,
	CardDescription,
	CardTitle,
	Image,
	Text,
	Avatar,
	AvatarImage,
	AvatarFallback,
	Badge,
} from '@meta-market/mint-ui';

import Creator from '../../assets/creator.png';
import Creator1 from '../../assets/creator1.png';
import Creator2 from '../../assets/creator2.png';
import Creator3 from '../../assets/creator3.png';
import Creator4 from '../../assets/creator4.png';
import Creator5 from '../../assets/creator5.png';
import Creator6 from '../../assets/creator6.png';
import Creator7 from '../../assets/creator7.png';
import Creator8 from '../../assets/creator8.png';
import Creator9 from '../../assets/creator9.png';
import Creator10 from '../../assets/creator10.png';
import Creator11 from '../../assets/creator11.png';

import Nft from '../../assets/nft.png';
import Nft1 from '../../assets/nft-1.png';
import Nft2 from '../../assets/nft-2.png';
import Nft3 from '../../assets/nft-3.png';
import Nft4 from '../../assets/nft-4.png';
import Nft5 from '../../assets/nft-5.png';
import Nft6 from '../../assets/nft-6.png';
import Nft7 from '../../assets/nft-7.png';
import Nft8 from '../../assets/nft-8.png';

import LargeCollection from '../../assets/dcgn-large.png';
import SmCollection1 from '../../assets/dcgn-sm-1.png';
import SmCollection2 from '../../assets/dcgn-sm-2.png';
import MushroomLarge from '../../assets/mushroom-large.png';
import SmMushroom1 from '../../assets/mushroom-sm-1.png';
import SmMushroom2 from '../../assets/mushroom-sm-2.png';
import DiscoLarge from '../../assets/disco-large.png';
import SmDisco1 from '../../assets/disco-sm-1.png';
import SmDisco2 from '../../assets/disco-sm-2.png';
import { useParams } from 'react-router-dom';

const creators = [
	{
		id: 'keeptreal',
		avatarTitle: 'Keeptreal',
		avatar: Creator,
	},
	{
		id: 'digilab',
		avatarTitle: 'DigiLab',
		avatar: Creator1,
	},
	{
		id: 'gravityone',
		avatarTitle: 'GravityOne',
		avatar: Creator2,
	},
	{
		id: 'juanie',
		avatarTitle: 'Juanie',
		avatar: Creator3,
	},
	{
		id: 'bluewhale',
		avatarTitle: 'BlueWhale',
		avatar: Creator4,
	},
	{
		id: 'mrfox',
		avatarTitle: 'Mr Fox',
		avatar: Creator5,
	},
	{
		id: 'shroomie',
		avatarTitle: 'Shroomie',
		avatar: Creator6,
	},
	{
		id: 'robotica',
		avatarTitle: 'Robotica',
		avatar: Creator7,
	},
	{
		id: 'rustyrobot',
		avatarTitle: 'RustyRobot',
		avatar: Creator8,
	},
	{
		id: 'animakid',
		avatarTitle: 'Animakid',
		avatar: Creator9,
	},
	{
		id: 'dotgu',
		avatarTitle: 'Dotgu',
		avatar: Creator10,
	},
	{
		id: 'ghiblier',
		avatarTitle: 'Ghiblier',
		avatar: Creator11,
	},
];

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

const collections = [
	{
		id: 'dcgn',
		title: 'DSGN Animals',
		largeCollection: LargeCollection,
		smCollection1: SmCollection1,
		smCollection2: SmCollection2,
		more: '1025+',
	},
	{
		id: 'magic-mushroom',
		title: 'Magic Mushrooms',
		largeCollection: MushroomLarge,
		smCollection1: SmMushroom1,
		smCollection2: SmMushroom2,
		more: '950+',
	},
	{
		id: 'disco-machines',
		title: 'Disco Machines',
		largeCollection: DiscoLarge,
		smCollection1: SmDisco1,
		smCollection2: SmDisco2,
		more: '2500+',
	},
];

const NftsTabs = () => {
	const { id } = useParams();
	const creator = creators.find((creator) => creator.id === id);
	return (
		<section>
			<Tabs
				defaultValue='created'
				className='border-t-[0.5px] border-bg-secondary'>
				<div className='container'>
					<TabsList className='grid w-full grid-cols-3'>
						<TabsTrigger value='created' className='group space-x-2'>
							<span>Created</span>
							<Badge
								variant='secondary'
								className='group-data-[state=active]:bg-foreground-secondary group-data-[state=active]:text-foreground-primary'>
								09
							</Badge>
						</TabsTrigger>
						<TabsTrigger value='owned' className='group space-x-2'>
							<span>Owned</span>
							<Badge
								variant='secondary'
								className='group-data-[state=active]:bg-foreground-secondary group-data-[state=active]:text-foreground-primary'>
								05
							</Badge>
						</TabsTrigger>
						<TabsTrigger value='collection' className='group space-x-2'>
							<span>Collection</span>
							<Badge
								variant='secondary'
								className='group-data-[state=active]:bg-foreground-secondary group-data-[state=active]:text-foreground-primary'>
								03
							</Badge>
						</TabsTrigger>
					</TabsList>
				</div>
				<div className='bg-bg-secondary py-20'>
					<TabsContent value='created' className='container '>
						<Grid
							gap='lg'
							className='grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3'>
							{nfts.map((nft, index) => (
								<Card key={nft.id} className='bg-bg-primary'>
									<CardImage>
										<Image
											src={nft.nft}
											alt='NFT'
											width={'100%'}
											effect='blur'
										/>
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
													src={creator?.avatar}
													alt={creator?.avatarTitle}
												/>
												<AvatarFallback>{creator?.avatarTitle}</AvatarFallback>
											</Avatar>
											<Text>{creator?.avatarTitle}</Text>
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
					</TabsContent>
					<TabsContent value='owned' className='container'>
						<Grid
							gap='lg'
							className='grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3'>
							{nfts.map((nft, index) => (
								<Card
									key={nft.id}
									className={`bg-bg-primary ${index >= 5 ? 'hidden' : ''}`}>
									<CardImage>
										<Image
											src={nft.nft}
											alt='NFT'
											width={'100%'}
											effect='blur'
										/>
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
													src={creator?.avatar}
													alt={creator?.avatarTitle}
												/>
												<AvatarFallback>{creator?.avatarTitle}</AvatarFallback>
											</Avatar>
											<Text>{creator?.avatarTitle}</Text>
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
					</TabsContent>
					<TabsContent value='collection' className='container '>
						<Grid
							gap='lg'
							className='grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3'>
							{collections.map((collection, index) => (
								<Card
									className={`
									w-[330px]
									space-y-4
									rounded-none
								 mx-auto tablet:mx-0 tablet:w-auto
								`}>
									<Grid columns={3} gap='md' className='w-full'>
										<div className='col-span-3 h-[380px] tablet:h-[460px] desktop:h-[480px]'>
											<Image
												src={collection.largeCollection}
												alt={`${collection.title} large collection`}
												width={'100%'}
												effect='blur'
												className='h-full w-full rounded-large object-cover aspect-[4/3]'
											/>
										</div>

										<Image
											src={collection.smCollection1}
											alt='NFT'
											width={'100%'}
											effect='blur'
											className='h-[100px] tablet:h-[130px] desktop:h-[150px] rounded-large object-cover aspect-aspect-[4/3]'
										/>
										<Image
											src={collection.smCollection2}
											alt='NFT'
											width={'100%'}
											effect='blur'
											className='h-[100px] tablet:h-[130px] desktop:h-[150px] rounded-large object-cover aspect-aspect-[4/3]'
										/>
										<div className='flex h-[100px] tablet:h-[130px] desktop:h-[150px] w-full items-center justify-center rounded-large bg-primary object-cover text-foreground-primary'>
											<Text
												as='p'
												size='5'
												weight='bold'
												className='font-space-mono tablet:text-md'>
												1010+
											</Text>
										</div>
									</Grid>
									<CardHeader className='p-0'>
										<CardTitle>
											<Text
												as='p'
												size='6'
												weight='semibold'
												className='desktop:text-md'>
												{collection.title}
											</Text>
										</CardTitle>
										<CardDescription className='flex items-center gap-3'>
											<Avatar size='sm'>
												<AvatarImage src={creator?.avatar} alt='avatar' />
												<AvatarFallback>{creator?.id}</AvatarFallback>
											</Avatar>
											<Text as='p'>{creator?.avatarTitle}</Text>
										</CardDescription>
									</CardHeader>
								</Card>
							))}
						</Grid>
					</TabsContent>
				</div>
			</Tabs>
		</section>
	);
};
export default NftsTabs;
