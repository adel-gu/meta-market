import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const HeroSection = () => {
	return (
		<section className='container py-10 tablet:py-20'>
			<div className='flex flex-col items-center gap-8 tablet:flex-row'>
				<HeroLeft />
				<HeroRight />
			</div>
		</section>
	);
};
export default HeroSection;
