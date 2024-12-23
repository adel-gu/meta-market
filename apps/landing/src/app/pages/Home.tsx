import AuctionSection from '../components/AuctionSection';
import CategoriesSection from '../components/CategoriesSection';
import CollectionSection from '../components/CollectionSection';
import CreatorsSection from '../components/CreatorsSection';
import DiscoverNftsSection from '../components/DiscoverNftsSection';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import WeeklyDigest from '../components/WeeklyDigest';

const Home = () => {
	return (
		<div>
			<HeroSection />
			<CollectionSection />
			<CreatorsSection />
			<CategoriesSection />
			<DiscoverNftsSection />
			<AuctionSection />
			<HowItWorks />
			<WeeklyDigest />
		</div>
	);
};
export default Home;
