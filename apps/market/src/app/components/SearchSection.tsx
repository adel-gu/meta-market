import { Button, Input, Text } from '@meta-market/mint-ui';
import { MagnifyingGlass } from '@meta-market/mint-icons';
const SearchSection = () => {
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
			<div className='flex flex-col gap-y-4 tablet:flex-row tablet:gap-x-5'>
				<Input placeholder='Search your favourite NFTs' className='w-full' />
				<Button variant='white' size='icon' className='w-full tablet:w-fit'>
					<MagnifyingGlass />
				</Button>
			</div>
		</section>
	);
};
export default SearchSection;
