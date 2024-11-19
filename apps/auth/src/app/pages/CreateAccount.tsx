import { Text, Input, Button } from '@meta-market-nft/mint-ui';

const CreateAccount = () => {
	return (
		<div className='container flex flex-col justify-center py-8 gap-8 tablet:px-16'>
			<div className='space-y-4 text-center tablet:text-left'>
				<Text
					as='h2'
					size='2'
					weight='semibold'
					className='leading-tight tablet:leading-none desktop:leading-none desktop:w-4/5'>
					Create account
				</Text>
				<Text className='desktop:text-md desktop:w-4/5'>
					Welcome! enter your details and start creating, collecting and selling
					NFTs.
				</Text>
			</div>
			<form className='flex flex-col gap-4'>
				<Input className='w-full' variant='white' placeholder='Username' />
				<Input className='w-full' variant='white' placeholder='Email Address' />
				<Input className='w-full' variant='white' placeholder='Password' />
				<Input
					className='w-full'
					variant='white'
					placeholder='Confirm Password'
				/>
				<Button className='flex items-center gap-3 w-full' type='submit'>
					Create account
				</Button>
			</form>
		</div>
	);
};
export default CreateAccount;
