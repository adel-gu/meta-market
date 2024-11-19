import {
	DiscordLogo,
	EnvelopeSimple,
	InstagramLogo,
	Logo,
	TwitterLogo,
	YoutubeLogo,
} from '@meta-market-nft/mint-icons';
import { Button, Input, Separator, Text } from '@meta-market-nft/mint-ui';
import { Link } from 'react-router-dom';

const links = [
	{
		title: 'Marketplace',
		id: 'marketplace',
		path: '/market/index',
	},
	{
		title: 'Rankings',
		id: 'rankings',
		path: '/market/rankings',
	},
	{
		title: 'Connect a wallet',
		id: 'connectwallet',
		path: '/auth/connect-wallet',
	},
];

const Footer = () => {
	return (
		<footer className='bg-bg-secondary'>
			<div className='container py-10 tablet:py-20'>
				<div className='space-y-8 tablet:flex tablet:items-start tablet:justify-between tablet:space-y-0 '>
					<div className='space-y-3 tablet:mt-1'>
						<Link to='/'>
							<Logo className='text-3xl text-primary' width={240} />
						</Link>
						<Text>NFT marketplace UI created with Anima for Figma.</Text>
						<Text>Join our community.</Text>
						<div className='flex gap-4'>
							<DiscordLogo />
							<YoutubeLogo />
							<TwitterLogo />
							<InstagramLogo />
						</div>
					</div>
					<div className='space-y-3'>
						<Text as='p' size='3' weight='semibold'>
							Explore
						</Text>
						<div className='flex flex-col space-y-3'>
							{links.map((link) => (
								<Link
									key={link.id}
									to={link.path}
									className={`desktop:hover:underline`}>
									{link.title}
								</Link>
							))}
						</div>
					</div>
					<div className='mt-0 space-y-3 p-0'>
						<Text as='p' size='3' weight='semibold'>
							Join our weekly digest
						</Text>
						<Text>
							Get exclusive promotions & updates straight to your inbox.
						</Text>
						<div className='flex flex-col gap-4 p-0 '>
							<Input
								className='w-full'
								variant='white'
								placeholder='Enter your email here'
							/>
							<Button className='flex items-center gap-3 w-full' type='submit'>
								<EnvelopeSimple />

								<span>Subscribe</span>
							</Button>
						</div>
					</div>
				</div>
				<div className='mt-16 space-y-3 '>
					<Separator />
					<Text>Ⓒ NFT Market. Use this template freely.</Text>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
