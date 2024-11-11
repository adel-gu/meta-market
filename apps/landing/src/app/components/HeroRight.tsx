import { useEffect, useState } from 'react';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Card,
	CardDescription,
	CardHeader,
	CardImage,
	CardTitle,
	Image,
	Skeleton,
	Text,
} from '@meta-market/mint-ui';
import HeroCardImg from '../../assets/heroCardImg.png';
import HeroCardAvatarImg from '../../assets/animaKid.png';

const HeroRight = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 800);
	}, []);

	return (
		<div className='flex-1'>
			{isLoading ? (
				<Skeleton className='flex flex-col space-y-3 w-full rounded-[20px] overflow-hidden desktop:w-[95%] desktop:ml-auto'>
					<Skeleton className='h-[550px] w-full' />
					<div className='space-y-2 p-5'>
						<Skeleton className='h-4 w-[250px]' />
						<Skeleton className='h-4 w-[200px]' />
					</div>
				</Skeleton>
			) : (
				<Card className='desktop:w-[80%] desktop:ml-auto'>
					<CardImage>
						<Image src={HeroCardImg} alt='NFT' width={'100%'} effect='blur' />
					</CardImage>
					<CardHeader>
						<CardTitle>
							<Text
								as='p'
								size='6'
								weight='semibold'
								className='desktop:text-md'>
								Space Walking
							</Text>
						</CardTitle>
						<CardDescription className='flex items-center gap-3'>
							<Avatar size='sm'>
								<AvatarImage src={HeroCardAvatarImg} alt='animaKid' />
								<AvatarFallback>AK</AvatarFallback>
							</Avatar>
							<Text>Animakid</Text>
						</CardDescription>
					</CardHeader>
				</Card>
			)}
		</div>
	);
};
export default HeroRight;
