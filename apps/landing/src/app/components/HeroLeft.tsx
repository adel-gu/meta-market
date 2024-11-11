import { Button, Text } from '@meta-market/mint-ui';
import { RocketLaunch } from '@meta-market/mint-icons';

const HeroLeft = () => {
	return (
		<div className='flex-1 space-y-6 desktop:space-y-8'>
			<div className='space-y-4 text-center tablet:text-left desktop:space-y-6'>
				<Text
					as='h1'
					size='1'
					weight='semibold'
					className='leading-tight tablet:leading-none desktop:leading-none desktop:w-4/5'>
					Discover digital art & Collect NFTs
				</Text>
				<Text className='desktop:text-md desktop:w-4/5'>
					NFT marketplace UI created with Anima for Figma. Collect, buy and sell
					art from more than 20k NFT artists.
				</Text>
			</div>

			<div className='space-y-4 desktop:space-y-6'>
				<Button className='flex items-center gap-3 w-full tablet:w-auto'>
					<span>
						<RocketLaunch />
					</span>
					<span>Get Started</span>
				</Button>
				<div className='flex items-center justify-evenly mx-8 tablet:mx-0 tablet:justify-normal tablet:space-x-8'>
					<div>
						<Text
							as='p'
							size='3'
							weight='bold'
							className='font-space-mono desktop:text-lg'>
							240k+
						</Text>
						<Text as='p' size='6' className='desktop:text-md -mt-3'>
							Total Sale
						</Text>
					</div>
					<div>
						<Text
							as='p'
							size='3'
							weight='bold'
							className='font-space-mono desktop:text-lg'>
							100k+
						</Text>
						<Text as='p' size='6' className='desktop:text-md -mt-3'>
							Auctions
						</Text>
					</div>
					<div>
						<Text
							as='p'
							size='3'
							weight='bold'
							className='font-space-mono desktop:text-lg'>
							240k+
						</Text>
						<Text as='p' size='6' className='desktop:text-md -mt-3'>
							Artists
						</Text>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HeroLeft;
