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
	Input,
} from '@meta-market/mint-ui';
import { EnvelopeSimple } from '@meta-market/mint-icons';

import WeeklyDigestAsset from '../../assets/weekly-digest.png';

const WeeklyDigest = () => {
	return (
		<section className='container py-10 tablet:py-20 space-y-16'>
			<Card className={`bg-bg-secondary p-6 tablet:flex`}>
				<CardImage className='rounded-b-large flex-1'>
					<Image
						src={WeeklyDigestAsset}
						alt='Space Man'
						width={'100%'}
						height={'100%'}
						effect='blur'
					/>
				</CardImage>
				<div className='flex-1 flex flex-col justify-center tablet:px-16 desktop:px-28'>
					<CardHeader className='mt-0 space-y-0 p-0 py-6'>
						<CardTitle>
							<Text as='p' size='3' weight='semibold'>
								Join our weekly digest
							</Text>
						</CardTitle>
						<CardDescription className='flex items-center gap-3'>
							<Text>
								Get exclusive promotions & updates straight to your inbox.
							</Text>
						</CardDescription>
					</CardHeader>
					<CardFooter className='flex flex-col gap-4 p-0 '>
						<Input
							className='w-full'
							variant='white'
							placeholder='Enter your email here'
						/>
						<Button className='flex items-center gap-3 w-full' type='submit'>
							<EnvelopeSimple />

							<span>Subscribe</span>
						</Button>
					</CardFooter>
				</div>
			</Card>
		</section>
	);
};
export default WeeklyDigest;
