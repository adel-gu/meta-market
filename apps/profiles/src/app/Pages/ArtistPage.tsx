import ProfileBackground from '../../assets/profile-background.png';
import ArtistProfileBio from '../components/ArtistProfileBio';
import NftsTabs from '../components/NftsTabs';

const ArtistPage = () => {
	return (
		<div>
			<div
				className='relative bg-center bg-cover h-[250px] tablet:h-[280px] desktop:h-[320px]'
				style={{ backgroundImage: `url(${ProfileBackground})` }}>
				<div className='absolute inset-0 z-0 bg-gradient-to-t	from-primary/85' />
			</div>
			<ArtistProfileBio />
			<NftsTabs />
		</div>
	);
};
export default ArtistPage;
