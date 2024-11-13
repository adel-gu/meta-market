import CategoriesSection from '../components/CategoriesSection';
import CollectionSection from '../components/CollectionSection';
import CreatorsSection from '../components/CreatorsSection';
import DiscoverNftsSection from '../components/DiscoverNftsSection';
import HeroSection from '../components/HeroSection';

const Home = () => {
	return (
		<div>
			<HeroSection />
			<CollectionSection />
			<CreatorsSection />
			<CategoriesSection />
			<DiscoverNftsSection />
		</div>
	);
};
export default Home;
