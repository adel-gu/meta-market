import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	Text,
} from '@meta-market/mint-ui';
import {
	DiscordLogo,
	InstagramLogo,
	TwitterLogo,
	YoutubeLogo,
	Plus,
	Copy,
	Globe,
} from '@meta-market/mint-icons';

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

const ArtistProfileBio = () => {
	const { id } = useParams();
	const creator = creators.find((creator) => creator.id === id);

	return (
		<section className='container -mt-8 pb-10 tablet:pb-20 space-y-6 tablet:-mt-16'>
			<Avatar
				variant='square'
				className='mx-auto tablet:mx-0 tablet:h-[120px] tablet:w-[120px]'>
				<AvatarImage src={creator?.avatar} alt={creator?.avatarTitle} />
				<AvatarFallback>{creator?.avatarTitle}</AvatarFallback>
			</Avatar>
			<div className='space-y-6 desktop:flex desktop:items-center desktop:justify-between'>
				<Text as='h2' size='1' weight='semibold'>
					{creator?.avatarTitle}
				</Text>
				<div className='flex flex-col gap-4 tablet:flex-row'>
					<Button className='space-x-3'>
						<Copy />
						<span>0xc0E3...B79C</span>
					</Button>
					<Button variant='outline' className='space-x-3'>
						<Plus className='text-primary' />
						<span className='text-foreground-primary'>Follow</span>
					</Button>
				</div>
			</div>
			<div className='flex items-center justify-between tablet:justify-normal tablet:space-x-8 '>
				<div>
					<Text
						as='p'
						size='3'
						weight='bold'
						className='font-space-mono desktop:text-lg'>
						250k+
					</Text>
					<Text as='p' size='6' className='desktop:text-md -mt-1'>
						Volume
					</Text>
				</div>
				<div>
					<Text
						as='p'
						size='3'
						weight='bold'
						className='font-space-mono desktop:text-lg'>
						50k+
					</Text>
					<Text as='p' size='6' className='desktop:text-md -mt-1'>
						NFTs Sold
					</Text>
				</div>
				<div>
					<Text
						as='p'
						size='3'
						weight='bold'
						className='font-space-mono desktop:text-lg'>
						3000+
					</Text>
					<Text as='p' size='6' className='desktop:text-md -mt-1'>
						Followers
					</Text>
				</div>
			</div>
			<div>
				<Text
					variant='caption'
					size='5'
					weight='bold'
					className='font-space-mono'>
					Bio
				</Text>
				<Text>The internet's friendliest designer kid.</Text>
			</div>
			<div className='space-y-2'>
				<Text
					variant='caption'
					size='5'
					weight='bold'
					className='font-space-mono'>
					Links
				</Text>
				<div className='flex gap-4'>
					<Globe />
					<DiscordLogo />
					<YoutubeLogo />
					<TwitterLogo />
					<InstagramLogo />
				</div>
			</div>
		</section>
	);
};
export default ArtistProfileBio;
