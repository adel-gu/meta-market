import { Text } from '@meta-market-nft/mint-ui';

const TopCreators = () => {
	return (
		<section className='container py-10 tablet:py-20 space-y-6'>
			<div className='space-y-4 text-center tablet:text-left'>
				<Text
					as='h2'
					size='2'
					weight='semibold'
					className='leading-tight tablet:leading-none desktop:leading-none desktop:w-4/5'>
					Browse Marketplace
				</Text>
				<Text className='desktop:text-md desktop:w-4/5'>
					Browse through more than 50k NFTs on the NFT Marketplace.
				</Text>
			</div>
		</section>
	);
};
export default TopCreators;
