import { Link, NavLink } from 'react-router-dom';
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
} from '@meta-market/mint-ui';
import { RocketLaunch } from '@meta-market/mint-icons';

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

const creators = [
	{
		id: 'keeptreal',
		name: 'Keeptreal',
		avatar: Creator,
	},
	{
		id: 'digilab',
		name: 'DigiLab',
		avatar: Creator1,
	},
	{
		id: 'gravityone',
		name: 'GravityOne',
		avatar: Creator2,
	},
	{
		id: 'juanie',
		name: 'Juanie',
		avatar: Creator3,
	},
	{
		id: 'bluewhale',
		name: 'BlueWhale',
		avatar: Creator4,
	},
	{
		id: 'mrfox',
		name: 'Mr Fox',
		avatar: Creator5,
	},
	{
		id: 'shroomie',
		name: 'Shroomie',
		avatar: Creator6,
	},
	{
		id: 'robotica',
		name: 'Robotica',
		avatar: Creator7,
	},
	{
		id: 'rustyrobot',
		name: 'RustyRobot',
		avatar: Creator8,
	},
	{
		id: 'animakid',
		name: 'Animakid',
		avatar: Creator9,
	},
	{
		id: 'dotgu',
		name: 'Dotgu',
		avatar: Creator10,
	},
	{
		id: 'ghiblier',
		name: 'Ghiblier',
		avatar: Creator11,
	},
];

const CreatorsSection = () => {
	return (
		<section className='container py-10 tablet:py-20 space-y-16'>
			<div className='flex flex-col items-center justify-between space-y-4 tablet:flex-row'>
				<div className='space-y-4 text-center tablet:text-left'>
					<Text
						as='h2'
						size='2'
						weight='semibold'
						className='leading-tight tablet:leading-none desktop:leading-none desktop:w-4/5'>
						Top creators
					</Text>
					<Text className='desktop:text-md desktop:w-4/5'>
						Checkout Top Rated Creators on the NFT Marketplace
					</Text>
				</div>
				<Button variant='outline' asChild className='space-x-3'>
					<Link to='/market/rankings'>
						<span className='text-primary'>
							<RocketLaunch />
						</span>
						<span className='text-foreground-primary'>View Rankings</span>
					</Link>
				</Button>
			</div>
			<div>
				<Grid
					gap='lg'
					className='grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4'>
					{creators.map((creator, index) => (
						<Card
							key={creator.id}
							className={`p-5 bg-bg-secondary flex items-center space-x-4 desktop:flex-col desktop:space-y-8 desktop:space-x-0
              ${index === 5 ? 'hidden tablet:flex' : ''}
              ${index >= 6 ? 'hidden desktop:flex' : ''}
            `}>
							<CardContent className='relative desktop:w-full p-0'>
								<Badge className='absolute z-50 -top-2 -left-2 desktop:relative desktop:top-0 desktop:left-0'>
									{index + 1}
								</Badge>
								<Avatar className='desktop:mx-auto'>
									<AvatarImage src={creator.avatar} alt={creator.name} />
									<AvatarFallback>{creator.name}</AvatarFallback>
								</Avatar>
							</CardContent>
							<CardHeader className='mt-0 desktop:text-center mx-auto space-y-0'>
								<CardTitle>
									<Text as='p' size='5' weight='semibold'>
										{creator.name}
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
					))}
				</Grid>
			</div>
		</section>
	);
};
export default CreatorsSection;
