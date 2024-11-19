import { Text, Button } from '@meta-market-nft/mint-ui';
import { Metamask, Coinbase, WalletConnect } from '@meta-market-nft/mint-icons';

const ConnectWallet = () => {
	return (
		<div className='container flex flex-col justify-center py-8 gap-8 tablet:px-16'>
			<div className='space-y-4 text-center tablet:text-left'>
				<Text
					as='h2'
					size='2'
					weight='semibold'
					className='leading-tight tablet:leading-none desktop:leading-none desktop:w-4/5'>
					Connect wallet
				</Text>
				<Text className='desktop:text-md desktop:w-4/5'>
					Choose a wallet you want to connect. There are several wallet
					providers.
				</Text>
			</div>
			<div className='w-fit space-y-5'>
				<Button
					className='flex items-center justify-start gap-3 w-full text-foreground-primary'
					variant='outline'>
					<span>
						<Metamask />
					</span>
					<span>Metamask</span>
				</Button>
				<Button
					className='flex items-center justify-start gap-3 w-full text-foreground-primary'
					variant='outline'>
					<span>
						<WalletConnect />
					</span>
					<span>Wallet Connect</span>
				</Button>
				<Button
					className='flex items-center justify-start gap-3 w-full text-foreground-primary'
					variant='outline'>
					<span>
						<Coinbase />
					</span>
					<span>Coinbase</span>
				</Button>
			</div>
		</div>
	);
};
export default ConnectWallet;
