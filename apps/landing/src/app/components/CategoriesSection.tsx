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
	CardContent,
	CardImage,
} from '@meta-market/mint-ui';

import {
	PaintBrush,
	Swatches,
	MusicNotes,
	Camera,
	VideoCamera,
	MagicWand,
	Basketball,
	Planet,
} from '@meta-market/mint-icons';

import Cat1 from '../../assets/category1.png';
import Cat2 from '../../assets/category2.png';
import Cat3 from '../../assets/category3.png';
import Cat4 from '../../assets/category4.png';
import Cat5 from '../../assets/category5.png';
import Cat6 from '../../assets/category6.png';
import Cat7 from '../../assets/category7.png';
import Cat8 from '../../assets/category8.png';

const categories = [
	{
		id: 'cat1',
		title: 'Art',
		background: Cat1,
		icon: (
			<PaintBrush className='w-20 desktop:w-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
		),
	},
	{
		id: 'cat2',
		title: 'Collectibles',
		background: Cat2,
		icon: (
			<Swatches className='w-20 desktop:w-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
		),
	},
	{
		id: 'cat3',
		title: 'Music',
		background: Cat3,
		icon: (
			<MusicNotes className='w-20 desktop:w-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
		),
	},
	{
		id: 'cat4',
		title: 'Photography',
		background: Cat4,
		icon: (
			<Camera className='w-20 desktop:w-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
		),
	},
	{
		id: 'cat5',
		title: 'Video',
		background: Cat5,
		icon: (
			<VideoCamera className='w-20 desktop:w-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
		),
	},
	{
		id: 'cat6',
		title: 'Utility',
		background: Cat6,
		icon: (
			<MagicWand className='w-20 desktop:w-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
		),
	},
	{
		id: 'cat7',
		title: 'Sport',
		background: Cat7,
		icon: (
			<Basketball className='w-20 desktop:w-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
		),
	},
	{
		id: 'cat8',
		title: 'Virtual Worlds',
		background: Cat8,
		icon: (
			<Planet className='w-20 desktop:w-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
		),
	},
];

const CategoriesSection = () => {
	return (
		<section className='container py-10 tablet:py-20 space-y-16'>
			<Text
				as='h2'
				size='2'
				weight='semibold'
				className='leading-tight tablet:leading-none desktop:leading-none desktop:w-4/5'>
				Browse Categories
			</Text>

			<Grid
				gap='lg'
				className='grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-4'>
				{categories.map((category) => (
					<Card key={category.id} className='bg-bg-secondary overflow-hidden'>
						<CardContent className='relative p-0 desktop:w-full overflow-hidden'>
							<CardImage
								className='bg-center	bg-cover flex justify-center items-center h-[140px] desktop:h-[240px]'
								style={{
									backgroundImage: `url(${category.background})`,
									filter: 'blur(15px)',
								}}
							/>
							{category.icon}
						</CardContent>
						<CardHeader className='mx-auto mt-0 space-y-0'>
							<CardTitle>
								<Text as='p' size='5' weight='semibold'>
									{category.title}
								</Text>
							</CardTitle>
						</CardHeader>
					</Card>
				))}
			</Grid>
		</section>
	);
};
export default CategoriesSection;
