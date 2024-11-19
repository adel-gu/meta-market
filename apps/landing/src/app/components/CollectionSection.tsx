import {
	Text,
	Grid,
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	Avatar,
	AvatarImage,
	AvatarFallback,
	Image,
	AspectRatio,
} from '@meta-market-nft/mint-ui';

import MrFox from '../../assets/mrFox.png';
import LargeCollection from '../../assets/dcgn-large.png';
import SmCollection1 from '../../assets/dcgn-sm-1.png';
import SmCollection2 from '../../assets/dcgn-sm-2.png';
import Shroomie from '../../assets/shroomie.png';
import MushroomLarge from '../../assets/mushroom-large.png';
import SmMushroom1 from '../../assets/mushroom-sm-1.png';
import SmMushroom2 from '../../assets/mushroom-sm-2.png';
import BeKind from '../../assets/beKind.png';
import DiscoLarge from '../../assets/disco-large.png';
import SmDisco1 from '../../assets/disco-sm-1.png';
import SmDisco2 from '../../assets/disco-sm-2.png';

const collections = [
	{
		id: 'dcgn',
		title: 'DSGN Animals',
		avatarTitle: 'MrFox',
		avatar: MrFox,
		largeCollection: LargeCollection,
		smCollection1: SmCollection1,
		smCollection2: SmCollection2,
		more: '1025+',
	},
	{
		id: 'magic-mushroom',
		title: 'Magic Mushrooms',
		avatarTitle: 'Shroomie',
		avatar: Shroomie,
		largeCollection: MushroomLarge,
		smCollection1: SmMushroom1,
		smCollection2: SmMushroom2,
		more: '950+',
	},
	{
		id: 'disco-machines',
		title: 'Disco Machines',
		avatarTitle: 'BeKind2Robots',
		avatar: BeKind,
		largeCollection: DiscoLarge,
		smCollection1: SmDisco1,
		smCollection2: SmDisco2,
		more: '2500+',
	},
];

const CollectionSection = () => {
	return (
		<section className='container py-10 tablet:py-20 space-y-16'>
			<div className='space-y-4 text-center tablet:text-left'>
				<Text
					as='h2'
					size='2'
					weight='semibold'
					className='leading-tight tablet:leading-none desktop:leading-none desktop:w-4/5'>
					Trending Collection
				</Text>
				<Text className='desktop:text-md desktop:w-4/5'>
					Checkout our weekly updated trending collection.
				</Text>
			</div>
			<Grid
				gap='lg'
				className='grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3'>
				{collections.map((collection, index) => (
					<Card
						className={`
									w-[330px]
									space-y-4
									rounded-none
								bg-bg-primary mx-auto tablet:mx-0 tablet:w-auto
									${index === 1 ? 'hidden tablet:block' : ''}
									${index === 2 ? 'hidden desktop:block' : ''}
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
									<AvatarImage src={collection.avatar} alt='avatar' />
									<AvatarFallback>{collection.id}</AvatarFallback>
								</Avatar>
								<Text as='p'>{collection.avatarTitle}</Text>
							</CardDescription>
						</CardHeader>
					</Card>
				))}
			</Grid>
		</section>
	);
};
export default CollectionSection;
