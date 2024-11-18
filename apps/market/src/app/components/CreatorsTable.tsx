import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Badge,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
	Text,
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

const CreatorsTable = () => {
	return (
		<section className='container pb-10 tablet:pb-20 space-y-6'>
			<div className='overflow-x-auto w-full'>
				<Tabs className='w-[1200px] tablet:w-auto' defaultValue='today'>
					<TabsList className='grid w-full grid-cols-4 '>
						<TabsTrigger
							value='today'
							className='text-foreground-secondary data-[state=active]:text-foreground-primary'>
							Today
						</TabsTrigger>
						<TabsTrigger
							value='this-week'
							className='text-foreground-secondary data-[state=active]:text-foreground-primary'>
							This Week
						</TabsTrigger>
						<TabsTrigger
							value='this-month'
							className='text-foreground-secondary data-[state=active]:text-foreground-primary'>
							This Month
						</TabsTrigger>
						<TabsTrigger
							value='all-time'
							className='text-foreground-secondary data-[state=active]:text-foreground-primary'>
							All Time
						</TabsTrigger>
					</TabsList>
					<TabsContent value='today'>
						<Table className='px-0 min-w-[800px] tablet:min-w-auto'>
							<TableHeader>
								<TableRow className='bg-bg-primary border-bg-secondary'>
									<TableHead className='px-6'>#</TableHead>
									<TableHead className='flex-1'>Artist</TableHead>
									<TableHead className='flex-1'>Change</TableHead>
									<TableHead className='flex-1'>NFTs Sold</TableHead>
									<TableHead className='flex-1'>Volume</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{creators.map((creator, index) => (
									<TableRow className='border-none' key={creator.id}>
										<TableCell>
											<Badge>{index + 1}</Badge>
										</TableCell>
										<TableCell className='flex-1'>
											<Badge
												className='space-x-3 px-0 bg-none'
												variant='transparent'>
												<Avatar size='sm'>
													<AvatarImage
														src={creator.avatar}
														alt={creator.name}
													/>
													<AvatarFallback>{creator.name}</AvatarFallback>
												</Avatar>
												<Text>{creator.name}</Text>
											</Badge>
										</TableCell>
										<TableCell className='text-green flex-1'>+1.41%</TableCell>
										<TableCell className='flex-1'>602</TableCell>
										<TableCell className='flex-1'>12.4 ETH</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
};
export default CreatorsTable;
