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

import {
	WalletSetup,
	EarningSetup,
	CollectionSetup,
} from '@meta-market/mint-icons';

const cards = [
	{
		id: 'setup-your-wallet',
		title: 'Setup Your Wallet',
		description:
			'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
		icon: <WalletSetup className='w-32 mx-auto tablet:w-36 desktop:w-44' />,
	},
	{
		id: 'create-collection',
		title: 'Create Collection',
		description:
			'Upload your work and setup your collection. Add a description, social links and floor price.',
		icon: <CollectionSetup className='w-32 mx-auto tablet:w-36 desktop:w-44' />,
	},
	{
		id: 'start-earning',
		title: 'Start Earning',
		description:
			'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
		icon: <EarningSetup className='w-32 mx-auto tablet:w-36 desktop:w-44' />,
	},
];

const HowItWorks = () => {
	return (
		<section className='container py-10 tablet:py-20 space-y-16'>
			<div className='space-y-4 text-center tablet:text-left'>
				<Text
					as='h2'
					size='2'
					weight='semibold'
					className='leading-tight tablet:leading-none desktop:leading-none'>
					How it works
				</Text>
				<Text className='desktop:text-md'>Find out how to get started</Text>
			</div>
			<div>
				<Grid
					gap='lg'
					className='grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3'>
					{cards.map((card, index) => (
						<Card key={card.id} className={`bg-bg-secondary text-center py-8`}>
							<CardImage>{card.icon}</CardImage>
							<CardHeader className='mt-0 space-y-0'>
								<CardTitle>
									<Text as='p' size='5' weight='semibold'>
										{card.title}
									</Text>
								</CardTitle>
								<CardDescription className='flex items-center gap-3'>
									<Text>{card.description}</Text>
								</CardDescription>
							</CardHeader>
						</Card>
					))}
				</Grid>
			</div>
		</section>
	);
};
export default HowItWorks;
